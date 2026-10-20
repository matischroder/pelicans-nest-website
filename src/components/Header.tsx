"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { site, telHref } from "@/content/site";
import { PhoneGlyph } from "./Icons";
import { Logo } from "./Logo";

export const nav = [
  { label: "Fish Builder", href: "/#fish" },
  { label: "Menu", href: "/#menu" },
  { label: "Family Packs", href: "/#packs" },
  { label: "Find Us", href: "/#visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-bay/10 bg-sand/95 backdrop-blur-sm">
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.95rem] font-semibold">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-ink-soft hover:text-bay">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a href={telHref} className="hidden h-11 items-center gap-2 rounded-full bg-coral px-5 text-sm font-bold text-white hover:bg-coral-dark sm:inline-flex">
              <PhoneGlyph />
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-bay px-4 text-sm font-bold text-white lg:hidden"
            >
              <span aria-hidden="true" className="flex w-4 flex-col gap-[3px]">
                <span className="h-0.5 bg-current" />
                <span className="h-0.5 bg-current" />
                <span className="h-0.5 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </div>
      </header>
      {open && <SiteMenu onClose={close} />}
    </>
  );
}

/** Full-screen menu, outside <header> so the sticky header can't clip it. */
function SiteMenu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.querySelector<HTMLElement>("button, a")?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const els = ref.current.querySelectorAll<HTMLElement>("a[href], button");
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mq = window.matchMedia("(min-width: 64rem)");
    const onWide = () => mq.matches && onClose();
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
      prev?.focus();
    };
  }, [onClose]);

  return (
    <div id="site-menu" ref={ref} role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-bay text-white lg:hidden">
      <div className="container-site flex h-[4.5rem] shrink-0 items-center justify-between">
        <Logo tone="light" />
        <button type="button" onClick={onClose} className="h-11 rounded-full px-5 text-sm font-bold ring-1 ring-white/40 ring-inset">
          Close
        </button>
      </div>
      <nav aria-label="Mobile" className="container-site flex flex-1 flex-col pb-10">
        <ul className="mt-4 border-t border-white/15">
          {nav.map((n) => (
            <li key={n.href} className="border-b border-white/15">
              <Link href={n.href} onClick={onClose} className="block py-4 font-display text-4xl font-extrabold tracking-tight hover:text-aqua">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={telHref} className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-coral text-base font-bold">
          <PhoneGlyph />
          Call {site.phone}
        </a>
      </nav>
    </div>
  );
}
