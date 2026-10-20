"use client";

import { useEffect, useState } from "react";

/** Sticky category tabs that highlight the group on screen. */
export function MenuTabs({ groups }: { groups: { id: string; title: string }[] }) {
  const [active, setActive] = useState(groups[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    groups.forEach((g) => {
      const el = document.getElementById(g.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [groups]);

  return (
    <nav aria-label="Menu categories" className="sticky top-[4.5rem] z-30 -mx-5 mt-8 border-y border-bay/10 bg-sand/95 px-5 backdrop-blur-sm sm:-mx-8 sm:px-8">
      <ul className="flex gap-1.5 overflow-x-auto py-2.5 [scrollbar-width:none]">
        {groups.map((g) => (
          <li key={g.id}>
            <a
              href={`#${g.id}`}
              aria-current={active === g.id ? "true" : undefined}
              className={`block rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors ${
                active === g.id ? "bg-bay text-white" : "text-ink-soft hover:bg-sand-2 hover:text-bay"
              }`}
            >
              {g.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
