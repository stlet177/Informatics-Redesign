import Container from "./Container";
import { BRAND_BLUE, HOME_HREF } from "../lib/brand";
import { INFO_LOGO, PLACEHOLDER_IMG } from "../lib/assets";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] pt-12 pb-8 text-slate-300">
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
          <p className="mt-3 max-w-md text-sm text-slate-400">
            A multinational corporation that provides Information and Communications Technology training and education established in 1993 in the Philippines. It offers corporate productivity, business solutions.and higher education from undergraduate to corporate/short courses completions. It also offers diploma courses and senior high school in compliance with K-12.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {[{ href: "https://www.facebook.com/informaticsph", Icon: Facebook, label: "Facebook" },
              { href: "https://www.instagram.com/informaticsph", Icon: Instagram, label: "Instagram" },
              { href: "https://www.linkedin.com/company/informatics-philippines/", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.youtube.com/@informaticsph", Icon: Youtube, label: "YouTube" },
              { href: "https://twitter.com/informaticsph", Icon: Twitter, label: "Twitter" },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-slate-200 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                title={label}
              >
                <Icon size={16} style={{ color: BRAND_BLUE }} />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="#/about" className="transition hover:text-white">About Informatics</a></li>
            <li><a href="#/programs" className="transition hover:text-white">Programs</a></li>
            <li><a href="https://imc.informatics.edu.ph/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Microcredentials</a></li>
            <li><a href="#/admissions" className="transition hover:text-white">Admissions</a></li>
            <li><a href="#/news" className="transition hover:text-white">News & Events</a></li>
            <li><a href="#/contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>admissions@informatics.edu.ph</li>
            <li>+63 (02) 1234 5678</li>
            <li>123 University Ave, Metro Manila</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
        <div className="text-slate-400">© {new Date().getFullYear()} Informatics Philippines. All rights reserved.</div>
        <div className="flex items-center gap-3 text-slate-400">
          <a href="#/about#privacy" className="transition hover:text-white">Privacy</a>
          <span>•</span>
          <a href="#/news" className="transition hover:text-white">News</a>
          <span>•</span>
          <a href="https://ion.informatics.edu.ph/login/index.php" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">ION-LMS</a>
        </div>
      </Container>
    </footer>
  );
}
