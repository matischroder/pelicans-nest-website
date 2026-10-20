import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { site, siteUrl } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], display: "swap", axes: ["wdth", "opsz"] });
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], display: "swap" });

const title = "Pelicans Nest Cafe Wynnum | Fish & Chips, Seafood & Breakfast on the Esplanade";
const description =
  "Pelicans Nest Cafe on The Esplanade, Wynnum. Fish & chips, Moreton Bay bugs, oysters, seafood packs, burgers, all-day muffins & wraps, breakfast, coffee and shakes. Call (07) 3396 3777.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_AU", siteName: site.name, title, description, url: "/" },
  robots: site.isPreview ? { index: false, follow: false } : { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#12415e" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
