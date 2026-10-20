import { menu } from "@/content/menu";
import { Wave } from "./Icons";

const picks = ["Pelican's Seafood Supreme", "Moreton Bay Bug", "Fisherman's Basket", "Big Breakfast", "Whole Goldband Snapper Butterflied", "Loaded Thickshakes"];
const all = menu.flatMap((g) => g.sections.flatMap((s) => s.items));
const items = picks.map((name) => all.find((i) => i.name === name)!).filter(Boolean);
const tints = ["bg-aqua-soft", "bg-sand-2", "bg-white", "bg-sand-2", "bg-white", "bg-aqua-soft"];

/** House favourites, set like a seaside menu board (no stock photos). */
export function Signatures() {
  return (
    <section aria-labelledby="sig-title" className="py-16 sm:py-20">
      <div className="container-site">
        <p className="flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-aqua uppercase">
          <Wave className="h-3 w-12" />
          From the Nest
        </p>
        <h2 id="sig-title" className="mt-3 font-display text-4xl font-extrabold tracking-tight text-bay [font-stretch:88%] sm:text-5xl">
          Local favourites
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i, n) => (
            <li key={i.name} className={`flex flex-col rounded-3xl p-6 ring-1 ring-bay/10 ${tints[n]}`}>
              <p className="font-display text-sm font-bold tracking-[0.16em] text-aqua uppercase">0{n + 1}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight font-extrabold text-bay">{i.name}</h3>
              {i.description && <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{i.description}</p>}
              <p className="mt-auto pt-5 font-display text-2xl font-extrabold text-coral tabular-nums">{i.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
