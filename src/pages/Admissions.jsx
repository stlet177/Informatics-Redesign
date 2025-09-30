import { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import CalendarList from "../components/CalendarList";
import { admissionsConfig } from "../lib/content.config";

export default function Admissions() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "src/content/news.json").then(r => r.json()).then(setNews).catch(() => setNews([]));
  }, []);
  const events = useMemo(() => news.filter(n => (n.category || 'news') === 'event').slice(0, 3), [news]);
  const requirements = [
    {
      title: "Senior High School Applicants",
      items: [
        "Completed online application form",
        "Form 138 or latest report card",
        "PSA birth certificate (copy)",
        "2x2 ID photos (2 pieces)",
      ],
    },
    {
      title: "College Freshmen",
      items: [
        "Filled-out application form",
        "Grade 12 report card / Form 138",
        "Good moral certificate",
        "PSA birth certificate",
      ],
    },
    {
      title: "Transferees & Second Degree",
      items: [
        "Transcript of records or certified true copy",
        "Honorable dismissal / transfer credentials",
        "Course descriptions for evaluation",
        "Valid ID and PSA birth certificate",
      ],
    },
  ];

  return (
    <main className="pt-24 md:pt-28">
      {/* Guidelines */}
      <section id="how-to-apply" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>Admissions</h1>
          <p className="mt-2 text-slate-700">Guidelines for application and enrollment.</p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            {admissionsConfig.guidelines.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </Container>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-12 md:py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Requirements</h2>
          <p className="mt-2 text-slate-700">Prepare the documents below based on the applicant type.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {requirements.map(({ title, items }) => (
              <div key={title} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <div className="font-semibold" style={{ color: BRAND_DARK }}>{title}</div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Tuition & Financial Aid",
                copy: "Compare payment plans, sponsorship options, and counselor support.",
                href: "#/admissions/tuition",
              },
              {
                title: "Scholarships",
                copy: "Browse merit, need-based, and partner-funded awards for learners.",
                href: "#/admissions/scholarships",
              },
              {
                title: "Admissions FAQs",
                copy: "Find quick answers about applications, assessments, and enrollment.",
                href: "#/admissions/faqs",
              },
            ].map(({ title, copy, href }) => (
              <a
                key={title}
                href={href}
                className="flex h-full flex-col rounded-2xl bg-slate-900 px-6 py-6 text-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-200">Learn more</div>
                <div className="mt-3 text-lg font-semibold">{title}</div>
                <p className="mt-2 text-sm text-slate-200 flex-1">{copy}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-200">
                  Explore →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Calendars */}
      <section className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Academic Calendars</h2>
          <p className="mt-2 text-slate-700">Per campus: SHS and HE</p>
          <div className="mt-6">
            <CalendarList calendars={admissionsConfig.calendars} />
          </div>
        </Container>
      </section>

      {/* Upcoming events */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Upcoming Events</h2>
            <a href="#/news" className="text-sm" style={{ color: BRAND_BLUE }}>View all →</a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {events.length === 0 ? (
              <div className="text-slate-600">No events yet.</div>
            ) : (
              events.map((e) => (
                <a
                  key={e.slug}
                  href={`#/news/${e.slug}`}
                  className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md"
                >
                  <div className="text-xs uppercase tracking-wide text-slate-500">{formatDate(e.date)}</div>
                  <div className="mt-1 font-semibold" style={{ color: BRAND_DARK }}>{e.title}</div>
                  <p className="mt-2 text-sm text-slate-600">{e.teaser}</p>
                </a>
              ))
            )}
          </div>
        </Container>
      </section>

      {/* Register IMC */}
      <section className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-semibold" style={{ color: BRAND_DARK }}>Register for Short Courses (IMC)</div>
            <p className="mt-2 text-slate-700">Jumpstart your skills with flexible, short programs.</p>
          </div>
          <a
            href={admissionsConfig.imcRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="simple-btn simple-btn--primary"
          >
            Go to IMC
          </a>
        </Container>
      </section>
    </main>
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
