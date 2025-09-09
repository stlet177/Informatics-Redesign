// Informatics Philippines - Modern Corporate Website
// Tech: React + TailwindCSS + Framer Motion (animations)
// Place assets under /public/assets as specified below.

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// no portal needed for mobile drawer; render inline for reliability
import {
  ChevronRight,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Users,
  Mail,
  Megaphone,
  Code2,
  BarChart3,
  Shield,
  Layers,
  ClipboardCheck,
  Globe,
  Info,
  HelpCircle,
  Award,
  Briefcase,
  Menu,
  X,
  Phone,
  Database,
  LayoutDashboard,
  Compass,
  Check,
} from "lucide-react";

// THEME (updated to match logo blue)
// If you have an exact hex from brand guidelines, replace here.
const BRAND_BLUE = "#008EE6"; // Logo blue hue
const BRAND_DARK = "#4A4F55"; // Logo wordmark gray
const BRAND_LIGHT = "#F2F8FF"; // Subtle blue-tinted background

// ASSETS helper to respect Vite base on GitHub Pages
const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;
// ASSETS (filenames to be placed under /public/assets)
const INFO_LOGO = asset("assets/informatics-logo.png"); // header + footer
const CAMPUS_IMG = asset("assets/campus2.jpg"); // hero image

// Fallback placeholder for missing images (inline SVG data URI)
const PLACEHOLDER_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='320' height='120'>
      <rect width='100%' height='100%' fill='${BRAND_BLUE}'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
            font-family='Arial, Helvetica, sans-serif' font-size='18' fill='white'>
        Image not available
      </text>
    </svg>
  `);
const PARTNERS = [
  { src: asset("assets/partner-cybersecurity.png"), alt: "Cybersecurity Partner" },
  { src: asset("assets/partner-philsmile.png"), alt: "PhilSmile" },
  { src: asset("assets/partner-ms-imagine.png"), alt: "Microsoft Imagine Academy" },
  { src: asset("assets/partner-percipio.png"), alt: "Percipio" },
  { src: asset("assets/partner-google-edu.png"), alt: "Google for Education" },
  { src: asset("assets/partner-comptia.jpg"), alt: "CompTIA" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>;
}

function Nav() {
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
          <img
            src={INFO_LOGO}
            alt="Informatics Philippines logo"
            className="h-10 md:h-11 w-auto"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PLACEHOLDER_IMG;
            }}
          />
          {/* brand text removed per request */}
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimerRef && closeTimerRef.current) clearTimeout(closeTimerRef.current);
              setProgOpen(true);
            }}
            onMouseLeave={() => {
              if (!closeTimerRef) return;
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
              Programs <ChevronDown size={16} className={progOpen ? "transition-transform rotate-180" : "transition-transform"} />
            </motion.button>
            <AnimatePresence>
              {progOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-[360px] rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-4 z-50"
                  role="menu"
                  aria-label="Programs menu"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Bachelor's Degree Programs</div>
                  <ul className="mt-2 space-y-1">
                    <li>
                      <a href="#programs-it" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}>
                        <LaptopIcon /> Information Technology
                      </a>
                    </li>
                    <li>
                      <a href="#programs-cs" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}>
                        <Code2 size={16} style={{ color: BRAND_BLUE }} /> Computer Science
                      </a>
                    </li>
                    <li>
                      <a href="#programs-is" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}>
                        <Database size={16} style={{ color: BRAND_BLUE }} /> Information Systems
                      </a>
                    </li>
                    <li>
                      <a href="#programs-ba" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}>
                        <BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Business Administration
                      </a>
                    </li>
                    <li>
                      <a href="#programs-oa" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}>
                        <Users size={16} style={{ color: BRAND_BLUE }} /> Office Administration
                      </a>
                    </li>
                  </ul>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Senior High School Tracks</div>
                  <ul className="mt-2 space-y-1">
                    <li><a href="#shs-ict" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><LaptopIcon /> ICT</a></li>
                    <li><a href="#shs-abm" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><BarChart3 size={16} style={{ color: BRAND_BLUE }} /> ABM</a></li>
                    <li><a href="#shs-humss" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><BookOpen size={16} style={{ color: BRAND_BLUE }} /> HUMSS</a></li>
                    <li><a href="#shs-gas" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><Compass size={16} style={{ color: BRAND_BLUE }} /> GAS</a></li>
                  </ul>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Corporate / Short Courses</div>
                  <ul className="mt-2 space-y-1">
                    <li><a href="#corp-dm" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><Megaphone size={16} style={{ color: BRAND_BLUE }} /> Digital Marketing</a></li>
                    <li><a href="#corp-webdev" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><Code2 size={16} style={{ color: BRAND_BLUE }} /> Web Development</a></li>
                    <li><a href="#corp-data" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Data Analytics</a></li>
                    <li><a href="#corp-cyber" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><Shield size={16} style={{ color: BRAND_BLUE }} /> Cybersecurity Essentials</a></li>
                  </ul>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Technology</div>
                  <ul className="mt-2 space-y-1">
                    <li><a href="#tech-edtech" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Educational Technology</a></li>
                    <li><a href="#tech-lms" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><LayoutDashboard size={16} style={{ color: BRAND_BLUE }} /> Learning Management Systems</a></li>
                    <li><a href="#tech-assessment" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><ClipboardCheck size={16} style={{ color: BRAND_BLUE }} /> Assessment Technologies</a></li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#admissions" className={`inline-flex items-center gap-1 relative hover:opacity-100 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-blue)] after:transition-all hover:after:w-full`} style={{color: BRAND_DARK}}>
            <GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Admissions
          </a>
          <a href="https://ion.informatics.edu.ph/login/index.php" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 relative hover:opacity-100 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-blue)] after:transition-all hover:after:w-full`} style={{color: BRAND_DARK}}>
            <Globe size={16} style={{ color: BRAND_BLUE }} /> ION - LMS
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
              <Info size={16} style={{ color: BRAND_BLUE }} /> About <ChevronDown size={16} className={aboutOpen ? "transition-transform rotate-180" : "transition-transform"} />
            </motion.button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-3 z-50"
                >
                  <ul className="space-y-1 text-sm">
                    <li><a href="#blogs" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{color: BRAND_DARK}}><BookOpen size={16} style={{ color: BRAND_BLUE }} /> Blogs</a></li>
                    <li><a href="#contact" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{color: BRAND_DARK}}><Mail size={16} style={{ color: BRAND_BLUE }} /> Contact Us</a></li>
                    <li><a href="#careers" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{color: BRAND_DARK}}><Briefcase size={16} style={{ color: BRAND_BLUE }} /> Careers</a></li>
                    <li><a href="#dti-pet-project" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{color: BRAND_DARK}}><Layers size={16} style={{ color: BRAND_BLUE }} /> DTI PET Project</a></li>
                    <li><a href="#faqs" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{color: BRAND_DARK}}><HelpCircle size={16} style={{ color: BRAND_BLUE }} /> FAQS</a></li>
                    <li><a href="#privacy" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{color: BRAND_DARK}}><Shield size={16} style={{ color: BRAND_BLUE }} /> Privacy Policy</a></li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#microcredentials" className={`inline-flex items-center gap-1 relative hover:opacity-100 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-blue)] after:transition-all hover:after:w-full`} style={{color: BRAND_DARK}}>
            <Award size={16} style={{ color: BRAND_BLUE }} /> Microcredentials
          </a>
          <a href="#corporate" className={`inline-flex items-center gap-1 relative hover:opacity-100 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-blue)] after:transition-all hover:after:w-full`} style={{color: BRAND_DARK}}>
            <Briefcase size={16} style={{ color: BRAND_BLUE }} /> Corporate Learning
          </a>
          <motion.a
            href="#contact"
            className="px-4 py-2 rounded-xl text-white shadow-sm"
            style={{ background: BRAND_BLUE }}
            whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(0,0,0,0.16)" }}
            whileTap={{ scale: 0.98 }}
          >
            Apply now
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
            className="fixed inset-0 z-[100] md:hidden"
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
                <img src={INFO_LOGO} alt="Informatics logo" className="h-8 w-auto" />
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2">
                  <X />
                </button>
              </div>
              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Programs</div>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <motion.a href="#programs-it" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <LaptopIcon /> Information Technology
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#programs-cs" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <Code2 size={16} style={{ color: BRAND_BLUE }} /> Computer Science
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#programs-is" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <Database size={16} style={{ color: BRAND_BLUE }} /> Information Systems
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#programs-ba" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Business Administration
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#programs-oa" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <Users size={16} style={{ color: BRAND_BLUE }} /> Office Administration
                      </motion.a>
                    </li>
                  </ul>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Senior High School Tracks</div>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <motion.a href="#shs-ict" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <LaptopIcon /> ICT
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#shs-abm" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <BarChart3 size={16} style={{ color: BRAND_BLUE }} /> ABM
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#shs-humss" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <BookOpen size={16} style={{ color: BRAND_BLUE }} /> HUMSS
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#shs-gas" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <Compass size={16} style={{ color: BRAND_BLUE }} /> GAS
                      </motion.a>
                    </li>
                  </ul>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Corporate / Short Courses</div>
                  <ul className="mt-2 space-y-2">
                    <li><motion.a href="#corp-dm" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><Megaphone size={16} style={{ color: BRAND_BLUE }} /> Digital Marketing</motion.a></li>
                    <li><motion.a href="#corp-webdev" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><Code2 size={16} style={{ color: BRAND_BLUE }} /> Web Development</motion.a></li>
                    <li><motion.a href="#corp-data" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Data Analytics</motion.a></li>
                    <li><motion.a href="#corp-cyber" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><Shield size={16} style={{ color: BRAND_BLUE }} /> Cybersecurity Essentials</motion.a></li>
                  </ul>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Technology</div>
                  <ul className="mt-2 space-y-2">
                    <li><motion.a href="#tech-edtech" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Educational Technology</motion.a></li>
                    <li><motion.a href="#tech-lms" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><LayoutDashboard size={16} style={{ color: BRAND_BLUE }} /> Learning Management Systems</motion.a></li>
                    <li><motion.a href="#tech-assessment" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50"><ClipboardCheck size={16} style={{ color: BRAND_BLUE }} /> Assessment Technologies</motion.a></li>
                  </ul>
                </div>
                <motion.a href="#admissions" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                  <GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Admissions
                </motion.a>
                <motion.a href="https://ion.informatics.edu.ph/login/index.php" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                  <Globe size={16} style={{ color: BRAND_BLUE }} /> ION - LMS
                </motion.a>
                <motion.a href="#about" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                  <Info size={16} style={{ color: BRAND_BLUE }} /> About
                </motion.a>
                <motion.a href="#microcredentials" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                  <Award size={16} style={{ color: BRAND_BLUE }} /> Microcredentials
                </motion.a>
                <motion.a href="#corporate" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                  <Briefcase size={16} style={{ color: BRAND_BLUE }} /> Corporate Learning
                </motion.a>
                <motion.a
                  href="#contact"
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

