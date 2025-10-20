import { Facebook, Linkedin, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { BRAND_BLUE, BRAND_DARK } from "../lib/brand";

const LINKS = [
  { href: "https://www.facebook.com/informaticsph", label: "Facebook", Icon: Facebook },
  { href: "https://www.linkedin.com/company/informatics-philippines/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/@informaticsph", label: "YouTube - Informatics ABM Video Subs", Icon: Youtube },
  { href: "https://www.tiktok.com/@informaticsphilippines", label: "TikTok", Icon: SiTiktok },
];

export default function SocialBar() {
  return (
    <div
      aria-label="Social media links"
      className="fixed z-40 right-3 bottom-3 md:left-3 md:top-1/2 md:-translate-y-1/2 md:right-auto md:bottom-auto"
      style={{ pointerEvents: "none" }}
    >
      <ul className="flex flex-col gap-3">
        {LINKS.map(({ href, label, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500/80 via-sky-500/80 to-cyan-500/80 px-3 py-2 text-white shadow-lg transition hover:from-blue-400 hover:via-sky-400 hover:to-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              style={{ pointerEvents: "auto" }}
              title={label}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Icon size={22} />
              </span>
              <span className="sr-only">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
