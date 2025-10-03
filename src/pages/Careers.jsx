import Container from "../components/Container";
import { Users, MapPin, Clock, Mail, Phone, Building2 } from "lucide-react";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { asset } from "../lib/assets";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/variants";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Accounting Personnel (Accounts Receivables)",
      department: "Finance",
      location: "NCR",
      type: "Full-time",
      description: "Responsible for processing and monitoring all the incoming payments. Main duty is to manage accounts receivable and record and post all payments in a correct and timely manner."
    },
    {
      title: "Accounting Personnel",
      department: "Finance",
      location: "Cebu",
      type: "Full-time",
      description: "Responsible for handling the financials, permits, licenses, and soft HR functions of the center."
    },
    {
      title: "Graphics Designer",
      department: "Marketing",
      location: "Main Office",
      type: "Full-time",
      description: "Responsible for the conceptualization of attractive, creative, and effective designs for various promotions and activities, and recommends more innovative material designs."
    }
  ];

  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative min-h-screen max-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${asset('assets/Informationsystem.jpg')}')`,
            filter: 'grayscale(100%) blur(3px) brightness(0.6)',
            transform: 'scale(1.2)'
          }}
        ></div>

        {/* Multiple Overlay Layers for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/30"></div>

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto px-4 sm:px-6">
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-6 sm:mb-8">
              <Users size={20} className="text-white sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base font-semibold text-white">Join Our Team</span>
            </div>

            {/* Main Hero Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 text-white leading-tight">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Future</span> With Us
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 font-light px-4">
              Join Informatics Philippines and be part of a team that's shaping the future of IT education.
              We're looking for passionate professionals who want to make a difference.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <a
                href="#/openings"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 border border-blue-500/50 w-full sm:w-auto"
              >
                View Openings
              </a>
              <a
                href="#/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                Contact HR
              </a>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator - Hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="py-12 sm:py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <motion.div {...fadeInUp}>
          <Container>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Current Openings
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                Explore exciting career opportunities and join our growing team
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1">
              {jobOpenings.map((job, index) => (
                <div key={index} className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: BRAND_DARK }}>
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                          <div className="flex items-center gap-1">
                            <Building2 size={14} />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #1e40af 100%)` }}
                    >
                      <Mail size={16} />
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </motion.div>
      </section>

      {/* Contact HR */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
              <Mail size={18} style={{ color: BRAND_BLUE }} />
              <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>Get in Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: BRAND_DARK }}>
              Questions About Working at Informatics?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Our HR team is here to help you learn more about career opportunities and the application process.
              Reach out to us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="mailto:hr@informatics.edu.ph"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #1e40af 100%)` }}
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                Email HR
              </a>
              <a
                href="tel:+63285231234"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                style={{ background: 'transparent', color: BRAND_BLUE, borderColor: BRAND_BLUE }}
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                Call Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
