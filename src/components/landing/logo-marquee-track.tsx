"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type Ref,
} from "react";
import { BrandLogoCell } from "./brand-logo-cell";
import { cn } from "@/lib/utils";

const MARQUEE_SPEED_PX_PER_SEC = 48;
const DRAG_THRESHOLD_PX = 5;

type LogoMarqueeTrackProps = {
  items: readonly string[];
  label: string;
};

function normalizeOffset(offset: number, loopWidth: number) {
  if (loopWidth <= 0) return offset;
  let next = offset;
  while (next >= loopWidth) next -= loopWidth;
  while (next < 0) next += loopWidth;
  return next;
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function LogoRow({
  items,
  rowIndex,
  hidden,
  rowRef,
}: {
  items: readonly string[];
  rowIndex: number;
  hidden?: boolean;
  rowRef?: Ref<HTMLUListElement>;
}) {
  return (
    <ul
      ref={rowRef}
      className="flex shrink-0 list-none items-center gap-0 pl-0"
      aria-hidden={hidden || undefined}
    >
      {items.map((name, itemIndex) => (
        <BrandLogoCell
          key={`${name}-${rowIndex}-${itemIndex}`}
          name={name}
          hideFromAccessibility={hidden}
        />
      ))}
    </ul>
  );
}

export function LogoMarqueeTrack({ items, label }: LogoMarqueeTrackProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstRowRef = useRef<HTMLUListElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const dragRef = useRef({
    pending: false,
    active: false,
    startX: 0,
    startOffset: 0,
    pointerId: -1,
  });

  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [loopWidth, setLoopWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const showDuplicate = !reduceMotion;
  const isPaused =
    reduceMotion || isHovered || isDragging || isKeyboardFocused || isTouching;

  const applyTransform = useCallback((offset: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(-${offset}px, 0, 0)`;
  }, []);

  useEffect(() => {
    const row = firstRowRef.current;
    if (!row || !showDuplicate) {
      loopWidthRef.current = 0;
      setLoopWidth(0);
      offsetRef.current = 0;
      applyTransform(0);
      return;
    }

    const update = () => {
      const width = row.offsetWidth;
      loopWidthRef.current = width;
      setLoopWidth(width);
      offsetRef.current = normalizeOffset(offsetRef.current, width);
      applyTransform(offsetRef.current);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(row);
    return () => observer.disconnect();
  }, [showDuplicate, items, applyTransform]);

  useEffect(() => {
    if (reduceMotion || isPaused || !showDuplicate || loopWidth <= 0) return;

    let last = performance.now();
    let frameId = 0;
    let running = true;

    const tick = (now: number) => {
      if (!running) return;
      const width = loopWidthRef.current;
      if (width <= 0) {
        frameId = requestAnimationFrame(tick);
        last = now;
        return;
      }

      const delta = (now - last) / 1000;
      last = now;
      offsetRef.current = normalizeOffset(
        offsetRef.current + MARQUEE_SPEED_PX_PER_SEC * delta,
        width
      );
      applyTransform(offsetRef.current);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(frameId);
    };
  }, [reduceMotion, isPaused, showDuplicate, loopWidth, applyTransform]);

  const setOffset = useCallback(
    (next: number) => {
      const width = loopWidthRef.current;
      offsetRef.current = normalizeOffset(next, width);
      applyTransform(offsetRef.current);
    },
    [applyTransform]
  );

  const clearPendingDrag = useCallback(() => {
    const drag = dragRef.current;
    if (drag.pending && !drag.active) {
      drag.pending = false;
      drag.pointerId = -1;
    }
  }, []);

  const finishDrag = useCallback(() => {
    const drag = dragRef.current;
    if (drag.active && viewportRef.current && drag.pointerId >= 0) {
      try {
        viewportRef.current.releasePointerCapture(drag.pointerId);
      } catch {
        /* already released */
      }
    }
    drag.pending = false;
    drag.active = false;
    drag.pointerId = -1;
    setIsDragging(false);
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.button !== 0 || !showDuplicate) return;
      dragRef.current = {
        pending: true,
        active: false,
        startX: event.clientX,
        startOffset: offsetRef.current,
        pointerId: event.pointerId,
      };
    },
    [showDuplicate]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const viewport = viewportRef.current;
      const drag = dragRef.current;
      if (!viewport || (!drag.pending && !drag.active)) return;

      const delta = event.clientX - drag.startX;

      if (drag.pending && !drag.active) {
        if (Math.abs(delta) < DRAG_THRESHOLD_PX) return;
        drag.pending = false;
        drag.active = true;
        setIsDragging(true);
        viewport.setPointerCapture(event.pointerId);
      }

      if (!drag.active) return;

      setOffset(drag.startOffset - delta);
    },
    [setOffset]
  );

  const handlePointerUp = useCallback(() => {
    finishDrag();
  }, [finishDrag]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    clearPendingDrag();

    if (dragRef.current.active) {
      finishDrag();
    }

    const viewport = viewportRef.current;
    if (
      viewport &&
      document.activeElement === viewport &&
      !viewport.matches(":focus-visible")
    ) {
      viewport.blur();
    }
  }, [clearPendingDrag, finishDrag]);

  const handleFocus = useCallback((event: React.FocusEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    requestAnimationFrame(() => {
      if (target?.matches(":focus-visible")) {
        setIsKeyboardFocused(true);
      }
    });
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!showDuplicate || loopWidthRef.current <= 0) return;

      const step = 80;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setOffset(offsetRef.current - step);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setOffset(offsetRef.current + step);
      }
    },
    [showDuplicate, setOffset]
  );

  if (reduceMotion) {
    return (
      <div
        role="region"
        aria-label={label}
        className="mt-10 overflow-x-auto marquee-fade [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max list-none items-center pl-0">
          {items.map((name) => (
            <BrandLogoCell key={name} name={name} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-label={label}
      tabIndex={0}
      className={cn(
        "mt-10 h-14 overflow-hidden marquee-fade outline-none md:h-16",
        (isHovered || isDragging || isKeyboardFocused) && "cursor-grab",
        isDragging && "cursor-grabbing"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={() => setIsKeyboardFocused(false)}
      onTouchStart={() => setIsTouching(true)}
      onTouchEnd={() => setIsTouching(false)}
      onTouchCancel={() => setIsTouching(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      <div ref={trackRef} className="marquee-track flex w-max will-change-transform">
        <LogoRow items={items} rowIndex={0} rowRef={firstRowRef} />
        <LogoRow items={items} rowIndex={1} hidden />
      </div>
    </div>
  );
}
