import Container from "../components/Container";
import { Globe, GraduationCap, Briefcase } from "lucide-react";
import FeatureStats from "../components/FeatureStats";
import Partners from "../components/Partners";
import InquiryForm from "../components/InquiryForm";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";

export default function About() {
  return (
    <main className="pt-24 md:pt-28">
      {/* Our Story */}
      <section id="our-story" className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-7/12 w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: BRAND_DARK }}>Our Story</h2>
              <p className="text-slate-700 mb-4">
                Our roots can be traced back to 1983 when Informatics Education was founded in Singapore in response to the demands for skilled Information Technology professionals in Asia. With the passion for technology and the vision of making IT education more accessible to Filipinos, Leonardo “Leo” Angeles Riingen established Informatics Philippines in 1993.
              </p>
              <p className="text-slate-700 mb-4">
                Making quality IT education more accessible to Filipinos, the very first Informatics Computer School was inside one of the most visited malls in the country and in one of the main business districts of Metro Manila. This eventually paved the way for more centers and colleges as demand grew, expanding to a network of over 30 computer schools and colleges all over the country.
              </p>
              <p className="text-slate-700 mb-4">
                Today, Informatics Philippines (or “Informatics”) is an independently owned and operated local educational institution that continues to ignite the very passion that brought it to life. Helping Filipinos acquire I.T. knowledge and skills that are vital for their personal and professional growth is the driving force of Informatics.
              </p>
              <p className="text-slate-700 mb-4">
                We offer Senior High School tracks, programs and courses for Tertiary Education (College or Higher Education), training programs and short courses for Professionals (Corporate), and Diploma courses, with special focus on I.T.-related core competencies and disciplines. These tracks, courses and programs are offered in a wide array of learning modes, from face-to-face learning to remote learning.
              </p>
              <p className="text-slate-700 mb-4">
                All our programs, backed by qualified educators and globally-recognized learning platforms and tools, are designed to equip students with the essential knowledge and skills necessary to become globally competitive and in-demand in any field or industry.
              </p>
            </div>
            <div className="md:w-5/12 w-full flex justify-center">
              <div className="w-full max-w-[480px] aspect-[4/5] flex items-center justify-center">
                <img src="https://www.informatics.edu.ph/wp-content/uploads/2018/12/Info-Website-09.jpg" alt="Our Story" className="rounded-2xl shadow-lg w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Glance */}
      <section id="glance" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight" style={{ color: BRAND_DARK }}>Informatics at a glance</h2>
          <p className="mt-3 text-base md:text-lg text-slate-700 max-w-3xl font-normal">
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
                <div className="font-semibold" style={{ color: BRAND_BLUE }}>{x.title}</div>
                <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Milestones */}
      <section id="milestones" className="py-12 md:py-16" style={{ background: BRAND_LIGHT }}>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: BRAND_DARK }}>Our Milestones</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>1983</div>
              <p className="text-slate-700 mb-2">The Informatics Group is established in Singapore.</p>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>1993</div>
              <p className="text-slate-700 mb-2">Informatics was established by entrepreneur Leo Riingen. First campus is at Informatics SM Megamall.</p>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>1994</div>
              <p className="text-slate-700 mb-2">Informatics is named among the world’s 100 Best Managed Small Companies outside the USA by Forbes Magazine.</p>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>1997</div>
              <p className="text-slate-700 mb-2">Opens its first College campuses in Manila and Caloocan</p>
            </div>
            <div>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>2003</div>
              <p className="text-slate-700 mb-2">International Master Franchise of the Year Top Computer Learning Center Two-time Singapore Brand Awardee</p>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>2009</div>
              <p className="text-slate-700 mb-2">Trained about 15,000 TESDA scholars nationwide in a period of six months.</p>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>2010</div>
              <p className="text-slate-700 mb-2">It is lauded by TESDA as the best IT school for employment for garnering the highest post-training employment rate of 70% per TESDA Survey.</p>
              <div className="font-bold text-lg" style={{ color: BRAND_BLUE }}>2014</div>
              <p className="text-slate-700 mb-2">Senator Cayetano together with TESDA,BJMP, and Informatics launched BILIB IT wherein more than 200 inmates were provided training with Job-Enabling skills.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Core Values */}
      <section id="core-values" className="py-12 md:py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: BRAND_DARK }}>Our Core Values</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
              <div className="font-semibold" style={{ color: BRAND_BLUE }}>Student Centric</div>
              <p className="mt-2 text-sm text-slate-600">We focus in understanding our students and putting them first in everything we do.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
              <div className="font-semibold" style={{ color: BRAND_BLUE }}>People</div>
              <p className="mt-2 text-sm text-slate-600">We empower our people to be professionals demonstrating the highest standards of ethics and integrity.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
              <div className="font-semibold" style={{ color: BRAND_BLUE }}>Innovative Culture</div>
              <p className="mt-2 text-sm text-slate-600">We manifest creativity and innovation in our development, delivery of programs and services.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
              <div className="font-semibold" style={{ color: BRAND_BLUE }}>Social Responsibility</div>
              <p className="mt-2 text-sm text-slate-600">We strive to be responsible corporate citizens in every society that we operate.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
              <div className="font-semibold" style={{ color: BRAND_BLUE }}>Results</div>
              <p className="mt-2 text-sm text-slate-600">We endeavor to provide sustainable returns to our stakeholders.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Informatics? */}
      <section id="why-informatics" className="py-16 w-full" style={{ background: 'linear-gradient(90deg, #eaf3fb 0%, #f7fafd 100%)' }}>
        <Container>
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-center" style={{ color: BRAND_DARK }}>Why Choose Informatics?</h2>
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8">
              {/* Item 1 */}
              <div className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow p-8 min-w-[220px]">
                <Globe size={56} className="mb-4" color={BRAND_BLUE} />
                <span className="font-bold text-lg mb-2" style={{ color: BRAND_DARK }}>Globally Recognized</span>
                <span className="text-base text-slate-700 text-center">International reputation for excellence</span>
              </div>
              {/* Item 2 */}
              <div className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow p-8 min-w-[220px]">
                <GraduationCap size={56} className="mb-4" color={BRAND_BLUE} />
                <span className="font-bold text-lg mb-2" style={{ color: BRAND_DARK }}>International Qualified Graduates</span>
                <span className="text-base text-slate-700 text-center">Graduates with global credentials</span>
              </div>
              {/* Item 3 */}
              <div className="flex-1 flex flex-col items-center bg-white rounded-2xl shadow p-8 min-w-[220px]">
                <Briefcase size={56} className="mb-4" color={BRAND_BLUE} />
                <span className="font-bold text-lg mb-2" style={{ color: BRAND_DARK }}>Guaranteed Employment</span>
                <span className="text-base text-slate-700 text-center">Career support and job placement</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Founder */}
      <section id="founder" className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-5/12 w-full flex justify-center">
              <div className="w-full max-w-[320px] aspect-[4/5] flex items-center justify-center">
                <img src="https://www.informatics.edu.ph/wp-content/uploads/2018/12/Info-Website-10.jpg" alt="Founder Leonardo Riingen" className="rounded-2xl shadow-lg w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-7/12 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: BRAND_DARK }}>Our Founder</h2>
              <p className="text-slate-700 mb-4">
                Leonardo Riingen is an entrepreneur who has already contributed immensely to improving information technology (IT) training and education in the Philippines.
              </p>
              <p className="text-slate-700 mb-4">
                Riingen came up with the idea that an Information Technology training should be made available to people. When you think of Informatics, "the computer school in the mall ", Riingen is the man behind it. That is the innovative and creative, if not a proactive way of making business and fulfilling his dream of making IT accessible to the people.
              </p>
              <p className="text-slate-700 mb-4">
                Utilizing his education in U.K., he applied the ladderized program in IT, patterned after the British education system, to allow students to learn skills and make them immediately employable. Also, he designed and customized IT training programs and curriculum for companies and government offices to give learners a comprehensive, organization-wide IT training. To make the IT education and training that his schools offer at par with international standards, his schools boast of international courses validated by the world's leading IT qualification awarding bodies; and maintains affiliations with IT industry technology frontrunners.
              </p>
            </div>
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
          <p className="mt-2 text-slate-700" style={{ color: BRAND_BLUE }}>Manila, Northgate Alabang, Cavite, Baguio, Cebu, CDO</p>
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

