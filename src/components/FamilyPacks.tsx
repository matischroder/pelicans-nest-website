import { menu } from "@/content/menu";
import { site, telHref } from "@/content/site";
import { PhoneGlyph } from "./Icons";

const section = menu.flatMap((g) => g.sections).find((s) => s.id === "family-packs")!;

/** Takeaway family packs, the classic Friday-night order. */
export function FamilyPacks() {
  return (
    <section id="packs" aria-labelledby="packs-title" className="bg-aqua-soft py-16 sm:py-20">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-bold tracking-[0.18em] text-bay uppercase">Takeaway only</p>
            <h2 id="packs-title" className="mt-3 font-display text-4xl font-extrabold tracking-tight text-bay [font-stretch:88%] sm:text-5xl">
              Family fish packs
            </h2>
            <p className="mt-3 text-lg text-ink-soft">{section.note?.replace(/^Takeaway only\.\s*/, "")}</p>
          </div>
          <a href={telHref} className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-coral px-6 font-bold text-white hover:bg-coral-dark lg:self-auto">
            <PhoneGlyph />
            Order ahead · {site.phone}
          </a>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {section.items.map((p, i) => {
            const [contents, ...addon] = (p.description ?? "").split(". Add");
            return (
              <li key={p.name} className="relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-bay/10">
                <span aria-hidden="true" className="pointer-events-none absolute -right-1 -bottom-6 font-display text-[8rem] leading-none font-extrabold text-aqua/12">
                  {[4, 6, 8][i]}
                </span>
                <h3 className="relative font-display text-2xl font-extrabold text-bay">{p.name}</h3>
                <p className="relative mt-2 text-ink-soft">{contents}.</p>
                {addon.length > 0 && <p className="mt-3 text-sm font-semibold text-bay">Add{addon.join(". Add")}</p>}
                <p className="mt-auto pt-5 font-display text-4xl font-extrabold text-coral tabular-nums">{p.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
