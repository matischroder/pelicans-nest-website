import Image from "next/image";
import { breakfastTimes } from "@/content/menu";
import { fullAddress, mapsUrl, site, telHref } from "@/content/site";
import { PhoneGlyph, PinGlyph } from "./Icons";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-16 sm:py-20">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="visit-title" className="font-display text-4xl font-extrabold tracking-tight text-bay [font-stretch:88%] sm:text-5xl">
            Find us on The Esplanade
          </h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-ink-soft uppercase">Address</dt>
              <dd className="mt-1 text-lg">
                {fullAddress}
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="ml-3 inline-flex items-center gap-1 text-sm font-bold text-aqua underline underline-offset-4">
                  <PinGlyph className="size-3.5" />
                  Directions
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-ink-soft uppercase">Phone</dt>
              <dd className="mt-1">
                <a href={telHref} className="inline-flex items-center gap-2 text-2xl font-extrabold text-bay">
                  <PhoneGlyph className="size-5 text-coral" />
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-ink-soft uppercase">Hours</dt>
              <dd className="mt-1 text-lg">
                {breakfastTimes} Muffins, wraps &amp; rolls all day.
                <span className="mt-1 block text-base text-ink-soft">Call us for today&apos;s opening hours.</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.16em] text-ink-soft uppercase">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="underline decoration-aqua decoration-2 underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl ring-1 ring-bay/10">
            <Image src="/images/cafe-esplanade.jpg" alt="Pelicans Nest Cafe from across The Esplanade" width={640} height={426} sizes="(min-width: 1024px) 560px, 92vw" className="h-auto w-full" />
          </div>
          <div className="h-72 overflow-hidden rounded-3xl bg-sand-2 ring-1 ring-bay/10">
            <iframe
              title={`Map showing Pelicans Nest Cafe, ${fullAddress}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`Pelicans Nest Cafe, ${fullAddress}`)}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
