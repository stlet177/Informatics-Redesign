import Container from "./Container";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT, HOME_HREF } from "../lib/brand";
import { INFO_LOGO, PLACEHOLDER_IMG } from "../lib/assets";

export default function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t" style={{ borderColor: "#E5E7EB", background: "#F5F7FA" }}>
      <Container className="grid gap-8 md:grid-cols-4">
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
          <p className="mt-3 text-sm text-slate-600 max-w-md">
            A multinational corporation that provides Information and Communications Technology training and education established in 1993 in the Philippines. It offers corporate productivity, business solutions.and higher education from undergraduate to corporate/short courses completions. It also offers diploma courses and senior high school in compliance with K-12.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold" style={{color: BRAND_DARK}}>Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#programs" className="hover:opacity-80">Programs</a></li>
            <li><a href="#admissions" className="hover:opacity-80">Admissions</a></li>
            <li><a href="#news" className="hover:opacity-80">News & Events</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold" style={{color: BRAND_DARK}}>Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>admissions@informatics.edu.ph</li>
            <li>+63 (02) 1234 5678</li>
            <li>123 University Ave, Metro Manila</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} Informatics Philippines. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <span>Privacy</span>
          <span>•</span>
          <span>Terms</span>
        </div>
      </Container>
    </footer>
  );
}
