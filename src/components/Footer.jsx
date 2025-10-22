import Container from "./Container";
import { BRAND_BLUE, HOME_HREF } from "../lib/brand";
import { INFO_LOGO, PLACEHOLDER_IMG } from "../lib/assets";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-slate-800 bg-[#0F172A] pt-12 pb-8 text-slate-300">
      <Container className="grid gap-10 md:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <a href={HOME_HREF} aria-label="Go to homepage">
              <img
                src={INFO_LOGO}
                alt="Informatics Philippines"
                className="h-10 md:h-11 w-auto"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PLACEHOLDER_IMG; }}
              />
            </a>
          </div>
          <address className="mt-3 max-w-sm text-sm not-italic leading-relaxed text-slate-400">
            Informatics Holdings Philippines, Inc.<br />
            Penthouse, Manta Corporate Plaza, ARCA Blvd.,<br />
            ARCA South, Taguig City, Metro Manila<br />
            ask@informatics.com.ph
          </address>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="#/about" className="transition hover:text-white">About</a></li>
            <li><a href="#/careers" className="transition hover:text-white">Careers</a></li>
            <li><a href="https://imc.informatics.edu.ph/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Informatics Microcredentials</a></li>
            <li><a href="#/contact" className="transition hover:text-white">Registrar Services</a></li>
            <li><a href="https://ion.informatics.edu.ph/login/index.php" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">ION-LMS</a></li>
            <li><a href="#/contact" className="transition hover:text-white">Alumni</a></li>
            <li><a href="#/contact" className="transition hover:text-white">Contact Us</a></li>
            <li><a href="#/privacy" className="transition hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Connect with us</div>
          <ul className="mt-3 space-y-3 text-sm text-slate-400">
            {[{
              href: "https://www.facebook.com/informaticsph",
              label: "Facebook",
              description: "Facebook",
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
              description: "https://www.tiktok.com/@informaticsphilippines",
              Icon: SiTiktok,
            }].map(({ href, label, description, Icon }) => (
              <li key={href} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-200">
                  <Icon size={18} style={{ color: BRAND_BLUE }} />
                </span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full max-w-[220px] flex-col text-left transition hover:text-white"
                >
                  <span className="font-semibold text-slate-200">{label}</span>
                  <span className="text-xs leading-relaxed text-slate-400 break-words">{description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
        <div className="text-slate-400">© {new Date().getFullYear()} Informatics Philippines. All rights reserved.</div>
        <div className="flex items-center gap-3 text-slate-400">
          <a href="#/privacy" className="transition hover:text-white">Privacy Policy</a>
          <span>•</span>
          <a href="#/contact" className="transition hover:text-white">Contact Us</a>
        </div>
      </Container>
    </footer>
  );
}