// Simple laptop glyph using Lucide primitives to avoid importing too many icons
function LaptopIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke={BRAND_BLUE} strokeWidth="1.5"/>
      <path d="M2 18h20" stroke={BRAND_BLUE} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Reusable animated select matching the site's blue theme
function SelectField({ label, options }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options?.[0] || "");
  const ref = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div ref={ref}>
      <label className="block text-sm font-medium" style={{ color: BRAND_DARK }}>{label}</label>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="mt-1 w-full inline-flex items-center justify-between rounded-xl border px-4 py-2 bg-transparent text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] hover:border-[var(--brand-blue)] transition-all duration-200"
        style={{ borderColor: "#E2E8F0" }}
      >
        <span>{value}</span>
        <ChevronDown size={16} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="listbox"
            className="z-10 mt-2 max-h-56 w-full overflow-auto rounded-xl border bg-white p-1 text-sm shadow-lg ring-1 ring-black/5"
            style={{ borderColor: "#E2E8F0" }}
          >
            {options.map((opt, idx) => (
              <li key={idx} role="option" aria-selected={value === opt}>
                <button
                  type="button"
                  onClick={() => {
                    setValue(opt);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[${BRAND_LIGHT}]`}
                  style={{ color: BRAND_DARK }}
                >
                  <span>{opt}</span>
                  {value === opt && <Check size={16} style={{ color: BRAND_BLUE }} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full opacity-10" style={{background: BRAND_BLUE}} />
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ background: BRAND_LIGHT, color: BRAND_BLUE }}>
            <span className="inline-block h-2 w-2 rounded-full" style={{background: BRAND_BLUE}} />
            Enrollment for SY 2025-2026 is open
          </div>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight" style={{color: BRAND_DARK}}>
            Master the <span style={{color: BRAND_BLUE}}>Digital Age</span> with Technology Excellence
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Join Informatics Philippines and transform your passion for technology into a thriving career. Our cutting-edge programs in computer science, information technology, and business administration prepare you to lead in the digital future.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              href="#admissions"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white shadow-sm"
              style={{ background: BRAND_BLUE }}
              whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(0,0,0,0.16)" }}
              whileTap={{ scale: 0.98 }}
            >
              Start your application <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border"
              style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
              whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.98 }}
            >
              Explore programs
            </motion.a>
          </div>
        </motion.div>
        <motion.div {...fadeInUp} className="relative">
          <img
            src={CAMPUS_IMG}
            alt="Informatics campus"
            className="w-full aspect-[4/3] rounded-3xl object-cover shadow-xl ring-1 ring-black/5"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PLACEHOLDER_IMG;
            }}
          />
        </motion.div>
      </Container>
    </section>
  );
}

function ProgramCard({ icon: Icon, title, desc, img, video, lottie, featured = false, delay = 0, tag }) {
  return (
    <motion.div
      className="rounded-2xl p-6 ring-1 ring-black/10 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
      initial={{ opacity: 0, y: 16, scale: featured ? 0.94 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ y: featured ? -6 : -3, scale: featured ? 1.03 : 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {lottie ? (
        <div className="-mt-2 -mx-2 mb-4 overflow-hidden rounded-xl ring-1 ring-black/5 h-40 sm:h-36">
          <DotLottieReact
            src={lottie}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : video ? (
        <div className="-mt-2 -mx-2 mb-4 overflow-hidden rounded-xl ring-1 ring-black/5 h-40 sm:h-36">
          <video
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
            poster={img || undefined}
          />
        </div>
      ) : (
        img && (
          <div className="-mt-2 -mx-2 mb-4 overflow-hidden rounded-xl ring-1 ring-black/5 h-40 sm:h-36">
            <img
              src={img}
              alt="Program visual"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = PLACEHOLDER_IMG;
              }}
            />
          </div>
        )
      )}
      <div className="flex items-start gap-3 min-h-[56px]">
        <div className="rounded-xl p-2 shrink-0" style={{ background: BRAND_LIGHT }}>
          <Icon size={20} style={{ color: BRAND_BLUE }} />
        </div>
        <div className="flex-1">
          <h3
            className="text-lg font-semibold leading-snug"
            style={{ color: BRAND_DARK, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="mt-2 min-h-[22px]">
        {tag ? (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium" style={{ color: BRAND_BLUE, border: '1px solid rgba(0,0,0,0.06)' }}>
            {tag}
          </span>
        ) : null}
      </div>
      <p
        className="mt-3 text-sm text-slate-600 flex-1"
        style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: '4.5rem' }}
      >
        {desc}
      </p>
      <div className="mt-auto pt-2">
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-sm"
          style={{ color: BRAND_BLUE }}
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
        >
          View curriculum <ChevronRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
}

function Programs() {
  const items = [
    {
      icon: BookOpen,
      title: "BS Information Technology",
      desc: "Core CS/IT fundamentals, software engineering, cloud, and security tracks with modern toolchains.",
    },
    {
      icon: GraduationCap,
      title: "BS Business Administration (Business Analytics)",
      desc: "Management + data literacy: spreadsheets to dashboards to real-world decision systems.",
    },
    {
      icon: Users,
      title: "Diploma & Short Courses",
      desc: "Industry-focused upskilling in UX, cybersecurity, cloud, and dataâ€”stack credentials as you go.",
    },
  ];

  // Symmetrical sets to render
  const degreeItems = [
    {
      icon: BookOpen,
      title: "BS Information Technology",
      desc: "Core CS/IT fundamentals, software engineering, cloud, and security tracks with modern toolchains.",
    },
    {
      icon: Code2,
      title: "BS Computer Science",
      desc: "Computational theory, algorithms, AI/ML foundations, and high‑performance software design.",
    },
    {
      icon: Database,
      title: "BS Information Systems",
      desc: "Business process analysis, data systems, and tech-enabled decision support in organizations.",
    },
    {
      icon: BarChart3,
      title: "BS Business Administration (Business Analytics)",
      desc: "Management + data literacy: spreadsheets to dashboards to real-world decision systems.",
    },
  ];

  const shsItems = [
    {
      icon: LaptopIcon,
      title: "ICT (Information and Communications Technology)",
      desc: "Focuses on computers, programming, and digital skills, preparing students for careers in IT and technology.",
      lottie: asset("assets/ICT.lottie"),
    },
    {
      icon: BarChart3,
      title: "ABM (Accountancy, Business, and Management)",
      desc: "Centers on business, finance, and management, training students for entrepreneurship and corporate professions.",
      lottie: asset("assets/ABM.lottie"),
    },
    {
      icon: BookOpen,
      title: "HUMSS (Humanities and Social Sciences)",
      desc: "Emphasizes communication, society, and culture, guiding students toward careers in education, law, journalism, and the social sciences.",
      lottie: asset("assets/education.lottie"),
    },
    {
      icon: Compass,
      title: "GAS (General Academic Strand)",
      desc: "Offers a flexible mix of subjects, giving undecided students broader options for college and future careers.",
      lottie: asset("assets/GAS2.lottie"),
      video: asset("assets/Exams.webm"),
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* subtle geometric background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            `radial-gradient(circle at 20% 20%, ${BRAND_BLUE}20 0, transparent 40%),` +
            `radial-gradient(circle at 80% 30%, ${BRAND_BLUE}14 0, transparent 45%),` +
            `radial-gradient(circle at 30% 80%, ${BRAND_BLUE}12 0, transparent 35%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <Container className="relative z-10">
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>
          Programs that align with industry
        </motion.h2>
        {/* Bachelor's Degree Programs */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-full inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: BRAND_LIGHT, color: BRAND_BLUE }}>
            Bachelor's Degree Programs
          </div>
          {degreeItems.map((it, i) => {
            const imgMap = {
              "BS Information Technology": asset("assets/informationtechnology.jpg"),
              "BS Computer Science": asset("assets/computerscience.jpg"),
              "BS Information Systems": asset("assets/Informationsystem.jpg"),
              "BS Business Administration (Business Analytics)": asset("assets/BSBA.jpg"),
            };
            return (
              <ProgramCard
                key={i}
                icon={it.icon}
                title={it.title}
                desc={it.desc}
                img={imgMap[it.title]}
                delay={i * 0.06}
              />
            );
          })}
        </div>

        {/* Senior High School Tracks */}
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-full inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: BRAND_LIGHT, color: BRAND_BLUE }}>
            Senior High School Tracks
          </div>
          {shsItems.map((it, i) => (
            <ProgramCard
              key={i}
              icon={it.icon}
              title={it.title}
              desc={it.desc}
              tag={it.tag}
              lottie={it.lottie}
              video={it.video}
              delay={i * 0.06}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function AdmissionsCTA() {
  return (
    <section id="admissions" className="py-16 md:py-24" style={{ background: BRAND_LIGHT }}>
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>Admissions & Scholarships</h2>
          <p className="mt-4 text-slate-600">
            We welcome curious, motivated learners. Submit your online application, upload requirements,
            and explore scholarship opportunities for academic excellence and financial need.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
            <li>100% online application & document uploads</li>
            <li>Entrance assessment with outcomes-based advising</li>
            <li>Scholarships and partner-funded grants</li>
          </ul>
          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white" style={{ background: BRAND_BLUE }}>
              Begin application <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div {...fadeInUp}>
          <div className="rounded-3xl p-6 shadow-lg ring-1 ring-black/5 bg-white">
            <div className="text-sm font-medium" style={{color: BRAND_DARK}}>Key Dates (SY 2025–2026)</div>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl p-4" style={{ background: "#EEF4FF" }}>
                <div className="font-semibold" style={{ color: BRAND_BLUE }}>Applications</div>
                <div className="text-slate-600">Open – Rolling</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "#EEF4FF" }}>
                <div className="font-semibold" style={{ color: BRAND_BLUE }}>Classes Start</div>
                <div className="text-slate-600">August 2025</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24">
      <Container>
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>Industry Partners</motion.h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          We co-design learning experiences with global technology partners so students graduate with job-ready skills
          and recognized credentials.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {PARTNERS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center rounded-xl bg-white p-5 ring-1 ring-black/5"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-12 md:max-h-14 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = PLACEHOLDER_IMG;
                }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function News() {
  const items = [
    {
      title: "Informatics launches cloud innovation lab",
      date: "Aug 20, 2025",
      blurb: "Students gain hands-on exposure to multi-cloud architectures and DevOps pipelines.",
    },
    {
      title: "Business Analytics capstone showcase",
      date: "Aug 8, 2025",
      blurb: "Teams present data-driven solutions to real SME problems, mentored by industry partners.",
    },
    {
      title: "CompTIA-aligned cybersecurity bootcamp",
      date: "Jul 30, 2025",
      blurb: "Short-course pathway prepares learners for Security+ and SOC analyst roles.",
    },
  ];

  return (
    <section id="news" className="py-16 md:py-24" style={{ background: BRAND_LIGHT }}>
      <Container>
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>News & Events</motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((n, i) => (
            <motion.article
              key={i}
              className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs uppercase tracking-wide text-slate-500">{n.date}</div>
              <h3 className="mt-2 text-lg font-semibold" style={{color: BRAND_DARK}}>{n.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{n.blurb}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm" style={{ color: BRAND_BLUE }}>
                Read more <ChevronRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  const BRANCH_CONTACTS = {
    manila: {
      label: "Manila",
      registrar: "registrar_manila@informatics.edu.ph",
      cashier: "cashier_manila@informatics.edu.ph",
      phone: "09453210716",
      address: "2070 BDO Bldg. Recto Ave Quiapo, Manila",
      coords: null,
    },
    eastwood: {
      label: "Eastwood",
      registrar: "registrar_eastwood@informatics.edu.ph",
      cashier: "cashier_eastwood@informatics.edu.ph",
      phone: null,
      address: null,
      coords: null,
    },
    ng: {
      label: "Northgate",
      registrar: "registrar_ng@informatics.edu.ph",
      cashier: "cashier_ng@informatics.edu.ph",
      phone: "09606114435",
      address: "Indo China Drive, Northgate Cyberzone Filinvest Corporate City, Alabang Muntinlupa City, Metro Manila",
      coords: null,
    },
    cavite: {
      label: "Cavite",
      registrar: "registrar_cavite@informatics.edu.ph",
      cashier: "cashier_cavite@informatics.edu.ph",
      phone: "(Landline) 046-4712310",
      address: null,
      coords: null,
    },
    baguio: {
      label: "Baguio",
      registrar: "registrar_baguio@informatics.edu.ph",
      cashier: "cashierbaguio@informatics.edu.ph",
      phone: "09175753237",
      address: null,
      coords: null,
    },
    cebu: {
      label: "Cebu",
      registrar: "N/A",
      cashier: "N/A",
      phone: "09178364963",
      address: null,
      coords: null,
    },
    cdo: {
      label: "CDO",
      registrar: "registrar.cdo@informatics.edu.ph",
      cashier: "cashier.cdo@informatics.edu.ph",
      phone: "N/A",
      address: null,
      coords: null,
    },
    conso: {
      label: "Consolidated",
      registrar: "registrar_conso@informatics.edu.ph",
      cashier: "cashier_conso@informatics.edu.ph",
      phone: null,
      address: null,
      coords: null,
    },
  };

  const branchOptions = Object.entries(BRANCH_CONTACTS).map(([key, v]) => ({ key, label: v.label }));
  const [branch, setBranch] = useState("");
  const [copiedKey, setCopiedKey] = useState("");

  const copyToClipboard = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1400);
    } catch (e) {
      // fallback: no permission; do nothing
    }
  };

  const isAvailable = (v) => v && v !== "N/A";

  const mapUrlFor = (key) => {
    const entry = key ? BRANCH_CONTACTS[key] : null;
    if (entry?.coords && typeof entry.coords.lat === 'number' && typeof entry.coords.lng === 'number') {
      const { lat, lng } = entry.coords;
      return `https://www.google.com/maps?q=loc:${lat},${lng}&z=17&output=embed`;
    }
    if (entry?.address) {
      const a = encodeURIComponent(entry.address);
      return `https://www.google.com/maps?q=${a}&z=17&output=embed`;
    }
    const label = entry?.label || "Philippines";
    const q = encodeURIComponent(`Informatics ${label} campus`);
    return `https://www.google.com/maps?q=${q}&output=embed`;
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <Container className="grid gap-10 md:grid-cols-2">
        {/* Mobile heading + blurb at the top */}
        <div className="md:hidden order-1">
          <h2 className="text-2xl font-semibold" style={{color: BRAND_DARK}}>Get in touch</h2>
          <p className="mt-3 text-slate-600">
            Questions about admissions, tuition, or programs? Our team will reach out within 1-2 business days.
          </p>
        </div>

        <motion.div {...fadeInUp} className="order-3 md:order-1">
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>Get in touch</h2>
          <p className="hidden md:block mt-3 text-slate-600">
            Questions about admissions, tuition, or programs? Our team will reach out within 1-2 business days.
          </p>
          {/* removed direct admissions email per request */}
          <div className="mt-8">
            <div className="text-sm font-semibold flex items-center gap-2" style={{color: BRAND_DARK}}>
              <Mail size={16} style={{ color: BRAND_BLUE }} /> Emails For Your Concern
            </div>
            <div className="mt-2 text-sm text-slate-600">Pick your branch to see Registrar and Cashier emails. Tap to copy.</div>

            <div className="mt-4 grid gap-3 sm:flex sm:items-center">
              <label className="text-sm font-medium" style={{color: BRAND_DARK}} htmlFor="branch">Branch</label>
              <select
                id="branch"
                className="rounded-xl border px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)]"
                style={{ borderColor: "#E2E8F0", minWidth: "12rem" }}
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value="">Select a branch…</option>
                {branchOptions.map((o) => (
                  <option key={o.key} value={o.key}>{o.label}</option>
                ))}
              </select>
            </div>

            {branch && (
              <div className="mt-4 grid gap-3 text-sm">
                <div className="rounded-xl bg-white p-4 ring-1 ring-black/5 shadow-sm">
                  <div className="font-medium" style={{color: BRAND_DARK}}>Registrar</div>
                  <button
                    type="button"
                    onClick={() => isAvailable(BRANCH_CONTACTS[branch].registrar) && copyToClipboard(BRANCH_CONTACTS[branch].registrar, "reg")}
                    disabled={!isAvailable(BRANCH_CONTACTS[branch].registrar)}
                    className="mt-1 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ borderColor: "#E2E8F0", color: BRAND_DARK }}
                  >
                    {copiedKey === "reg" ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Mail size={16} style={{ color: BRAND_BLUE }} />}
                    <span className="select-text">{BRANCH_CONTACTS[branch].registrar}</span>
                    <span className="text-slate-500">{isAvailable(BRANCH_CONTACTS[branch].registrar) ? (copiedKey === "reg" ? "Copied" : "Copy") : "N/A"}</span>
                  </button>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-black/5 shadow-sm">
                  <div className="font-medium" style={{color: BRAND_DARK}}>Cashier</div>
                  <button
                    type="button"
                    onClick={() => isAvailable(BRANCH_CONTACTS[branch].cashier) && copyToClipboard(BRANCH_CONTACTS[branch].cashier, "cash")}
                    disabled={!isAvailable(BRANCH_CONTACTS[branch].cashier)}
                    className="mt-1 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ borderColor: "#E2E8F0", color: BRAND_DARK }}
                  >
                    {copiedKey === "cash" ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Mail size={16} style={{ color: BRAND_BLUE }} />}
                    <span className="select-text">{BRANCH_CONTACTS[branch].cashier}</span>
                    <span className="text-slate-500">{isAvailable(BRANCH_CONTACTS[branch].cashier) ? (copiedKey === "cash" ? "Copied" : "Copy") : "N/A"}</span>
                  </button>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-black/5 shadow-sm">
                  <div className="font-medium" style={{color: BRAND_DARK}}>Phone</div>
                  <button
                    type="button"
                    onClick={() => isAvailable(BRANCH_CONTACTS[branch].phone) && copyToClipboard(BRANCH_CONTACTS[branch].phone, "phone")}
                    disabled={!isAvailable(BRANCH_CONTACTS[branch].phone)}
                    className="mt-1 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ borderColor: "#E2E8F0", color: BRAND_DARK }}
                  >
                    {copiedKey === "phone" ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Phone size={16} style={{ color: BRAND_BLUE }} />}
                    <span className="select-text">{BRANCH_CONTACTS[branch].phone || "N/A"}</span>
                    <span className="text-slate-500">{isAvailable(BRANCH_CONTACTS[branch].phone) ? (copiedKey === "phone" ? "Copied" : "Copy") : "N/A"}</span>
                  </button>
                </div>
                <div className="text-[12px] text-slate-500">records@informatics.edu.ph (for closed center)</div>
              </div>
            )}

            {/* Always-visible map; updates/pans when branch changes */}
            <div className="mt-6">
              <div className="font-medium mb-2" style={{color: BRAND_DARK}}>Map</div>
              <div className="overflow-hidden rounded-xl ring-1 ring-black/5 h-72 md:h-80">
                <iframe
                  key={branch || 'default'}
                  title={`Map - ${branch ? BRANCH_CONTACTS[branch].label : 'Informatics Philippines'}`}
                  src={mapUrlFor(branch)}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* Keep technical support visible */}
            <div className="mt-6">
              <div className="font-medium text-sm" style={{color: BRAND_DARK}}>Technical Support</div>
              <button
                type="button"
                onClick={() => copyToClipboard("tech.support@informatics.edu.ph", "tech")}
                className="mt-1 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99] text-sm"
                style={{ borderColor: "#E2E8F0", color: BRAND_DARK }}
              >
                {copiedKey === "tech" ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Mail size={16} style={{ color: BRAND_BLUE }} />}
                <span className="select-text">tech.support@informatics.edu.ph</span>
                <span className="text-slate-500">{copiedKey === "tech" ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        </motion.div>
        <motion.form {...fadeInUp} className="order-2 md:order-2 rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>First & Last Name</label>
              <input className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="Juan Dela Cruz" />
            </div>
            <div>
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>Contact Number</label>
              <input type="tel" className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="09xx xxx xxxx" />
            </div>
            <SelectField
              label="Type"
              options={[
                "New student",
                "Enrolled student",
                "Alumni",
                "Job Applicant",
                "Other",
              ]}
            />
            <SelectField
              label="Concern"
              options={[
                "Programs/Courses",
                "Tuition Fee",
                "Enrollment",
                "Credentials",
                "Careers",
                "Proposals",
                "Other",
              ]}
            />
            <div className="md:col-span-2">
              <SelectField
                label="Preferred Branch"
                options={[
                  "Informatics Manila",
                  "Northgate Alabang",
                  "North Luzon",
                  "South Luzon",
                  "Visayas",
                  "Mindanao",
                  "Others/Any",
                ]}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="Tell us how we can help" />
            </div>
          </div>
          <motion.button
            type="button"
            className="mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white shadow-sm"
            style={{ background: BRAND_BLUE }}
            whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(0,0,0,0.16)" }}
            whileTap={{ scale: 0.98 }}
          >
            Send inquiry <ChevronRight size={18} />
          </motion.button>
        </motion.form>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-12 pb-8 border-t" style={{ borderColor: "#E5E7EB", background: "#F5F7FA" }}>
      <Container className="grid gap-8 md:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={INFO_LOGO}
              alt="Informatics Philippines"
              className="h-10 md:h-11 w-auto"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = PLACEHOLDER_IMG;
              }}
            />
            {/* brand text removed per request */}
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

export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `:root{--brand-blue:${BRAND_BLUE};}`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global subtle geometry background (inside stacking context so it shows above white bg) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage:
            `radial-gradient(circle at 10% 15%, ${BRAND_BLUE}10 0, transparent 28%),` +
            `radial-gradient(circle at 92% 12%, ${BRAND_BLUE}12 0, transparent 34%),` +
            `radial-gradient(circle at 72% 88%, ${BRAND_BLUE}10 0, transparent 28%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 20px)',
        }}
      />
      {/* Foreground content */}
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Programs />
          <AdmissionsCTA />
          <Partners />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}






