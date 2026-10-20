import Image from "next/image";
import { breakfastTimes } from "@/content/menu";
import { fullAddress, mapsUrl, site, telHref } from "@/content/site";
import { PhoneGlyph, PinGlyph, Wave } from "./Icons";

/** A seaside postcard: their real Esplanade photo, with the round logo as the stamp. */
function Postcard() {
  return (
    <figure className="animate-rise relative mx-auto w-full max-w-[29rem] rotate-[-2deg] rounded-sm bg-white p-3 pb-5 shadow-[0_30px_60px_-25px_rgb(18_65_94/0.45)] [--tilt:-2deg] sm:p-4 sm:pb-6">
      <div className="overflow-hidden rounded-[2px]">
        <Image
          src="/images/cafe-esplanade.jpg"
          alt="Pelicans Nest Cafe with its white umbrellas and outdoor tables on The Esplanade, Wynnum"
          width={640}
          height={426}
          sizes="(min-width: 640px) 448px, 90vw"
          preload
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-4 flex items-end justify-between gap-4 px-1">
        <div>
          <Image src="/images/logo-script.png" alt="Pelicans Nest Cafe" width={584} height={111} className="h-auto w-48 sm:w-56" sizes="224px" />
          <p className="mt-2 text-sm text-ink-soft">{fullAddress}</p>
        </div>
        <div className="relative shrink-0 rotate-[8deg] rounded-[3px] border-2 border-dashed border-aqua/60 bg-white p-1">
          <Image src="/images/logo-round.jpg" alt="" width={461} height={461} className="size-16 sm:size-20" sizes="80px" />
        </div>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="waves relative overflow-hidden">
      <div className="container-site grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-16 lg:pb-24">
        <div>
          <p className="flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-aqua uppercase">
            <Wave className="h-3 w-12 text-aqua" />
            The Esplanade · Wynnum
          </p>
          <h1 id="hero-title" className="mt-4 font-display text-[2.8rem] leading-[0.95] font-extrabold tracking-tight text-bay [font-stretch:88%] sm:text-6xl lg:text-[4.6rem]">
            Fish &amp; chips, seafood &amp; breakfast by the bay.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            From eggs your way to Moreton Bay bugs. Dine in, or grab a family pack to take away.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#fish" className="inline-flex h-13 items-center justify-center rounded-full bg-bay px-7 font-bold text-white hover:bg-bay-2">
              Build your fish
            </a>
            <a href={telHref} className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-coral px-7 font-bold text-white hover:bg-coral-dark">
              <PhoneGlyph />
              Call {site.phone}
            </a>
          </div>
          <ul className="mt-10 grid gap-3 text-sm sm:grid-cols-2">
            <li className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-bay/10">
              <span className="block font-bold text-bay">Breakfast</span>
              <span className="text-ink-soft">{breakfastTimes.replace("Breakfast served ", "Served ")}</span>
            </li>
            <li className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-bay/10">
              <span className="block font-bold text-bay">Find us</span>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-ink-soft underline decoration-aqua decoration-2 underline-offset-4">
                <PinGlyph className="size-3.5" />
                {fullAddress}
              </a>
            </li>
          </ul>
        </div>
        <Postcard />
      </div>
    </section>
  );
}
