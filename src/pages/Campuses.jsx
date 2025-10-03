import Container from "../components/Container";
import { MapPin, Phone, Mail, Clock, Users, GraduationCap, Star, Award, Building2, Globe, BookOpen } from "lucide-react";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { asset } from "../lib/assets";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/variants";

export default function Campuses() {
  const campuses = [
    {
      name: "Manila Campus",
      address: "2070 BDO Bldg. Recto Ave Quiapo, Manila",
      phone: "0945 321 0716",
      email: "info.manila@informatics.com.ph",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat: 8:00 AM - 5:00 PM",
      programs: ["BS Information Technology", "BS Computer Science", "Senior High School"],
      students: "2,500+",
      established: "1993",
      highlights: ["Flagship Campus", "Central Location"],
      features: ["Modern Labs", "WiFi Campus", "24/7 Library"],
      image: asset("assets/manila-campus.jpg")
    },
    {
      name: "North Luzon Campus",
      address: "3/F Decibar Bldg., #65 Lower Bonifacio St., Baguio City",
      phone: "0746613754, 09175753237",
      email: "info.baguio@informatics.com.ph",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat: 8:00 AM - 5:00 PM",
      programs: ["Senior High School", "BS Information Technology", "Short Courses"],
      students: "700+",
      established: "2008",
      highlights: ["Mountain Campus", "Cool Climate"],
      features: ["Scenic Location", "Creative Spaces", "Innovation Hub"],
      image: asset("assets/north-luzon.jpg")
    },
    {
      name: "South Luzon Campus",
      address: "Informatics Bldg. E. Aguinaldo Highway, Tanzang Luma V, Imus City, Cavite",
      phone: "046-4712310 and 046-4895451",
      email: "info.cavite@informatics.com.ph",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat: 8:00 AM - 5:00 PM",
      programs: ["BS Information Systems", "Certificate Programs", "TESDA Programs"],
      students: "600+",
      established: "2010",
      highlights: ["Western Visayas", "Cultural Heritage"],
      features: ["Cultural Programs", "Heritage Building", "Community Center"],
      image: asset("assets/south-luzon.jpg")
    },
    {
      name: "Visayas (Cebu) Campus",
      address: "National Highway, Eskina Jugan, Pitogo Consolacion, Cebu City",
      phone: "564-2078, 0917-8364963",
      email: "info.consolacion@informatics.com.ph",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat: 8:00 AM - 5:00 PM",
      programs: ["BS Information Technology", "Senior High School", "TESDA Programs"],
      students: "1,200+",
      established: "2001",
      highlights: ["Regional Excellence", "Growing Community"],
      features: ["Regional Training", "Local Industry Focus", "Community Programs"],
      image: asset("assets/visayas-cebu.jpg")
    },
    {
      name: "Mindanao (CDO) Campus",
      address: "2nd level, Stary Bldg. Max Suniel St., Carmen, Cagayan De Oro",
      phone: "N/A",
      email: "info.cdo@informatics.com.ph",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat: 8:00 AM - 5:00 PM",
      programs: ["BS Computer Science", "Certificate Programs", "Professional Training"],
      students: "900+",
      established: "2005",
      highlights: ["Southern Gateway", "Innovation Center"],
      features: ["Research Facilities", "Advanced Computing", "AI Lab"],
      image: asset("assets/mindanao-cdo.jpg")
    },
    {
      name: "Northgate (Alabang) Campus",
      address: "Indo China Drive, Northgate Cyberzone Filinvest Corporate City, Alabang Muntinlupa City, Metro Manila",
      phone: "0960-611-4435",
      email: "info.northgate@informatics.com.ph",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat: 8:00 AM - 5:00 PM",
      programs: ["BS Information Systems", "BS Business Administration", "Certificate Programs"],
      students: "1,800+",
      established: "1997",
      highlights: ["Tech Hub", "Modern Facilities"],
      features: ["Innovation Center", "Industry Partnerships", "Startup Incubator"],
      image: asset("assets/campus.jpg")
    }
  ];

  return (
    <main className="pt-24 md:pt-28">
      {/* Mobile-Friendly Hero Banner */}
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
              <Building2 size={20} className="text-white sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base font-semibold text-white">Campus Network</span>
            </div>

            {/* Main Hero Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 text-white leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Campuses</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 font-light px-4">
              With 6 strategically located campuses nationwide, Informatics Philippines brings quality IT education
              closer to students across the country. Each campus is equipped with modern facilities and experienced faculty.
            </p>

            {/* Hero Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Star size={16} className="text-yellow-400 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base md:text-lg font-bold text-white">6 Strategic Locations</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <Award size={16} className="text-blue-400 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base md:text-lg font-bold text-white">30+ Years Excellence</span>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <a
                href="#/contact"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 border border-blue-500/50 w-full sm:w-auto"
              >
                <Phone size={20} className="sm:w-6 sm:h-6" />
                Contact Us
              </a>
              <a
                href="#/admissions"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-base sm:text-lg border-2 border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <BookOpen size={20} className="sm:w-6 sm:h-6" />
                View Admissions
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

      {/* Mobile-Friendly Enhanced Campuses Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50">
        <motion.div {...fadeInUp}>
          <Container>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {campuses.map((campus, index) => (
              <div key={index} className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 z-10">
                </div>

                {/* Campus Image */}
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                  <img
                    src={campus.image}
                    alt={`${campus.name} Campus`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: BRAND_DARK }}>
                        {campus.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        <MapPin size={12} className="text-slate-500 sm:w-3.5 sm:h-3.5" />
                        <span className="text-xs text-slate-600">{campus.address.split(',')[0]}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {campus.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                          <MapPin size={16} className="sm:w-5 sm:h-5" style={{ color: BRAND_BLUE }} />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: BRAND_DARK }}>
                            {campus.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600">{campus.address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2 sm:space-y-3 mb-6">
                      <div className="flex items-center gap-3 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100/50 hover:from-blue-50 hover:to-blue-100/50 transition-colors">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-blue-100">
                          <Phone size={14} className="sm:w-4 sm:h-4" style={{ color: BRAND_BLUE }} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">{campus.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100/50 hover:from-blue-50 hover:to-blue-100/50 transition-colors">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-blue-100">
                          <Mail size={14} className="sm:w-4 sm:h-4" style={{ color: BRAND_BLUE }} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">{campus.email}</span>
                      </div>
                      <div className="flex items-start gap-3 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100/50 hover:from-blue-50 hover:to-blue-100/50 transition-colors">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-blue-100 mt-0.5">
                          <Clock size={14} className="sm:w-4 sm:h-4" style={{ color: BRAND_BLUE }} />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-700">{campus.hours}</span>
                      </div>
                    </div>

                    {/* Programs Section */}
                    <div className="border-t border-slate-100 pt-3 sm:pt-4 mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                          <GraduationCap size={16} className="sm:w-4.5 sm:h-4.5" style={{ color: BRAND_BLUE }} />
                        </div>
                        <span className="text-xs sm:text-sm font-bold" style={{ color: BRAND_DARK }}>Programs Offered:</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {campus.programs.map((program, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50/50">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" />
                            <span className="text-xs sm:text-sm text-slate-700 font-medium">{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Stats */}
                    <div className="border-t border-slate-100 pt-3 sm:pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
                          <Users size={14} className="text-green-600 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-slate-800">{campus.students}</span>
                          <span className="text-xs text-slate-600 block">students</span>
                        </div>
                      </div>
                      <div className="px-2 sm:px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full">
                        <span className="text-xs font-bold text-slate-600">Est. {campus.established}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
        </motion.div>
      </section>

      {/* Mobile-Friendly Enhanced Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: BRAND_DARK }}>
              Informatics by the Numbers
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Our nationwide presence and commitment to excellence in IT education
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="group text-center p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <Building2 size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: BRAND_BLUE }}>6</div>
              <div className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold mb-2">Campuses Nationwide</div>
              <p className="text-xs sm:text-sm text-slate-600">Strategically located across the Philippines</p>
            </div>
            <div className="group text-center p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <Users size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: BRAND_BLUE }}>7,700+</div>
              <div className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold mb-2">Total Students</div>
              <p className="text-xs sm:text-sm text-slate-600">Enrolled across all campuses</p>
            </div>
            <div className="group text-center p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Award size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: BRAND_BLUE }}>30+</div>
              <div className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold mb-2">Years of Excellence</div>
              <p className="text-xs sm:text-sm text-slate-600">Pioneering IT education since 1993</p>
            </div>
            <div className="group text-center p-4 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Star size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ color: BRAND_BLUE }}>100+</div>
              <div className="text-sm sm:text-base md:text-lg text-slate-800 font-semibold mb-2">Industry Partners</div>
              <p className="text-xs sm:text-sm text-slate-600">Collaborating for student success</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile-Friendly Enhanced Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
              <Globe size={18} style={{ color: BRAND_BLUE }} />
              <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>Join Our Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: BRAND_DARK }}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Visit any of our campuses or contact us to learn more about our programs and admission requirements.
              Our counselors are ready to help you choose the right path for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="#/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                style={{ background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, #1e40af 100%)` }}
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                Contact Us
              </a>
              <a
                href="#/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                style={{ background: 'transparent', color: BRAND_BLUE, borderColor: BRAND_BLUE }}
              >
                <BookOpen size={18} className="sm:w-5 sm:h-5" />
                View Admissions
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
