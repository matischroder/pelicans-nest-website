import { houseNotes, menu, oilNote, type MenuItem } from "@/content/menu";
import { site, telHref } from "@/content/site";
import { MenuTabs } from "./MenuTabs";

function Row({ item }: { item: MenuItem }) {
  return (
    <li className="py-3.5">
      <div className="flex items-baseline gap-3">
        <h4 className="font-bold text-ink">
          {item.name}
          {item.tags?.map((t) => (
            <span key={t} className="ml-2 rounded-full bg-aqua-soft px-2 py-0.5 align-middle text-[0.68rem] font-bold text-bay">
              {t}
            </span>
          ))}
        </h4>
        <span className="leader" aria-hidden="true" />
        <span className="shrink-0 text-right font-bold text-bay tabular-nums">{item.price}</span>
      </div>
      {item.description && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.description}</p>}
    </li>
  );
}

export function FullMenu() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="waves border-y border-bay/10 py-16 sm:py-20">
      <div className="container-site">
        <h2 id="menu-title" className="font-display text-4xl font-extrabold tracking-tight text-bay [font-stretch:88%] sm:text-5xl">
          The full menu
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          Straight from our menu boards. To order takeaway, call{" "}
          <a href={telHref} className="font-bold text-bay underline decoration-coral decoration-2 underline-offset-4">
            {site.phone}
          </a>
          .
        </p>

        <MenuTabs groups={menu.map((g) => ({ id: g.id, title: g.title }))} />

        <div className="mt-6 space-y-16">
          {menu.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-40">
              <h3 className="font-display text-3xl font-extrabold text-bay">{group.title}</h3>
              {group.blurb && <p className="mt-1 text-ink-soft">{group.blurb}</p>}
              <div className="mt-6 grid gap-x-12 gap-y-10 lg:grid-cols-2">
                {group.sections.map((s) => (
                  <div key={s.id} id={s.id} className="rounded-3xl bg-white/85 p-5 ring-1 ring-bay/10 sm:p-7">
                    <h4 className="font-display text-xl font-extrabold text-bay">{s.title}</h4>
                    {s.note && <p className="mt-1 text-sm text-ink-soft italic">{s.note}</p>}
                    <ul className="mt-2 divide-y divide-bay/10">
                      {s.items.map((i) => (
                        <Row key={i.name} item={i} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl bg-bay p-6 text-white sm:p-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="font-display text-xl font-extrabold">Good to know</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/80">
              {houseNotes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span aria-hidden="true" className="text-aqua">●</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <p className="self-center rounded-2xl bg-bay-2 p-5 text-sm leading-relaxed text-white/85">{oilNote}</p>
        </div>
      </div>
    </section>
  );
}
