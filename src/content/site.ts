/** Business details as published on pelicansnestcafe.com.au. */
export const site = {
  name: "Pelicans Nest Cafe",
  address: { street: "143 The Esplanade", suburb: "Wynnum", state: "QLD", postcode: "4178", country: "AU" },
  phone: "(07) 3396 3777",
  phoneIntl: "+61733963777",
  email: "admin@pelicansnestcafe.com.au",
  /** Opening hours aren't published on their site — confirm with the business before adding. */
  hours: null as null | { days: string; time: string }[],
  isPreview: true,
};

export const fullAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;
export const telHref = `tel:${site.phoneIntl}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Pelicans Nest Cafe ${fullAddress}`)}`;

export function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return vercel ? `https://${vercel}` : "http://localhost:3000";
}
