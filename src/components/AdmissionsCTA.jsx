import { motion } from "framer-motion";
import Container from "./Container";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { asset } from "../lib/assets";
import { fadeInUp } from "../lib/variants";
import { ChevronRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AdmissionsCTA() {
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
            <div className="text-sm font-medium" style={{color: BRAND_DARK}}>Key Dates (SY 2025-2026)</div>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl p-4" style={{ background: "#EEF4FF" }}>
                <div className="font-semibold" style={{ color: BRAND_BLUE }}>Applications</div>
                <div className="text-slate-600">Open - Rolling</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "#EEF4FF" }}>
                <div className="font-semibold" style={{ color: BRAND_BLUE }}>Classes Start</div>
                <div className="text-slate-600">August 2025</div>
              </div>
            </div>
          </div>
          {/* Admissions Lottie under Key Dates */}
          <div className="mt-4 rounded-3xl bg-transparent">
            <div className="h-56 md:h-64">
              <DotLottieReact src={asset("assets/admission.lottie")} loop autoplay className="mix-blend-multiply" style={{ width: '100%', height: '100%', mixBlendMode: 'multiply', background: 'transparent' }} />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

