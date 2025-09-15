import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Code2,
  BarChart3,
  Shield,
  Globe,
  Info,
  HelpCircle,
  Award,
  Menu,
  X,
  Home,
} from "lucide-react";
import Container from "./Container";
import LaptopIcon from "./LaptopIcon";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT, HOME_HREF } from "../lib/brand";
import { INFO_LOGO, PLACEHOLDER_IMG } from "../lib/assets";
import { navConfig } from "../lib/content.config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progOpen, setProgOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutTimerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    const { body } = document;
    if (!body) return;
    const prev = body.style.overflow;
    if (mobileOpen) body.style.overflow = "hidden"; else body.style.overflow = prev || "";
    return () => { body.style.overflow = prev || ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/80 shadow" : "bg-transparent"}`}>
        <Container className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <a href={HOME_HREF} aria-label="Go to homepage">
              <img
                src={INFO_LOGO}
                alt="Informatics Philippines logo"
                className="h-10 md:h-11 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = PLACEHOLDER_IMG;
                }}
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium" role="menubar" aria-label="Primary">
            <a href="#/" className={`inline-flex items-center gap-1 relative hover:opacity-100 after:content-["""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-blue)] after:transition-all hover:after:w-full`} style={{color: BRAND_DARK}}>
              <Home size={16} style={{ color: BRAND_BLUE }} /> Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => {
                if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
                setAboutOpen(true);
              }}
              onMouseLeave={() => {
                aboutTimerRef.current = setTimeout(() => setAboutOpen(false), 160);
              }}
            >
              <motion.button
                className="inline-flex items-center gap-1 hover:opacity-80"
                style={{ color: BRAND_DARK }}
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((v) => !v)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Info size={16} style={{ color: BRAND_BLUE }} /> About Informatics <ChevronDown size={16} className={aboutOpen ? "transition-transform rotate-180" : "transition-transform"} />
              </motion.button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-80 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-3 z-50"
                    role="menu"
                  >
                    <ul className="space-y-1 text-sm" role="none">
                      {navConfig.about.map((it) => (
                        <li key={it.label} role="none">
                          <a href={it.href} className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{color: BRAND_DARK}} role="menuitem">
                            {it.label.includes('Privacy') ? <Shield size={16} style={{ color: BRAND_BLUE }} /> : it.label.includes('FAQs') ? <HelpCircle size={16} style={{ color: BRAND_BLUE }} /> : it.label.includes('Explore') ? <BookOpen size={16} style={{ color: BRAND_BLUE }} /> : <Info size={16} style={{ color: BRAND_BLUE }} />}
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                setProgOpen(true);
              }}
              onMouseLeave={() => {
                closeTimerRef.current = setTimeout(() => setProgOpen(false), 160);
              }}
            >
              <motion.button
                className="inline-flex items-center gap-1 hover:opacity-80"
                style={{ color: BRAND_DARK }}
                aria-expanded={progOpen}
                onClick={() => setProgOpen((v) => !v)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Programs <ChevronDown size={16} className={progOpen ? "transition-transform rotate-180" : "transition-transform"} />
              </motion.button>
              <AnimatePresence>
                {progOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 mt-2 w-[520px] rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-3 z-50"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Navigation</div>
                    <ul className="mt-2 grid grid-cols-2 gap-1" role="none">
                      {navConfig.programs.map((it) => (
                        <li key={it.label} role="none">
                          <a href={it.href} target={it.external ? "_blank" : undefined} rel={it.external ? "noopener noreferrer" : undefined} className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }} role="menuitem">
                            {it.label.includes("Academic") ? <BookOpen size={16} style={{ color: BRAND_BLUE }} /> : it.label.includes("Certificate") ? <BarChart3 size={16} style={{ color: BRAND_BLUE }} /> : it.label.includes("ION") ? <Globe size={16} style={{ color: BRAND_BLUE }} /> : <GraduationCap size={16} style={{ color: BRAND_BLUE }} />}
                            {it.label}
                          </a>
                        </li>
                      ))}
                      <li role="none"><a href="#/programs/information-technology" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }} role="menuitem"><LaptopIcon /> Information Technology</a></li>
                      <li role="none"><a href="#/programs/computer-science" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }} role="menuitem"><Code2 size={16} style={{ color: BRAND_BLUE }} /> Computer Science</a></li>
                      <li role="none"><a href="#/programs/information-systems" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }} role="menuitem"><DatabaseIcon /> Information Systems</a></li>
                      <li role="none"><a href="#/programs/business-administration" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }} role="menuitem"><BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Business Administration</a></li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="https://imc.informatics.edu.ph/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 relative hover:opacity-100 after:content-["""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-blue)] after:transition-all hover:after:w-full`} style={{color: BRAND_DARK}}>
              <Award size={16} style={{ color: BRAND_BLUE }} /> Microcredentials
            </a>
            <motion.a
              href="#/admissions"
              className="px-4 py-2 rounded-xl text-white shadow-sm inline-flex items-center gap-2"
              style={{ background: BRAND_BLUE }}
              whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(0,0,0,0.16)" }}
              whileTap={{ scale: 0.98 }}
            >
              <GraduationCap size={16} /> Admissions
            </motion.a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg ring-1 ring-black/5"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu size={20} />
          </button>
        </Container>

      </header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1200] md:hidden"
          >
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 h-screen w-[85vw] max-w-sm bg-white shadow-xl p-6 overflow-y-auto"
              style={{ touchAction: "pan-y" }}
            >
              <div className="flex items-center justify-between">
                <a href={HOME_HREF} aria-label="Go to homepage" onClick={() => setMobileOpen(false)}>
                  <img src={INFO_LOGO} alt="Informatics logo" className="h-8 w-auto" />
                </a>
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2">
                  <X />
                </button>
              </div>
              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Navigate</div>
                  <ul className="mt-2 space-y-2">
                    <li><motion.a href="#/" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><Home size={16} style={{ color: BRAND_BLUE }} /> Home</motion.a></li>
                    <li><motion.a href="#/about" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><Info size={16} style={{ color: BRAND_BLUE }} /> About Informatics</motion.a></li>
                    <li><motion.a href="#/programs" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Programs</motion.a></li>
                    <li><motion.a href="#/admissions" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Admissions</motion.a></li>
                    <li><motion.a href="#/contact" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><BookOpen size={16} style={{ color: BRAND_BLUE }} /> Contact Us</motion.a></li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Programs</div>
                  <ul className="mt-2 space-y-2">
                    <li><motion.a href="#/programs/information-technology" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><LaptopIcon /> Information Technology</motion.a></li>
                    <li><motion.a href="#/programs/computer-science" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><Code2 size={16} style={{ color: BRAND_BLUE }} /> Computer Science</motion.a></li>
                    <li><motion.a href="#/programs/information-systems" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><DatabaseIcon /> Information Systems</motion.a></li>
                    <li><motion.a href="#/programs/business-administration" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Business Administration</motion.a></li>
                  </ul>
                </div>
                <motion.a href="https://imc.informatics.edu.ph/" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                  <Award size={16} style={{ color: BRAND_BLUE }} /> Microcredentials (IMC)
                </motion.a>
                <motion.a href="https://ion.informatics.edu.ph/login/index.php" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                  <Globe size={16} style={{ color: BRAND_BLUE }} /> ION - LMS
                </motion.a>
                <motion.a
                  href="#/contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-white w-full"
                  style={{ background: BRAND_BLUE }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileOpen(false)}
                >
                  Apply now <ChevronRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Minimal inline database icon using Lucide primitives color
function DatabaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke={BRAND_BLUE} strokeWidth="1.5" />
      <path d="M21 5v6c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" stroke={BRAND_BLUE} strokeWidth="1.5" />
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke={BRAND_BLUE} strokeWidth="1.5" />
    </svg>
  );
}
