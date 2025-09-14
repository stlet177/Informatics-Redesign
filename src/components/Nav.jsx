import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  LayoutDashboard,
  Compass,
} from "lucide-react";
import Container from "./Container";
import LaptopIcon from "./LaptopIcon";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT, HOME_HREF } from "../lib/brand";
import { INFO_LOGO, PLACEHOLDER_IMG } from "../lib/assets";

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
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
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
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Bachelor's Degree</div>
                    <ul className="mt-2 grid grid-cols-2 gap-1">
                      <li><a href="#/programs/information-technology" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><LaptopIcon /> Information Technology</a></li>
                      <li><a href="#/programs/computer-science" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><Code2 size={16} style={{ color: BRAND_BLUE }} /> Computer Science</a></li>
                      <li><a href="#/programs/information-systems" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><DatabaseIcon /> Information Systems</a></li>
                      <li><a href="#/programs/business-administration" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Business Administration</a></li>
                    </ul>
                    <div className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Senior High School</div>
                    <ul className="mt-2 grid grid-cols-2 gap-1">
                      <li><a href="#shs-ict" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><LaptopIcon /> ICT</a></li>
                      <li><a href="#shs-abm" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><BarChart3 size={16} style={{ color: BRAND_BLUE }} /> ABM</a></li>
                      <li><a href="#shs-humss" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-50" style={{ color: BRAND_DARK }}><GraduationCap size={16} style={{ color: BRAND_BLUE }} /> HUMSS</a></li>
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

            <a href="https://imc.informatics.edu.ph/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 relative hover:opacity-100 after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--brand-blue)] after:transition-all hover:after:w-full`} style={{color: BRAND_DARK}}>
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
                <a href={HOME_HREF} aria-label="Go to homepage" onClick={() => setMobileOpen(false)}>
                  <img src={INFO_LOGO} alt="Informatics logo" className="h-8 w-auto" />
                </a>
                <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2">
                  <X />
                </button>
              </div>
              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Programs</div>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <motion.a href="#/programs/information-technology" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <LaptopIcon /> Information Technology
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#/programs/computer-science" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <Code2 size={16} style={{ color: BRAND_BLUE }} /> Computer Science
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#/programs/information-systems" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <DatabaseIcon /> Information Systems
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#/programs/business-administration" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <BarChart3 size={16} style={{ color: BRAND_BLUE }} /> Business Administration
                      </motion.a>
                    </li>
                    <li>
                      <motion.a href="#programs-oa" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50">
                        <Users size={16} style={{ color: BRAND_BLUE }} /> Office Administration
                      </motion.a>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Quick Links</div>
                  <div className="mt-2 space-y-2">
                    <motion.a href="#admissions" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <GraduationCap size={16} style={{ color: BRAND_BLUE }} /> Admissions
                    </motion.a>
                    <motion.a href="https://ion.informatics.edu.ph/login/index.php" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <Globe size={16} style={{ color: BRAND_BLUE }} /> ION - LMS
                    </motion.a>
                    <motion.a href="#blogs" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <BookOpen size={16} style={{ color: BRAND_BLUE }} /> Blogs
                    </motion.a>
                    <motion.a href="#contact" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <Mail size={16} style={{ color: BRAND_BLUE }} /> Contact Us
                    </motion.a>
                    <motion.a href="#careers" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <Briefcase size={16} style={{ color: BRAND_BLUE }} /> Careers
                    </motion.a>
                    <motion.a href="#dti-pet-project" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <Layers size={16} style={{ color: BRAND_BLUE }} /> DTI PET Project
                    </motion.a>
                    <motion.a href="#faqs" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <HelpCircle size={16} style={{ color: BRAND_BLUE }} /> FAQS
                    </motion.a>
                    <motion.a href="#privacy" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
                      <Shield size={16} style={{ color: BRAND_BLUE }} /> Privacy Policy
                    </motion.a>
                  </div>
                </div>
                <motion.a href="#partners" whileTap={{ scale: 0.98 }} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-2 py-1">
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
