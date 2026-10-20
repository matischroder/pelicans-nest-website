import Image from "next/image";
import Link from "next/link";

/** Their real round logo (pelican with a fish over waves). */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Pelicans Nest Cafe — home">
      <Image src="/images/logo-round.jpg" alt="" width={461} height={461} className="size-12 rounded-full ring-2 ring-white" sizes="48px" />
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold tracking-tight [font-stretch:90%] ${tone === "light" ? "text-white" : "text-bay"}`}>
          Pelicans Nest
        </span>
        <span className={`mt-1 block text-[0.68rem] font-semibold tracking-[0.2em] uppercase ${tone === "light" ? "text-white/70" : "text-ink-soft"}`}>
          Cafe · Wynnum
        </span>
      </span>
    </Link>
  );
}
