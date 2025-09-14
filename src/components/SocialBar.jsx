import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { BRAND_BLUE, BRAND_DARK } from "../lib/brand";

const LINKS = [
  { href: "https://www.facebook.com/informaticsph", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/informaticsph", label: "Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/company/informatics-philippines/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.youtube.com/@informaticsph", label: "YouTube", Icon: Youtube },
  { href: "https://twitter.com/informaticsph", label: "Twitter", Icon: Twitter },
];

export default function SocialBar() {
  return (
    <div
      aria-label="Social media links"
      className="fixed left-3 top-1/2 -translate-y-1/2 z-40"
      style={{ pointerEvents: "auto" }}
    >
      <ul className="flex flex-col gap-2">
        {LINKS.map(({ href, label, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur p-2 ring-1 ring-black/5 shadow hover:shadow-md transition-shadow"
              title={label}
            >
              <Icon size={18} style={{ color: BRAND_BLUE }} />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

