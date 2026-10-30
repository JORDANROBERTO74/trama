# Trama — Provenance & Compliance Ledger

This ledger records the origin, brand transformation and asset provenance for **Trama**.

## 1. Project Background & Transformation

- **Original Working Directory:** `E:\Projects\landing\next\keyonehub-sierra`
- **Rebuilt Project Name:** `trama`
- **Final Repository:** `https://github.com/JORDANROBERTO74/trama`
- **Live Production URL:** `https://trama-ai.vercel.app`
- **Mode:** Change pass. The section map, component skeleton and copy structure were reused; blockers were rewritten.
- **Duplicate note:** `keyonehub-marketing-site-bluetheme` covers the same source product. It is a separate folder and a separate decision; it was not touched here.

## 2. Brand & Identity

- **Brand:** Trama
- **Sector:** Operational intelligence and agent orchestration for B2B operations teams.
- **Visual system:** Bone (`#f6f5f0`), ink (`#0b0d12`), graphite (`#14171f`), signal cobalt (`#2f46ff`), slate (`#5b6170`), line (`#dcdad2`), surface (`#ecebe4` / `#e2e0d7`).
- **Typography:** Instrument Sans for display and UI, IBM Plex Mono for labels, metrics and mock data. Both self-hosted via `next/font/google`.
- **Locale strategy:** Typed bilingual copy (`en`, `es`) on `/[locale]` routes, negotiated from `Accept-Language` and persisted in the `trama.locale` cookie.

The original design system declared itself "inspired by sierra.ai" and shipped a forest-green palette, `--sierra-*` tokens and a `SierraLogo` component. All of that was replaced: the design-system folder is now `components/system`, the tokens are `--brand-*`, and the palette and typefaces are original to this project.

## 3. Removed Third-Party Material

The following content was present in the source and does not exist in this repository:

- **Vendor names as integrations:** Zendesk, Snowflake, Slack, OpenAPI. They now read as categories: CRM, Ticketing, Billing, Data warehouse, Team chat, Identity.
- **Vendor mentions in copy:** "Send a Slack message", "Slack mention routing", "Slack steps", "Notify Slack Channel". Replaced with channel-neutral wording.
- **Certification badges:** AICPA SOC 2, ISO 27001, ISO 42001, HIPAA, GDPR and EU AI Act marks drawn as SVG, plus a "star" badge. The whole `compliance-badge.tsx` component was deleted. The trust section now lists five engineering controls instead of certifications.
- **Customer logos:** CLEAR, Rocket Mortgage, SiriusXM and Minted were rendered as testimonial wordmarks in `testimonial-brand-logo.tsx`. The file was deleted; demo cards carry a channel label instead.
- **Unused design components:** a 44 KB dashboard graphic, charts, calendar, sidebar and 30+ other unused UI primitives were deleted.

## 4. Asset Provenance

- **Photography:** none. The product surfaces are HTML/CSS mocks, so there are no stock photos, no generated faces and no third-party imagery to license.
- **Brand mark:** custom SVG (`src/app/icon.svg`) — a diamond in a rounded ink square with a signal dot.
- **Runtime dependencies:** no remote fonts, image hosts or CDNs.

## 5. Copy & Localisation

- All English copy was rewritten from the template's structure; the Spanish dictionary is an original adaptation, not machine output pasted verbatim.
- Project and workflow names are fictional.
- Pilot metrics are labelled as targets (`targetLabel`), not as measured outcomes.
- Contact and legal links point to in-page anchors; no real mailbox is implied.

## 6. Architectural Verification

- Next.js 16.4.3 App Router with Turbopack; React 19.2.4; strict TypeScript.
- `/en` and `/es` are statically generated; `/` returns `307` to the negotiated locale.
- `[locale]/[...rest]` renders the styled 404 for unknown paths.
- `pnpm typecheck`, `pnpm lint` and `pnpm build` complete without errors or warnings.
- `robots.txt`, multilingual `sitemap.xml`, `hreflang` alternates and a generated 1200×630 OpenGraph card are in place.

## License note

This repository contains derivative work. The license covers only the original
contributions of the copyright holder. See [LICENSE](../LICENSE).