import Container from "../components/Container";
import FeatureStats from "../components/FeatureStats";
import Partners from "../components/Partners";
import InquiryForm from "../components/InquiryForm";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";

export default function About() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Glance */}
      <section id="glance" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>Informatics at a glance</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Informatics Philippines is a multinational education provider delivering industry-aligned learning across
            higher education, senior high school, and professional upskilling. Our mission is to empower learners with
            practical, future-ready skills.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { title: "Mission", desc: "Provide accessible, industry-relevant education that transforms careers." },
              { title: "Vision", desc: "Be a leader in technology-enabled teaching and learning." },
              { title: "History", desc: "Established 1993 in the Philippines, serving thousands nationwide." },
            ].map((x, i) => (
              <div key={i} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <div className="font-semibold" style={{ color: BRAND_DARK }}>{x.title}</div>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Info by the numbers */}
      <section id="numbers" className="py-12 md:py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Info by the Numbers</h2>
          <div className="mt-6">
            <FeatureStats items={[
              { value: "30+", label: "Years in PH" },
              { value: "6", label: "Campuses Nationwide" },
              { value: "100+", label: "Industry Partners" },
              { value: "1000s", label: "Learners Upskilled" },
            ]} />
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section id="partners" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Partners</h2>
        </Container>
        <Partners />
      </section>

      {/* Explore Informatics */}
      <section id="explore" className="py-12 md:py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Explore Informatics</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a href="#/about#campuses" className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-semibold" style={{ color: BRAND_DARK }}>Campuses</div>
              <p className="mt-1 text-sm text-slate-600">Find locations nationwide.</p>
            </a>
            <a href="#/programs#academic" className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-semibold" style={{ color: BRAND_DARK }}>Academic Programs</div>
              <p className="mt-1 text-sm text-slate-600">Bachelor’s and SHS tracks.</p>
            </a>
            <a href="#/programs#certificates" className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="font-semibold" style={{ color: BRAND_DARK }}>Certificate Programs</div>
              <p className="mt-1 text-sm text-slate-600">TESDA, Diploma, and Short Courses.</p>
            </a>
          </div>
        </Container>
      </section>

      {/* Campuses */}
      <section id="campuses" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Campuses</h2>
          <p className="mt-2 text-slate-700">Manila, Northgate Alabang, Cavite, Baguio, Cebu, CDO</p>
          <p className="mt-3 text-sm text-slate-600">See campus contacts under Contact Us or inquire to be routed to your nearest campus.</p>
        </Container>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-12 md:py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>FAQs</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { q: 'How do I apply?', a: 'Complete the application and submit requirements online via the Contact/Apply form.' },
              { q: 'Are scholarships available?', a: 'Yes. See Admissions for eligibility and how to apply.' },
              { q: 'Do you accept transferees?', a: 'Yes. Credit evaluation is performed during admissions.' },
              { q: 'Where can I see calendars?', a: 'Admissions page lists SHS and HE academic calendars per campus.' },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
                <div className="font-semibold" style={{ color: BRAND_DARK }}>{f.q}</div>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Privacy */}
      <section id="privacy" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Privacy Policy</h2>
          <p className="mt-2 text-slate-700 max-w-3xl">We value your privacy. Personal data submitted through our forms is handled in compliance with applicable data protection laws and used only for processing your inquiries and applications.</p>
        </Container>
      </section>

      {/* Contact + Inquiry */}
      <section id="contact" className="py-12 md:py-16">
        <Container>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: BRAND_DARK }}>Contact Us</h2>
            <a href="#/contact" className="text-sm" style={{ color: BRAND_BLUE }}>Open contact page →</a>
          </div>
          <div className="mt-4">
            <InquiryForm />
          </div>
        </Container>
      </section>
    </main>
  );
}

