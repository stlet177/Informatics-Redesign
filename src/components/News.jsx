import { motion } from "framer-motion";
import Container from "./Container";
import { BRAND_BLUE, BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { fadeInUp } from "../lib/variants";
import { ChevronRight } from "lucide-react";
import newsData from "../content/news.json";
import { PLACEHOLDER_IMG, resolveAsset } from "../lib/assets";

export default function News() {
  const fallback = [
    { slug: "cloud-innovation-lab-launch", title: "Informatics launches Cloud Innovation Lab", date: "2025-08-20", teaser: "Hands-on multi‑cloud and DevOps experience for learners.", image: "/assets/campus2.jpg" },
    { slug: "business-analytics-capstone-showcase", title: "Business Analytics Capstone Showcase", date: "2025-08-08", teaser: "Student teams present data-driven SME solutions.", image: "/assets/BSBA.jpg" },
    { slug: "comptia-cybersecurity-bootcamp", title: "CompTIA‑aligned Cybersecurity Bootcamp", date: "2025-07-30", teaser: "Pathway prepares learners for Security+ and SOC roles.", image: "/assets/informationtechnology.jpg" },
  ];
  const rawItems = (Array.isArray(newsData) && newsData.length ? newsData : fallback).slice(0, 6);
  const items = rawItems.map((item) => ({
    ...item,
    image: resolveAsset(item.image),
  }));

  return (
    <section id="news" className="py-16 md:py-24" style={{ background: BRAND_LIGHT }}>
      <Container>
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>News & Events</motion.h2>
        <div className="mt-8 relative overflow-hidden">
          <div className="news-marquee flex gap-4">
            <MarqueeGroup items={items} />
            <MarqueeGroup items={items} aria-hidden />
          </div>
        </div>
        <div className="mt-6">
          <a href="#/news" className="inline-flex items-center gap-2 text-sm" style={{ color: BRAND_BLUE }}>
            View all News & Events <ChevronRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}

function formatDate(d) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return d;
  }
}

function MarqueeGroup({ items }) {
  return (
    <div className="news-marquee-group flex gap-4">
      {items.map((n) => (
        <a key={n.slug}
           href={`#/news/${n.slug}`}
           className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] max-w-[85vw] rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          {n.image && (
            <div className="w-full h-28 sm:h-32 md:h-36 bg-slate-100">
              <img
                src={n.image}
                alt={n.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PLACEHOLDER_IMG; }}
              />
            </div>
          )}
          <div className="p-4">
            <div className="text-[11px] uppercase tracking-wide text-slate-500">{formatDate(n.date)}</div>
            <div className="mt-1 text-sm sm:text-base font-semibold" style={{ color: BRAND_DARK }}>{n.title}</div>
            {n.teaser && <div className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2">{n.teaser}</div>}
          </div>
        </a>
      ))}
    </div>
  );
}
