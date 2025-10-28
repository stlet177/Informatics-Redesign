import Container from "./Container";
import { BRAND_BLUE, HOME_HREF } from "../lib/brand";
import { INFO_LOGO, PLACEHOLDER_IMG } from "../lib/assets";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/informaticsph",
    label: "Facebook",
    description: "facebook.com/informaticsph",
    Icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/informaticsph/",
    label: "LinkedIn",
    description: "linkedin.com/company/informaticsph",
    Icon: Linkedin,
  },
  {
    href: "https://www.youtube.com/@informaticsph",
    label: "YouTube",
    description: "Informatics ABM Video Subs",
    Icon: Youtube,
  },
  {
    href: "https://www.tiktok.com/@informaticsphilippines",
    label: "TikTok",
    description: "tiktok.com/@informaticsphilippines",
    Icon: SiTiktok,
  },
];

const QUICK_LINKS = [
  { label: "About", href: "#/about" },
  { label: "Careers", href: "#/careers" },
  { label: "Informatics Microcredentials", href: "https://imc.informatics.edu.ph/", external: true },
  { label: "Registrar Services", href: "#/contact" },
  { label: "ION-LMS", href: "https://ion.informatics.edu.ph/login/index.php", external: true },
  { label: "Alumni", href: "#/contact" },
  { label: "Contact Us", href: "#/contact" },
  { label: "Privacy Policy", href: "#/privacy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-slate-800 bg-[#0F172A] pt-12 pb-8 text-slate-300">
      <Container className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <a href={HOME_HREF} aria-label="Go to homepage" className="inline-flex items-center gap-3">
            <img
              src={INFO_LOGO}
              alt="Informatics Philippines"
              className="h-10 w-auto md:h-11"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = PLACEHOLDER_IMG;
              }}
            />
          </a>
          <address className="max-w-xs text-sm not-italic leading-relaxed text-slate-400">
            <span className="font-semibold text-slate-200 block">Informatics Holdings Philippines, Inc.</span>
            Penthouse, Manta Corporate Plaza, ARCA Blvd.,<br />
            ARCA South, Taguig City, Metro Manila<br />
            <a href="mailto:ask@informatics.com.ph" className="text-slate-200 transition hover:text-white">
              ask@informatics.com.ph
            </a>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Quick Links</h3>
          <ul className="mt-4 grid gap-2 text-sm text-slate-400 sm:grid-cols-2 sm:gap-3">
            {QUICK_LINKS.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="transition hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Connect with us</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {SOCIAL_LINKS.map(({ href, label, description, Icon }) => (
              <li key={href} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Icon size={18} style={{ color: BRAND_BLUE }} />
                </span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col text-left transition hover:text-white"
                >
                  <span className="font-semibold text-slate-200">{label}</span>
                  <span className="text-xs leading-relaxed text-slate-400 break-words">{description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">© {year} Informatics Philippines. All rights reserved.</div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
          <a href="#/privacy" className="transition hover:text-white">Privacy Policy</a>
          <span aria-hidden>•</span>
          <a href="#/contact" className="transition hover:text-white">Contact Us</a>
        </div>
      </Container>
    </footer>
  );
}
