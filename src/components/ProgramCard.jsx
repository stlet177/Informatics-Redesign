import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ChevronRight } from "lucide-react";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { PLACEHOLDER_IMG } from "../lib/assets";

export default function ProgramCard({ icon: Icon, title, desc, img, video, lottie, featured = false, delay = 0, tag, descLines = 3, descMin = '4.5rem', href = '#' }) {
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
          <DotLottieReact src={lottie} loop autoplay style={{ width: '100%', height: '100%' }} />
        </div>
      ) : video ? (
        <div className="-mt-2 -mx-2 mb-4 overflow-hidden rounded-xl ring-1 ring-black/5 h-40 sm:h-36">
          <video src={video} className="w-full h-full object-cover" autoPlay muted loop playsInline controls={false} preload="metadata" poster={img || undefined} />
        </div>
      ) : (
        img && (
          <div className="-mt-2 -mx-2 mb-4 overflow-hidden rounded-xl ring-1 ring-black/5 h-40 sm:h-36">
            <img
              src={img}
              alt="Program visual"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PLACEHOLDER_IMG; }}
            />
          </div>
        )
      )}
      <div className="flex items-start gap-3 min-h-[56px]">
        <div className="rounded-xl p-2 shrink-0" style={{ background: BRAND_LIGHT }}>
          <Icon size={20} style={{ color: BRAND_BLUE }} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-snug" style={{ color: BRAND_DARK, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{title}</h3>
        </div>
      </div>
      <div className="mt-2 min-h-[22px]">
        {tag ? (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium" style={{ color: BRAND_BLUE, border: '1px solid rgba(0,0,0,0.06)' }}>{tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-sm text-slate-600 flex-1" style={{ display: '-webkit-box', WebkitLineClamp: descLines, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: descMin }}>
        {desc}
      </p>
      <div className="mt-auto pt-2">
        <motion.a href={href} className="inline-flex items-center gap-2 text-sm" style={{ color: BRAND_BLUE }} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
          View curriculum <ChevronRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
}
