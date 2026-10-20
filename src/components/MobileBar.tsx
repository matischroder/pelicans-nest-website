import { mapsUrl, telHref } from "@/content/site";
import { PhoneGlyph } from "./Icons";

export function MobileBar() {
  const base = "inline-flex h-12 items-center justify-center gap-2 rounded-full text-[0.95rem] font-bold";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bay/10 bg-sand/97 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={telHref} className={`${base} bg-coral text-white`}>
          <PhoneGlyph />
          Call
        </a>
        <a href="#menu" className={`${base} bg-bay text-white`}>
          Menu
        </a>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`${base} text-bay ring-1 ring-bay/30 ring-inset`}>
          Directions
        </a>
      </div>
    </div>
  );
}
