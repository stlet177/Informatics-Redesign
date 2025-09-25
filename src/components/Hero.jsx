import { motion } from "framer-motion";
import Container from "./Container";
import FancyText from "@carefully-coded/react-text-gradient";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { CAMPUS_IMG, PLACEHOLDER_IMG } from "../lib/assets";
import { fadeInUp } from "../lib/variants";

export default function Hero() {
  const goHome = () => {
    if (typeof window === "undefined") return;
    const hash = "#/";
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      const evt = typeof HashChangeEvent === "function"
        ? new HashChangeEvent("hashchange")
        : new Event("hashchange");
      window.dispatchEvent(evt);
    }
  };

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
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wide"
            style={{ background: BRAND_LIGHT, color: BRAND_BLUE }}
          >
            🚀 Enrollment is ongoing
          </div>
          <h1
            className="mt-4 text-5xl font-extrabold tracking-tight md:text-6xl"
            style={{ color: BRAND_DARK }}
          >
            <span className="block font-bold" style={{ color: "#0F172A" }}>
              Upskill the
            </span>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <FancyText
                gradient={{ from: "#0EA5E9", to: "#1E3A8A", type: "linear" }}
                animateTo={{ from: "#1E3A8A", to: "#0F172A" }}
                animateDuration={2400}
                className="block text-5xl font-extrabold leading-tight md:text-6xl"
              >
                Future
              </FancyText>
            </motion.div>
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
            Powered by Informatics
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
            Transform your career with cutting-edge AI and technology programs. Join thousands of professionals advancing their skills with industry-leading certifications.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.button
              type="button"
              onClick={goHome}
              className="btn-pulse simple-btn simple-btn--primary"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              Register Now
            </motion.button>
            <motion.button
              type="button"
              onClick={goHome}
              className="btn-pulse simple-btn simple-btn--outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Explore Programs
            </motion.button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { label: "Graduates", value: "50K+" },
              { label: "Employment Rate", value: "95%" },
              { label: "Years Experience", value: "15+" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 px-6 py-6 text-center shadow-md"
              >
                <p className="text-3xl font-extrabold" style={{ color: BRAND_BLUE }}>
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
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
          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Next Batch Starts
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900">October 15, 2024</p>
            </div>
            <motion.button
              type="button"
              onClick={goHome}
              className="btn-pulse simple-btn simple-btn--dark text-xs uppercase tracking-wide"
              whileHover={{ scale: 1.05, translateY: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Spot
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
