import Container from "../components/Container";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { BookOpen, BarChart3, GraduationCap, Compass, Palette, Code, Wrench, Phone, Users, Award, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/variants";

export default function SHS() {
  const academicTracks = [
    {
      icon: BookOpen,
      title: "Arts, Social Sciences, and Humanities",
      shortTitle: "HUMSS",
      desc: "Emphasizes communication, society, and culture, guiding students toward careers in education, law, journalism, and the social sciences.",
      href: "#/programs/shs/humss",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Accountancy, Business, and Management",
      shortTitle: "ABM",
      desc: "Centers on business, finance, and management, training students for entrepreneurship and corporate professions.",
      href: "#/programs/shs/abm",
      color: "from-green-500 to-green-600"
    },
    {
      icon: GraduationCap,
      title: "Science, Technology, Engineering, and Mathematics",
      shortTitle: "STEM",
      desc: "Focuses on scientific inquiry, technological innovation, and mathematical reasoning for STEM-related careers.",
      href: "#/programs/shs/stem",
      color: "from-purple-500 to-purple-600"
    },
  ];

  const techProTracks = [
    {
      icon: Compass,
      title: "Technical Drafting",
      desc: "Learn technical drawing, CAD software, and architectural drafting for engineering and construction careers.",
      href: "#/programs/shs/technical-drafting",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Palette,
      title: "Animation",
      desc: "Master 2D/3D animation techniques and digital storytelling for careers in animation and visual effects.",
      href: "#/programs/shs/animation",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Palette,
      title: "Illustration",
      desc: "Develop illustration skills and visual communication techniques for graphic design and publishing careers.",
      href: "#/programs/shs/illustration",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Palette,
      title: "Visual Graphic Design",
      desc: "Learn design principles, typography, and digital tools for careers in graphic design and visual media.",
      href: "#/programs/shs/visual-graphic-design",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Code,
      title: "Computer Programming (Java)",
      desc: "Build programming fundamentals with Java, preparing for software development and IT careers.",
      href: "#/programs/shs/computer-programming",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Wrench,
      title: "Computer Systems Servicing",
      desc: "Learn hardware maintenance, troubleshooting, and IT support for technical service careers.",
      href: "#/programs/shs/computer-systems-servicing",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Phone,
      title: "Contact Center Services",
      desc: "Develop communication and customer service skills for contact center and support roles.",
      href: "#/programs/shs/contact-center-services",
      color: "from-yellow-500 to-yellow-600"
    },
  ];

  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section with Campuses Hero Image */}
      <motion.section {...fadeInUp} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/assets/campuseshero.jpg"
          alt="Informatics Senior High School"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Overlay */}
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#0b1120]/95 via-[#0f172a]/85 to-[#020617]/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <Container className="relative z-10">
          <div className="text-center max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded mb-8">
              <span className="text-base font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                SENIOR HIGH SCHOOL
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
              Your Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Starts Here</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
              Discover Informatics Senior High School tracks designed to prepare you for college success and future careers.
              Choose from academic pathways or specialized technical-professional tracks that align with your interests and goals.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => {
                  const element = document.getElementById('academic-tracks');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-white font-semibold transition hover:bg-white/20"
              >
                <BookOpen size={18} />
                Academic Tracks
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('techpro-tracks');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-white font-semibold transition hover:bg-white/20"
              >
                <Code size={18} />
                TechPro Tracks
              </button>
            </div>
          </div>
        </Container>
      </motion.section>

      {/* Academic Tracks Section */}
      <section id="academic-tracks" className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-4">
              <BookOpen size={16} style={{ color: BRAND_BLUE }} />
              <span className="text-sm font-semibold text-blue-700">Academic Pathways</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
              Academic Tracks
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Traditional academic pathways that prepare students for higher education and various career fields
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {academicTracks.map((track, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className={`h-2 bg-gradient-to-r ${track.color}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <track.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: BRAND_DARK }}>
                    {track.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mb-3">{track.shortTitle}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{track.desc}</p>
                  <a
                    href={track.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: BRAND_BLUE }}
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical-Professional Tracks Section */}
      <section id="techpro-tracks" className="py-16 md:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-4">
              <Code size={16} style={{ color: BRAND_BLUE }} />
              <span className="text-sm font-semibold text-purple-700">Technical-Professional</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
              TechPro Tracks
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Specialized technical training programs that prepare students for immediate employment and industry careers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {techProTracks.map((track, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className={`h-2 bg-gradient-to-r ${track.color}`} />
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <track.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: BRAND_DARK }}>
                    {track.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">{track.desc}</p>
                  <a
                    href={track.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: BRAND_BLUE }}
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
              Why Choose Informatics SHS?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join thousands of students who have launched successful careers through our comprehensive programs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Users size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: BRAND_BLUE }}>10+</div>
              <div className="text-lg font-semibold mb-2" style={{ color: BRAND_DARK }}>Specialized Tracks</div>
              <p className="text-slate-600">Academic and technical pathways to choose from</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: BRAND_BLUE }}>Industry-Aligned</div>
              <div className="text-lg font-semibold mb-2" style={{ color: BRAND_DARK }}>Curriculum</div>
              <p className="text-slate-600">Skills that match real-world job requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Building2 size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: BRAND_BLUE }}>6</div>
              <div className="text-lg font-semibold mb-2" style={{ color: BRAND_DARK }}>Campuses</div>
              <p className="text-slate-600">Nationwide access to quality education</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <GraduationCap size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: BRAND_BLUE }}>College</div>
              <div className="text-lg font-semibold mb-2" style={{ color: BRAND_DARK }}>Ready</div>
              <p className="text-slate-600">Smooth transition to higher education</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Take the first step towards your future. Contact our admissions team to learn more about our Senior High School programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #1e40af 100%)` }}
              >
                <Phone size={20} />
                Contact Admissions
              </a>
              <a
                href="#/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-lg font-semibold border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'transparent', color: BRAND_BLUE, borderColor: BRAND_BLUE }}
              >
                <BookOpen size={20} />
                View Requirements
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

