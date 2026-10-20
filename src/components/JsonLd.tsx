import { menu } from "@/content/menu";
import { site, siteUrl } from "@/content/site";

/** Restaurant structured data with the full menu. Hours are omitted until confirmed. */
export function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    url: siteUrl(),
    telephone: site.phoneIntl,
    email: site.email,
    servesCuisine: ["Seafood", "Fish and chips", "Cafe", "Breakfast"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: menu.flatMap((g) =>
        g.sections.map((s) => ({
          "@type": "MenuSection",
          name: s.title,
          hasMenuItem: s.items.map((i) => {
            const single = /^\$(\d+(?:\.\d+)?)$/.exec(i.price);
            return {
              "@type": "MenuItem",
              name: i.name,
              ...(i.description ? { description: i.description } : {}),
              ...(single ? { offers: { "@type": "Offer", price: single[1], priceCurrency: "AUD" } } : {}),
            };
          }),
        })),
      ),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
