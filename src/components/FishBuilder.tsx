"use client";

import { useId, useState } from "react";
import { fish, fishStyles, mealDescription, mealPrice, seasoningPrice, seasonings } from "@/content/menu";
import { site, telHref } from "@/content/site";
import { PhoneGlyph } from "./Icons";

type FishId = (typeof fish)[number]["id"];
type StyleId = (typeof fishStyles)[number]["id"];

const money = (n: number) => `$${n.toFixed(2)}`;

/**
 * Build-your-own fish, straight from their fish board: pick a fish, how it's cooked
 * (with the board's surcharges and "grilled only" / "crumbed or battered only" rules),
 * optional seasoning (grilled only) and make it a meal.
 */
export function FishBuilder() {
  const ids = { fish: useId(), style: useId(), season: useId() };
  const [fishId, setFishId] = useState<FishId>("cod");
  const [styleId, setStyleId] = useState<StyleId>("battered");
  const [seasoning, setSeasoning] = useState<string>("");
  const [meal, setMeal] = useState(false);
  const [qty, setQty] = useState(1);

  const f = fish.find((x) => x.id === fishId)!;
  const allowed = fishStyles.filter((s) => !("only" in f) || (f.only as readonly string[]).includes(s.id));
  const style = allowed.find((s) => s.id === styleId) ?? allowed[0];
  const grilled = style.id === "grilled" || style.id === "gf-grilled";
  const each = f.price + style.extra + (grilled && seasoning ? seasoningPrice : 0) + (meal ? mealPrice : 0);

  function chooseFish(id: FishId) {
    setFishId(id);
    const next = fish.find((x) => x.id === id)!;
    if ("only" in next && !(next.only as readonly string[]).includes(styleId)) setStyleId(next.only[0] as StyleId);
  }

  return (
    <section id="fish" aria-labelledby="fish-title" className="bg-bay py-16 text-white sm:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.18em] text-aqua uppercase">Fish by the piece</p>
          <h2 id="fish-title" className="mt-3 font-display text-4xl font-extrabold tracking-tight [font-stretch:88%] sm:text-5xl">
            Build your fish
          </h2>
          <p className="mt-3 text-lg text-white/75">Pick your fish and how you like it. Prices straight from our fish board.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-8">
            {/* 1. Fish */}
            <fieldset>
              <legend id={ids.fish} className="mb-3 text-sm font-bold tracking-[0.14em] text-white/70 uppercase">
                1 · Choose your fish
              </legend>
              <div className="grid grid-cols-2 gap-2 xl:grid-cols-3" role="radiogroup" aria-labelledby={ids.fish}>
                {fish.map((x) => {
                  const active = x.id === fishId;
                  return (
                    <label
                      key={x.id}
                      className={`flex cursor-pointer flex-col rounded-2xl p-3 ring-1 sm:p-4 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-coral ${
                        active ? "bg-white text-ink ring-white" : "bg-bay-2 text-white ring-white/15 hover:ring-white/40"
                      }`}
                    >
                      <input type="radio" name="fish" value={x.id} checked={active} onChange={() => chooseFish(x.id)} className="sr-only" />
                      <span className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                        <span className="font-display text-base leading-tight font-extrabold sm:text-lg">{x.name}</span>
                        <span className={`font-bold tabular-nums ${active ? "text-bay" : "text-aqua"}`}>{money(x.price)}</span>
                      </span>
                      <span className={`mt-0.5 text-xs font-semibold ${active ? "text-ink-soft" : "text-white/60"}`}>{x.origin}</span>
                      <span className={`mt-1 hidden text-sm sm:block ${active ? "text-ink-soft" : "text-white/70"}`}>{x.flavour}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* 2. Style */}
            <fieldset>
              <legend id={ids.style} className="mb-3 text-sm font-bold tracking-[0.14em] text-white/70 uppercase">
                2 · How would you like it?
              </legend>
              <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby={ids.style}>
                {fishStyles.map((s) => {
                  const ok = allowed.some((a) => a.id === s.id);
                  const active = s.id === style.id;
                  return (
                    <label
                      key={s.id}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold ring-1 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-coral ${
                        !ok ? "cursor-not-allowed opacity-35 ring-white/15" : active ? "bg-aqua text-bay ring-aqua" : "cursor-pointer ring-white/30 hover:ring-white/60"
                      }`}
                    >
                      <input type="radio" name="style" value={s.id} checked={active} disabled={!ok} onChange={() => setStyleId(s.id)} className="sr-only" />
                      {s.name}
                      <span className="font-semibold opacity-80">{s.extra ? `+${money(s.extra)}` : "incl."}</span>
                    </label>
                  );
                })}
              </div>
              {"only" in f && (
                <p className="mt-2 text-sm text-white/65">
                  {f.name} is {(f.only as readonly string[]).includes("grilled") ? "grilled only" : "crumbed or battered only"}.
                </p>
              )}
            </fieldset>

            {/* 3. Extras */}
            <fieldset>
              <legend id={ids.season} className="mb-3 text-sm font-bold tracking-[0.14em] text-white/70 uppercase">
                3 · Extras
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Seasoning (grilled only) +{money(seasoningPrice)}</span>
                  <select
                    value={grilled ? seasoning : ""}
                    disabled={!grilled}
                    onChange={(e) => setSeasoning(e.target.value)}
                    className="h-12 w-full rounded-xl border-0 bg-bay-2 px-3 text-white ring-1 ring-white/25 focus:ring-2 focus:ring-aqua disabled:opacity-40"
                  >
                    <option value="">No seasoning</option>
                    {seasonings.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-bay-2 p-3 ring-1 ring-white/25 has-[:checked]:ring-2 has-[:checked]:ring-aqua">
                  <input type="checkbox" checked={meal} onChange={(e) => setMeal(e.target.checked)} className="mt-1 size-4 accent-aqua" />
                  <span>
                    <span className="block font-bold">Make it a meal +{money(mealPrice)}</span>
                    <span className="text-sm text-white/65">{mealDescription}</span>
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* Ticket */}
          <aside aria-live="polite" className="h-fit rounded-3xl bg-sand p-6 text-ink shadow-xl lg:sticky lg:top-28">
            <p className="text-xs font-bold tracking-[0.18em] text-ink-soft uppercase">Your order</p>
            <p className="mt-2 font-display text-2xl leading-tight font-extrabold text-bay">
              {f.name}, {style.name.toLowerCase()}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li className="flex justify-between"><span>{f.name}</span><span className="tabular-nums">{money(f.price)}</span></li>
              {style.extra > 0 && <li className="flex justify-between"><span>{style.name}</span><span className="tabular-nums">+{money(style.extra)}</span></li>}
              {grilled && seasoning && <li className="flex justify-between"><span>{seasoning} seasoning</span><span className="tabular-nums">+{money(seasoningPrice)}</span></li>}
              {meal && <li className="flex justify-between"><span>Chips & salad</span><span className="tabular-nums">+{money(mealPrice)}</span></li>}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-bay/15 pt-4">
              <div className="inline-flex h-10 items-stretch rounded-full bg-white ring-1 ring-bay/20">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 text-lg font-bold" aria-label="Fewer">−</button>
                <span className="grid w-8 place-items-center font-bold tabular-nums" aria-label={`Quantity ${qty}`}>{qty}</span>
                <button type="button" onClick={() => setQty((q) => Math.min(30, q + 1))} className="w-10 text-lg font-bold" aria-label="More">+</button>
              </div>
              <p className="font-display text-3xl font-extrabold text-bay tabular-nums">{money(each * qty)}</p>
            </div>
            <a href={telHref} className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-coral font-bold text-white hover:bg-coral-dark">
              <PhoneGlyph />
              Call to order · {site.phone}
            </a>
            <p className="mt-3 text-xs leading-relaxed text-ink-soft">
              Guide price from our menu board. Public holidays attract a 15% surcharge.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
