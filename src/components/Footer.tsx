import { fullAddress, site, telHref } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-bay pb-24 text-white/75 md:pb-0">
      <div className="container-site flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Logo tone="light" />
        <div className="text-sm sm:text-right">
          <p>{fullAddress}</p>
          <a href={telHref} className="font-bold text-white">
            {site.phone}
          </a>
        </div>
      </div>
      <p className="container-site border-t border-white/10 py-5 text-xs text-white/50">
        © {site.name}. Website concept — menu and prices from the cafe&apos;s menu boards (10/1/26).
      </p>
    </footer>
  );
}
