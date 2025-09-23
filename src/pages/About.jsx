import Container from "../components/Container";
import { Globe, GraduationCap, Briefcase, Users, Award, Target, Heart, Lightbulb, Shield, TrendingUp, Mail, Phone, MapPin, Calendar } from "lucide-react";
import FeatureStats from "../components/FeatureStats";
import Partners from "../components/Partners";
import InquiryForm from "../components/InquiryForm";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";

export default function About() {
  const coreValues = [
    {
      icon: Heart,
      title: "Student-Centric",
      description: "We focus on understanding our students and putting them first in everything we do, ensuring personalized educational experiences that foster growth and success."
    },
    {
      icon: Users,
      title: "People Excellence",
      description: "We empower our people to be professionals demonstrating the highest standards of ethics and integrity in education and service delivery."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We manifest creativity and innovation in our development and delivery of programs and services, staying ahead of technological advancements."
    },
    {
      icon: Shield,
      title: "Social Responsibility",
      description: "We strive to be responsible corporate citizens in every society that we operate, contributing positively to community development."
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "We endeavor to provide sustainable returns to our stakeholders while maintaining excellence in educational outcomes and student success."
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Globally Recognized Excellence",
      description: "International reputation for delivering world-class IT education with industry-standard certifications and global partnerships.",
      highlight: "Internationally Accredited"
    },
    {
      icon: GraduationCap,
      title: "Industry-Ready Graduates",
      description: "Our curriculum produces graduates with practical skills, professional certifications, and real-world experience for immediate employability.",
      highlight: "Job-Ready Skills"
    },
    {
      icon: Briefcase,
      title: "Career Placement Support",
      description: "Comprehensive career services including job placement assistance, industry connections, and alumni network support for successful career transitions.",
      highlight: "Employment Guarantee"
    }
  ];

  const milestones = [
    {
      year: "1983",
      title: "Foundation in Singapore",
      description: "The Informatics Group is established in Singapore, marking the beginning of our journey in IT education excellence."
    },
    {
      year: "1993",
      title: "Philippine Establishment",
      description: "Informatics Philippines founded by entrepreneur Leonardo Riingen, opening the first campus at SM Megamall, making IT education accessible to Filipinos."
    },
    {
      year: "1994",
      title: "International Recognition",
      description: "Named among the world's 100 Best Managed Small Companies outside the USA by Forbes Magazine, establishing our global reputation."
    },
    {
      year: "1997",
      title: "College Expansion",
      description: "Opens first College campuses in Manila and Caloocan, expanding from vocational training to comprehensive higher education."
    },
    {
      year: "2003",
      title: "Award Recognition",
      description: "International Master Franchise of the Year and Top Computer Learning Center. Two-time Singapore Brand Awardee for educational excellence."
    },
    {
      year: "2009",
      title: "National Impact",
      description: "Successfully trained 15,000 TESDA scholars nationwide in six months, demonstrating our commitment to accessible education."
    },
    {
      year: "2010",
      title: "Employment Excellence",
      description: "Recognized by TESDA as the best IT school for employment with 70% post-training employment rate, validating our industry-aligned approach."
    },
    {
      year: "2014",
      title: "Social Responsibility",
      description: "Launched BILIB IT program with Senator Cayetano, TESDA, and BJMP, providing job-enabling skills training to over 200 inmates."
    }
  ];

  return (
    <main className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/campus.jpg')`,
            filter: 'grayscale(20%) blur(1px) brightness(0.8)',
            transform: 'scale(1.1)'
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <Container className="relative z-10">
          <div className="text-center max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-8">
              <Award size={20} className="text-white" />
              <span className="text-base font-semibold text-white">About Informatics Philippines</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-white leading-tight">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Future</span> Leaders
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
              For over three decades, Informatics Philippines has been at the forefront of IT education,
              transforming lives through innovative learning and industry-relevant skills development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#/programs"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-white font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 border border-blue-500/50"
              >
                <GraduationCap size={20} />
                Explore Programs
              </a>
              <a
                href="#/campuses"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-white font-bold text-lg border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <MapPin size={20} />
                Find Campus
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
                  <Award size={16} style={{ color: BRAND_BLUE }} />
                  <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>Our Story</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: BRAND_DARK }}>
                  A Legacy of Innovation in IT Education
                </h2>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    Our roots trace back to <span className="font-semibold" style={{ color: BRAND_BLUE }}>1983</span> when Informatics Education was founded in Singapore in response to Asia's growing demand for skilled IT professionals. With a passion for technology and a vision to make IT education accessible to Filipinos, entrepreneur <span className="font-semibold" style={{ color: BRAND_BLUE }}>Leonardo "Leo" Riingen</span> established Informatics Philippines in <span className="font-semibold" style={{ color: BRAND_BLUE }}>1993</span>.
                  </p>

                  <p>
                    The first Informatics Computer School opened in one of Metro Manila's busiest malls, pioneering accessible IT education. This innovative approach led to rapid expansion, growing to over 30 computer schools and colleges nationwide.
                  </p>

                  <p>
                    Today, Informatics Philippines stands as an independently owned educational institution, continuing to ignite the passion that brought it to life. We remain committed to helping Filipinos acquire essential IT knowledge and skills for personal and professional growth.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="/assets/campus.jpg" alt="Informatics Campus" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">30+</span>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, History */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Informatics at a Glance
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A comprehensive overview of our institutional identity, guiding principles, and remarkable journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 mb-6">
                  <Target size={28} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: BRAND_DARK }}>Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide accessible, industry-relevant education that transforms careers and empowers learners with practical, future-ready skills for global competitiveness.
                </p>
              </div>

              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 mb-6">
                  <Globe size={28} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: BRAND_DARK }}>Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the leading institution in technology-enabled teaching and learning, recognized globally for educational excellence and innovation in IT education.
                </p>
              </div>

              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 mb-6">
                  <Award size={28} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: BRAND_DARK }}>History</h3>
                <p className="text-slate-600 leading-relaxed">
                  Established in 1993 in the Philippines, serving thousands of students nationwide with over 30 years of educational excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Milestones Timeline */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Our Milestones
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A journey of excellence, innovation, and commitment to educational transformation
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-400 transform md:-translate-x-1/2"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-bold">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: BRAND_DARK }}>
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Our Core Values
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                The fundamental principles that guide our decisions, actions, and commitment to educational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 mb-6">
                    <value.icon size={28} style={{ color: BRAND_BLUE }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Informatics */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Why Choose Informatics?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover what sets us apart and why thousands of students choose Informatics for their educational journey
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 p-8">
                  <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 mb-6">
                    <item.icon size={32} style={{ color: BRAND_BLUE }} />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold rounded-full mb-3">
                      {item.highlight}
                    </span>
                    <h3 className="text-xl font-bold mb-3" style={{ color: BRAND_DARK }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Founder */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
                  <Users size={16} style={{ color: BRAND_BLUE }} />
                  <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>Leadership</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: BRAND_DARK }}>
                  Our Founder & Visionary Leader
                </h2>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    <span className="font-semibold" style={{ color: BRAND_BLUE }}>Leonardo Riingen</span> is a pioneering entrepreneur who has significantly contributed to advancing information technology training and education in the Philippines.
                  </p>

                  <p>
                    Riingen revolutionized IT education by establishing "the computer school in the mall" concept, making technology education accessible to everyone. His innovative approach transformed how Filipinos access IT training and education.
                  </p>

                  <p>
                    Drawing from his UK education, he implemented the ladderized IT program based on the British education system, enabling students to acquire immediately employable skills while pursuing higher qualifications.
                  </p>

                  <p>
                    His vision extends to corporate and government training, designing customized IT programs that provide comprehensive, organization-wide technology education. Riingen maintains international standards through partnerships with leading IT qualification bodies and technology frontrunners.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="/assets/ourFounder.jpg" alt="Founder Leonardo Riingen" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Award className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Informatics by the Numbers
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our impact and achievements in delivering quality IT education across the Philippines
              </p>
            </div>

            <FeatureStats items={[
              { value: "30+", label: "Years of Excellence" },
              { value: "6", label: "Campuses Nationwide" },
              { value: "100+", label: "Industry Partners" },
              { value: "1000s", label: "Successful Graduates" },
            ]} />
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Our Strategic Partners
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Collaborating with industry leaders to ensure our curriculum meets global standards
              </p>
            </div>
            <Partners />
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Explore Informatics
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover our campuses, programs, and opportunities to start your journey with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="#/campuses" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 mb-4">
                  <MapPin size={20} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND_DARK }}>Campuses</h3>
                <p className="text-sm text-slate-600">Find our locations nationwide</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a href="#/programs" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100 mb-4">
                  <GraduationCap size={20} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND_DARK }}>Academic Programs</h3>
                <p className="text-sm text-slate-600">Bachelor's and SHS tracks</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a href="#/programs" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 mb-4">
                  <Award size={20} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND_DARK }}>Certificate Programs</h3>
                <p className="text-sm text-slate-600">TESDA, Diploma, and Short Courses</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a href="#/careers" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 mb-4">
                  <Users size={20} style={{ color: BRAND_BLUE }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: BRAND_DARK }}>Careers</h3>
                <p className="text-sm text-slate-600">Join our team of educators</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
                Get in Touch
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Ready to start your journey with Informatics? Contact us today to learn more about our programs and admissions process.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
                <h3 className="text-2xl font-bold mb-6" style={{ color: BRAND_DARK }}>
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                      <Mail size={20} style={{ color: BRAND_BLUE }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND_DARK }}>Email</p>
                      <a href="mailto:info@informatics.edu.ph" className="text-slate-600 hover:text-blue-600 transition-colors">
                        info@informatics.edu.ph
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
                      <Phone size={20} style={{ color: BRAND_BLUE }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND_DARK }}>Phone</p>
                      <a href="tel:+63285231234" className="text-slate-600 hover:text-green-600 transition-colors">
                        +63 2 8523 1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
                      <MapPin size={20} style={{ color: BRAND_BLUE }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND_DARK }}>Main Campus</p>
                      <p className="text-slate-600">SM Megamall, Mandaluyong City</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
                <h3 className="text-2xl font-bold mb-6" style={{ color: BRAND_DARK }}>
                  Quick Inquiry
                </h3>
                <InquiryForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
