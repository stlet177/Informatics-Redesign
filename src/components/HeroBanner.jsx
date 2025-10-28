import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Container from "./Container";
import { asset, CAMPUS_IMG } from "../lib/assets";

const textVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const PRIMARY_CTA = { label: "Explore our Programs", href: "#/programs/explore" };

const HERO_SECONDARY = asset("assets/Herosecond.jpg");
const HERO_BACKGROUND = CAMPUS_IMG;

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 py-20 text-white md:py-28"
      aria-labelledby="hero-heading"
    >
      <motion.img
        src={HERO_BACKGROUND}
        alt="Informatics campus exterior"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-[#0b1120]/95 via-[#0f172a]/85 to-[#020617]/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/30 blur-[120px]"
        initial={{ opacity: 0.35, scale: 0.85 }}
        animate={{ opacity: [0.35, 0.5, 0.35], scale: [0.85, 1.05, 0.85] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-sky-600/20 blur-[100px]"
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ opacity: [0.3, 0.45, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
      />

      <Container className="relative z-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-stretch md:justify-between">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300"
              variants={textVariants}
            >
              Informatics Philippines
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl"
              variants={textVariants}
            >
              <span className="block">From Learning to</span>
              <span className="block">Earning</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-base text-slate-200 md:text-lg md:leading-relaxed"
              variants={textVariants}
            >
              Advance with courses that build skills and launch careers.
            </motion.p>

            <div
              className="mt-10 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:justify-start md:gap-4"
            >
              <a
                href={PRIMARY_CTA.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200 md:w-auto"
              >
                {PRIMARY_CTA.label}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#0f172a]/60 md:aspect-[4/3]">
                <img
                  src={HERO_SECONDARY}
                  alt="Students collaborating at Informatics"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
        <span>Scroll</span>
        <ArrowDown className="mt-2 h-5 w-5 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
