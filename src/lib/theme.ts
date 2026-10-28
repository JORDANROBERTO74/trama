export type BrandTheme = "base" | "tech" | "product" | "platform" | "brand";

export const brandThemeClasses: Record<
  BrandTheme,
  { section: string; themeClass: string }
> = {
  base: {
    themeClass: "theme-base",
    section: "bg-bone text-ink",
  },
  tech: {
    themeClass: "theme-tech",
    section: "bg-graphite text-bone",
  },
  product: {
    themeClass: "theme-product",
    section: "bg-surface text-ink",
  },
  platform: {
    themeClass: "theme-platform",
    section: "bg-surface-2 text-ink",
  },
  brand: {
    themeClass: "theme-brand",
    section: "bg-signal text-white",
  },
};
