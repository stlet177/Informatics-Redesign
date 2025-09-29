import { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import CalendarList from "../components/CalendarList";
import { admissionsConfig } from "../lib/content.config";
import { navigateHash } from "../lib/navigation";

export default function Admissions() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "src/content/news.json").then(r => r.json()).then(setNews).catch(() => setNews([]));
  }, []);
  const events = useMemo(() => news.filter(n => (n.category || 'news') === 'event').slice(0, 3), [news]);

  return (
    <main className="pt-24 md:pt-28">
      {/* Guidelines */}
      <section className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>Admissions</h1>
          <p className="mt-2 text-slate-700">Guidelines for application and enrollment.</p>
          <ul className="mt-4 list-disc pl-5 text-slate-700">
            {admissionsConfig.guidelines.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </Container>
      </section>

      {/* Scholarships */}
      <section className="py-12 md:py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Scholarships</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {admissionsConfig.scholarships.map((s, i) => (
              <div key={i} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <div className="font-semibold" style={{ color: BRAND_DARK }}>{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <button
                  type="button"
                  onClick={() => navigateHash(s.href)}
                  className="simple-btn simple-btn--primary mt-4 self-start"
                >
                  {s.cta}
                </button>
              </div>
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
