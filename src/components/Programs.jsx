import Container from "./Container";
import { BRAND_BLUE } from "../lib/brand";
import { navigateHash } from "../lib/navigation";
import { GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { FcReading, FcGraduationCap, FcBusinessman } from "react-icons/fc";

const PROGRAM_CARDS = [
  {
    title: "Senior High School",
    copy: "Start strong with specialized academic tracks that prepare you for college and future careers.",
    cta: { label: "Explore SHS", href: "#/programs/shs" },
    icon: FcReading,
  },
  {
    title: "College Programs",
    copy: "Earn a degree that blends practical skills and industry-focused training for today’s job market.",
    cta: { label: "View Degrees", href: "#/programs#academic" },
    icon: FcGraduationCap,
  },
  {
    title: "Informatics Microcredential Courses",
    copy: "Upskill fast with short, focused programs that give you in-demand skills and certifications.",
    cta: { label: "See Microcredentials", href: "https://imc.informatics.edu.ph/", external: true },
    icon: FcBusinessman,
  },
];

const WHY_POINTS = [
  {
    title: "Graduate faster without compromising quality",
    copy:
      "Our accelerated programs are designed by industry experts to deliver maximum learning in minimum time. Get job-ready skills through intensive, focused curricula.",
    cta: "See pathways",
    ctaHref: "#/programs/explore",
    icon: GraduationCap,
  },
  {
    title: "Be work-ready from day one",
    copy:
      "Hands-on training with real projects, OJT placements, and direct mentorship from industry professionals. Build a portfolio that showcases your skills to employers.",
    cta: "View opportunities",
    ctaHref: "https://ph.jobstreet.com/companies/informatics-college-168552199237399/jobs",
    external: true,
    icon: Briefcase,
  },
  {
    title: "Stay ahead of the curve",
    copy:
      "Industry-informed curriculum updated quarterly to reflect the latest trends, technologies, and in-demand skills. Learn what employers are actually looking for.",
    cta: "Explore skills",
    ctaHref: "https://imc.informatics.edu.ph/",
    external: true,
    icon: TrendingUp,
  },
];

export default function Programs() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center">
            <span
              className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: BRAND_BLUE }}
            >
              Featured Programs
            </span>
            <h2 className="mt-4 text-3xl md:text-[40px] font-extrabold tracking-tight">
              <span style={{ color: "#0F172A" }}>Choose Your </span>
              <span style={{ color: BRAND_BLUE }}>Learning Path</span>
            </h2>
            <p className="mt-3 text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
              Our CAIP certification programs are designed to take you from beginner to expert, with industry-recognized credentials that employers value.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {PROGRAM_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex h-full flex-col rounded-[28px] border border-blue-100 bg-white p-10 shadow-[0_20px_55px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_32px_70px_rgba(59,130,246,0.18)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold" style={{ color: "#0f172a" }}>
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {card.copy}
                  </p>
                  <div className="mt-6 border-t border-blue-50 pt-5">
                    <button
                      type="button"
                      onClick={() => {
                        if (card.cta.external) {
                          window.open(card.cta.href, "_blank", "noopener");
                        } else {
                          navigateHash(card.cta.href);
                        }
                      }}
                      className="text-sm font-semibold"
                      style={{ color: BRAND_BLUE }}
                    >
                      {card.cta.label} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="programs" className="py-20 bg-white">
        <Container>
          <div className="text-center">
            <span
              className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: BRAND_BLUE }}
            >
              Your Next Big Move
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              <span style={{ color: "#0F172A" }}>Why Choose </span>
              <span style={{ color: BRAND_BLUE }}>Informatics</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base md:text-lg">
              We're not just about education—we're about transformation. Here's how we help you make your next career breakthrough.
            </p>
          </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {WHY_POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-[28px] border border-blue-100 bg-white p-10 shadow-[0_20px_55px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_32px_70px_rgba(59,130,246,0.18)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon size={22} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="mt-5 text-lg font-semibold" style={{ color: "#0f172a" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                  {item.copy}
                </p>
                <div className="mt-6 border-t border-blue-50 pt-5">
                  <button
                    type="button"
                    onClick={() => {
                      if (item.external) {
                        window.open(item.ctaHref, "_blank", "noopener");
                      } else if (item.ctaHref) {
                        navigateHash(item.ctaHref);
                      } else {
                        navigateHash("#/contact");
                      }
                    }}
                    className="text-sm font-semibold"
                    style={{ color: BRAND_BLUE }}
                  >
                    {item.cta} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => navigateHash("#/contact")}
            className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 text-sm font-semibold"
            style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
          >
            Start Your Journey Today →
          </button>
        </div>
        </Container>
      </section>
    </>
  );
}
