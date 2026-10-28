import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? (locale as Locale) : "en";
  const dict = getDictionary(currentLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0d12",
          color: "#f6f5f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "22px",
              height: "22px",
              background: "#2f46ff",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {dict.nav.brand}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "72px",
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              maxWidth: "920px",
            }}
          >
            {`${dict.hero.headline.line1} ${dict.hero.headline.line2} ${dict.hero.headline.line3}`}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#a4a9b6",
              maxWidth: "780px",
              lineHeight: 1.4,
            }}
          >
            {dict.meta.ogTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2b2f3a",
            paddingTop: "26px",
            fontSize: "16px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8a909e",
          }}
        >
          <span>{site.domain}</span>
          <span>{dict.pilot.title}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
