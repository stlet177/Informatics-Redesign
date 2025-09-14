import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Container from "./Container";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { CAMPUS_IMG, PLACEHOLDER_IMG } from "../lib/assets";
import { fadeInUp } from "../lib/variants";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Geometric decorative shapes (right + left) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-44 h-[460px] w-[460px] opacity-10 -z-10"
        style={{
          background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #0A84FF 100%)`,
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-[340px] w-[340px] opacity-10 -z-10 rotate-12"
        style={{
          background: `linear-gradient(135deg, #0A84FF 0%, ${BRAND_BLUE} 100%)`,
          clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
        }}
      />
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs" style={{ background: BRAND_LIGHT, color: BRAND_BLUE }}>
            <span className="inline-block h-2 w-2 rounded-full" style={{background: BRAND_BLUE}} />
            Enrollment for SY 2025-2026 is open
          </div>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight" style={{color: BRAND_DARK}}>
            Master the {" "}
            <motion.span
              className="digital-age-animate"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              Digital Age
            </motion.span>{" "}
            with Technology Excellence
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

