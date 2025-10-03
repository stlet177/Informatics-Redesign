import Container from "../components/Container";
import { Globe, GraduationCap, Briefcase, Users, Award, Target, Heart, Lightbulb, Shield, TrendingUp, Mail, Phone, MapPin, Calendar, Menu, History, Rocket, Share } from "lucide-react";
import FeatureStats from "../components/FeatureStats";
import Partners from "../components/Partners";
import InquiryForm from "../components/InquiryForm";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { asset } from "../lib/assets";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "../lib/variants";
import LottiePlayer from "../components/LottiePlayer";

import React, { useState, useRef, useEffect } from "react";

export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sidebarItems = [
    { text: "Where it all began", icon: History, action: () => scrollToSection('where-it-all-began') },
    { text: "The future we're building", icon: Target, action: () => scrollToSection('the-future-were-building') },
    { text: "Leadership and Legacy", icon: Users, action: () => scrollToSection('our-founder') },
    { text: "Our Achievements", icon: Award, action: () => scrollToSection('leadership-and-legacy') },
    { text: "Campuses", icon: MapPin, action: () => window.location.hash = '#/campuses' },
    { text: "Community Engagements", icon: Heart, action: () => scrollToSection('community-engagements') },
    { text: "Careers", icon: Briefcase, action: () => window.location.href = 'https://ph.jobstreet.com/companies/informatics-college-168552199237399/jobs' },
    { text: "Contact Us", icon: Mail, action: () => scrollToSection('contact') }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6
      }
    }
  };

  const coreValues = [
    {
      icon: Heart,
      title: "Student-Centric",
      description: "We put students at the heart of everything we do",
      image: asset("assets/campus.jpg")
    },
    {
      icon: Users,
      title: "People Excellence",
      description: "We empower our people to uphold professionalism, ethics, and integrity. ",
      image: asset("assets/campus2.jpg")
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We drive creativity and innovation in every program and service.",
      image: asset("assets/manila-campus.jpg")
    },
    {
      icon: Shield,
      title: "Social Responsibility",
      description: "We give back to our communities through initiatives that expand access to education.",
      image: asset("assets/north-luzon.jpg")
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "We create lasting value by developing future-ready graduates and sustaining impact for our stakeholders.",
      image: asset("assets/south-luzon.jpg")
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
      year: "Forbes Magazine - 1994",
      title: "Global Recognition for Management Excellence",
      description: "Among the World's 100 Best Managed Small Companies Outside The US."
    },
    {
      year: "(International) - 1996-1999",
      title: "International Trade Award (Recipient)",
      description: "Sustained Performance in International Trade Over Multiple Years."
    },
    {
      year: "(International) - 1997-1998",
      title: "International Franchise Excellence Award (Recipient)",
      description: "Recognition For Outstanding Global Franchising Standards."
    },
    {
      year: "17th Annual Parangal Ng Bayan (Philippines) - 2002",
      title: "National Consumers Excellence Award - Most Outstanding Computer School",
      description: "Voted Top Computer School By National Consumer Body."
    },
    {
      year: "(Singapore) - 2002-2003",
      title: "Singapore Brand Award",
      description: "Acknowledged for strong and trusted brand presence."
    },
    {
      year: "19th Annual National Consumers Quality Awards (Philippines) - 2003",
      title: "People's Choice Award - Top Computer Learning Center",
      description: "Public-Voted Recognition For Computer Learning Excellence."
    },
    {
      year: "(International) - 2004",
      title: "Franchise Excellence Award (Finalist)",
      description: "Shortlisted Among The Top Franchise Organizations."
    },
    {
      year: "per TESDA survey - 2010",
      title: "Best IT School For Employment (70% Post-Training Employment Rate)",
      description: "Cited For Strong Graduate Employability Outcomes."
    },


  ];

  const facebookLinks = [
    "https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/528959311_1335355621293786_5866450033975963540_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF72FobdWp3y4yc-rAFIH6-RZ5_cFDORYZFnn9wUM5FhlXVCQKU7PoMGmSvNiMDsisnR_jsd3RHea0F90Hxb6Xc&_nc_ohc=1K73G1r-k2kQ7kNvwGucak_&_nc_oc=AdlrQF_A_MNMN1UPb5G2ut2koJPJ0kbLVhlkGwa9hV6-liN0-YTRHczCgMpcpcZsMITDpNue9Jb-sG-K4FhBvuMz&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=IpwKb_tqPAjXt3wealLQHQ&oh=00_AfYU3JgBn27SGx7FMe_RMZXmWlDxjGiEXGQ9BU_QEHyTvA&oe=68E4761B",
    "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/509604002_779362648087318_9112359933200247564_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmGchxrKDXuoWQk4YuiqzKI9hCsu_EoEsj2EKy78SgS98YjNNyK_2Q3DVvY_xcPpWlFBAHFoH4eqDmW1ZRqjin&_nc_ohc=kUSDKss77vgQ7kNvwFgXSoO&_nc_oc=AdlWfxmxo7is4eTSHCF3LLsEpo4tSxd8uYZ2C2nd7EwaWDYTzIXfuINbpXNrIhseYvq4cMDduJVx2o33eNmf-r-X&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=u7BVohNJHbDi9GgwKvaVew&oh=00_AfbPxSSLhBMcu6BlRszOq8FQeWUbSyQjL_XC4ds7fHa9EA&oe=68E47D92",
    "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/500612511_713102617776108_7830812769912256440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF5-QfTevfUMBuFOU1ioeMTtCgnkGBtFpO0KCeQYG0WkwZY4Ex9gtMdwrCPTsdpoDrHeiDvqZJSBkHPn1uXeX5C&_nc_ohc=NCezZaJeD-gQ7kNvwERTpGo&_nc_oc=AdnEsnEw1Gd2ZxoZg8TC1tLRW7irjXSB66sKFfGNgzbc9xsgMV-i7Y-nJIiXmONXVExCRs9ApvOlxxkRl-BTo5Vo&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=uimuLAjBRpjA41vXIre-ow&oh=00_Afagq1JqL5VYzCzbG_DjFQpHhVUz9ZF9Wd6WyOP0O6q08A&oe=68E48230",
    "https://scontent.fmnl8-5.fna.fbcdn.net/v/t39.30808-6/500650129_996735152675368_1018214043556453986_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMjZB29KehM47-jflZfmbkrVw6IZ2pmj2tXDohnamaPRFv9_z3xWkFHKgFxxw7t7ZjtzUl7PxNg2B0uxnxaBds&_nc_ohc=iU3H7jkrC7oQ7kNvwGq46bf&_nc_oc=Adlkr9UY2PNfmPyZo7Xh35REeUl-Rfjh2QqmGnBihK01PcqRTJC1M2rWbotBF07NUfYmNzPL5kAuwdNWtRGnhzqq&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&_nc_gid=WOsnNwat-4Bu5PrCXrujXw&oh=00_Afbci7Tyfo2QQH7T8qdEmQffHy22uPOqahweDmaYhxQVnw&oe=68E48CCF",
    "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/500060788_995669096115307_78722843202150056_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGkgd--APYeObmM4RhpTahiq3Gp7tI8gPircanu0jyA-DHDCW0-gf5dCY1yZVbJ-HAUzT8gtsd6RPtOLUdQQPt_&_nc_ohc=J_ChbUl-1M0Q7kNvwEPmy8E&_nc_oc=AdmZb3F81Ln6IUI2zCK58na98LkLB4-DIh2XZ1gVtCEka4KZZ6fQ9Xy8M90jaKZmmKr-SvTppcUWVle_q7yiP4_h&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=YtcKzTAcEY2wYNlRNT0L6Q&oh=00_AfY-PiL0s0hqOXD2cNPsJqklPSBOa7XoI0Gl7Dz_PEuqSw&oe=68E47D79"
  ];

  const facebookShareLinks = [
    "https://www.facebook.com/share/p/14RgaGHXHpz/",
    "https://www.facebook.com/share/p/1BCckBNV3E/",
    "https://www.facebook.com/share/p/14MYqWf4mWS/",
    "https://www.facebook.com/share/p/1CYWueeK4K/",
    "https://www.facebook.com/share/p/1FZdFiyhKk/"
  ];

  const facebookItems = facebookLinks.map((link, index) => ({
    slug: facebookShareLinks[index],
    image: link,
    title: `Facebook Post ${index + 1}`,
    teaser: "Click to view on Facebook"
  }));

  const marqueeItems = [...facebookItems, ...facebookItems];

  function MarqueeGroup({ items }) {
    const [translateX, setTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const marqueeRef = useRef(null);

    useEffect(() => {
      if (!isDragging) {
        const interval = setInterval(() => {
          setTranslateX(prev => {
            const newTranslate = prev - 1;
            const itemWidth = 300; // approximate width per item
            const totalWidth = items.length * itemWidth;
            if (Math.abs(newTranslate) >= totalWidth) {
              return 0;
            }
            return newTranslate;
          });
        }, 50);
        return () => clearInterval(interval);
      }
    }, [isDragging, items.length]);

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setDragStart(e.clientX - translateX);
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        setTranslateX(e.clientX - dragStart);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      setDragStart(e.touches[0].clientX - translateX);
    };

    const handleTouchMove = (e) => {
      if (isDragging) {
        setTranslateX(e.touches[0].clientX - dragStart);
        e.preventDefault();
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    return (
      <div
        className="news-marquee-group flex gap-4 overflow-x-auto scrollbar-hide touch-pan-x"
        ref={marqueeRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${translateX}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          scrollSnapType: 'x mandatory'
        }}
      >
        {items.map((n, i) => (
          <a key={i}
             href={n.slug}
             target="_blank"
             rel="noopener noreferrer"
             className="min-w-[200px] sm:min-w-[260px] md:min-w-[320px] max-w-[85vw] rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden scroll-snap-align-start">
            <div className="w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
              <img src={n.image} alt={n.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500">Social Media</div>
              <div className="mt-1 text-xs sm:text-sm font-semibold" style={{ color: BRAND_DARK }}>{n.title}</div>
              {n.teaser && <div className="mt-1 text-xs sm:text-xs text-slate-600 line-clamp-2">{n.teaser}</div>}
            </div>
          </a>
        ))}
        {items.map((n, i) => (
          <a key={`dup-${i}`}
             href={n.slug}
             target="_blank"
             rel="noopener noreferrer"
             className="min-w-[200px] sm:min-w-[260px] md:min-w-[320px] max-w-[85vw] rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden scroll-snap-align-start">
            <div className="w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
              <img src={n.image} alt={n.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500">Social Media</div>
              <div className="mt-1 text-xs sm:text-sm font-semibold" style={{ color: BRAND_DARK }}>{n.title}</div>
              {n.teaser && <div className="mt-1 text-xs sm:text-xs text-slate-600 line-clamp-2">{n.teaser}</div>}
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <main className={`pt-12 md:pt-16 flex min-h-screen bg-white`}>
        {/* Desktop Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex fixed left-0 top-16 w-48 h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-r border-gray-300 p-4 overflow-y-auto shadow-xl"
        >
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col gap-6"
        >
          {sidebarItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              onClick={(e) => { e.preventDefault(); item.action(); }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={itemVariants}
              className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-600 transition border-b border-gray-200 hover:border-blue-300"
              whileHover={{ scale: 1.05, y: -2, color: "#2563eb" }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sky-600">
                <item.icon size={18} />
              </div>
              {item.text}
            </motion.a>
          ))}
        </motion.nav>
        </motion.aside>

        {/* Mobile Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={sidebarOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed md:hidden left-0 top-16 w-64 h-screen bg-gradient-to-b from-blue-50 to-blue-100 border-r border-gray-300 p-4 overflow-y-auto shadow-xl z-50`}
        >
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-6"
          >
            {sidebarItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              onClick={(e) => { e.preventDefault(); item.action(); }}
              transition={{ type: "spring", stiffness: 300 }}
              variants={itemVariants}
              className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-600 transition border-b border-gray-200 hover:border-blue-300"
              whileHover={{ scale: 1.05, y: -2, color: "#2563eb" }}
            >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sky-600">
                  <item.icon size={18} />
                </div>
                {item.text}
              </motion.a>
            ))}
          </motion.nav>
        </motion.aside>

        {/* Content Area */}
        <div className="flex-1 md:ml-48 relative min-h-[calc(100vh-4rem)] p-6 max-w-full overflow-x-hidden">
          {/* Mobile hamburger button */}
          <div className="md:hidden fixed top-16 left-4 z-50">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Existing content */}
          <motion.section {...fadeInUp} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <motion.img
              src={asset("assets/campus.jpg")}
              alt="Informatics campus exterior"
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
                    INFORMATICS PHILIPPINES
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight">
                  Upskilling <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Filipinos</span> Since 1993
                </h1>

                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
                  For over three decades, Informatics Philippines has been at the forefront of IT education,
                  transforming lives through innovative learning and industry-relevant skills development.
                </p>
              </div>
            </Container>
          </motion.section>

          {/* The rest of the existing content sections remain unchanged */}
          {/* Our Story Section */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50" id="where-it-all-began">
            <motion.div {...fadeInUp}>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
                        <Award size={16} style={{ color: BRAND_BLUE }} />
                        <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>Where It All Began</span>
                      </div>

                      
                      <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-6">
                        <span style={{ color: BRAND_DARK }}>A Legacy of </span>
                        <span style={{ color: "#0097FF" }}>Innovation in IT Education</span>
                      </h2>

                      <div className="space-y-6 text-slate-700 leading-relaxed">
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                        <motion.p variants={paragraphVariants}>
                            Our story began in 1983 in Singapore, when Informatics Education was founded to answer the growing demand for skilled IT professionals in Asia. A decade later, in 1993, Leonardo “Leo” Riingen brought that same vision to the Philippines, establishing Informatics Philippines as a premier IT training institution. From one computer school in Metro Manila, we expanded into a nationwide network of colleges and training centers, empowering thousands of Filipinos through education in Information and Communication Technology (ICT) and Business Management.
                          </motion.p>

                          <motion.p variants={paragraphVariants}>
                            Long before online learning became the norm, Informatics pioneered digital education in the Philippines with Purple Train in the early 2000s. Even before the pandemic, our students were already benefiting from a blended learning model — combining online flexibility with face-to-face engagement. Today, our award-winning learning management system and globally recognized digital platforms continue to power our programs, equipping students and professionals with future-ready skills.
                          </motion.p>

                          <motion.p variants={paragraphVariants}>
                            Beyond academic pathways in Senior High, Diploma, and Degree programs, we also deliver Informatics Microcredential Courses (IMC) – these are short, bite-sized courses for professionals and corporations, helping them stay ahead in a rapidly changing digital landscape. Backed by flexible modes of learning and expert trainers who continually upskill themselves, Informatics remains committed to helping Filipinos thrive.
                          </motion.p>
                        </motion.div>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2">
                      <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                          <img src={asset("assets/ourstory.jpg")} alt="Informatics Campus" className="w-full h-full object-cover" />
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
            </motion.div>
          </section>

          {/* Mission, Vision, History */}
          <section className="py-16 md:py-20" id="the-future-were-building" style={{ background: `linear-gradient(135deg, ${BRAND_LIGHT} 0%, #e2e8f0 100%)` }}>
            <motion.div {...fadeInUp}>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <span
                      className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase mb-2"
                      style={{ color: BRAND_BLUE }}
                    >
                      The Future We're Building
                    </span>
                    <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4">
                      <span style={{ color: BRAND_DARK }}>Informatics at a </span>
                      <span style={{ color: "#0097FF" }}>Glance</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      A comprehensive overview of our institutional identity, guiding principles, and remarkable journey
                    </p>
                  </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="group relative bg-white rounded-[28px] border border-blue-100 p-10 shadow-[0_20px_55px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_32px_70px_rgba(59,130,246,0.18)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 mb-3"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users size={28} style={{ color: BRAND_BLUE }} />
              </motion.div>
              <h3 className="mt-5 text-lg font-semibold" style={{ color: BRAND_DARK }}>Mission</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                We Help People Learn Technology To Make Their Lives Better.
              </p>
            </motion.div>

            <motion.div
              className="group relative bg-white rounded-[28px] border border-blue-100 p-10 shadow-[0_20px_55px_rgba(59,130,246,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_32px_70px_rgba(59,130,246,0.18)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 mb-3"
                whileHover={{ rotate: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Rocket size={28} style={{ color: BRAND_BLUE }} />
              </motion.div>
              <h3 className="mt-5 text-lg font-semibold" style={{ color: BRAND_DARK }}>Vision</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                We Transform Individuals To Become Successful Innovators By Leveraging The Power Of Technology.
              </p>
            </motion.div>
          </div>
                </div>
              </Container>
            </motion.div>
          </section>
          
          {/* Core Values */}
          <section ref={ref} className="py-16 md:py-20" id="our-achievements">
            <motion.div {...fadeInUp}>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <span
                      className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase mb-2"
                      style={{ color: BRAND_BLUE }}
                    >
                      The Future We're Building
                    </span>
                    <motion.h2
                      className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6 }}
                      style={{ color: BRAND_DARK }}
                    >
                      <span>Our </span>
                      <span style={{ color: "#0097FF" }}>Core Values</span>
                    </motion.h2>
                    <motion.p
                      className="text-lg text-slate-600 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      The fundamental principles that guide our decisions, actions, and commitment to educational excellence
                    </motion.p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                    <div className="space-y-8 bg-blue-900 p-8 rounded-lg">
                      {coreValues.map((value, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0">
                            <value.icon size={48} style={{ color: "white" }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                              {value.title}
                            </h3>
                            <p className="text-white leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="h-full hidden lg:block">
                      <img src={asset("assets/corevalues.jpg")} alt="Core Values" className="w-full h-full object-cover rounded-none shadow-none" />
                    </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          </section>

          {/* Our Founder */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50" id="our-founder">
            <motion.div {...fadeInUp}>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-6">
                        <Users size={16} style={{ color: BRAND_BLUE }} />
                        <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>Leadership And Legacy</span>
                      </div>

                  <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-6">
                    <span style={{ color: BRAND_DARK }}>Our Founder & </span>
                    <span style={{ color: "#0097FF" }}>Visionary Leader</span>
                  </h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p className="text-lg">
                        <span className="font-semibold" style={{ color: BRAND_BLUE }}>Leonardo Riingen</span> is a pioneering entrepreneur who has significantly contributed to advancing information technology training and education in the Philippines.
                      </p>

                      <p>
                        Leonardo “Leo” Riingen, founder of Informatics Philippines, is a visionary leader who has made technology education more accessible to Filipinos since 1993. Inspired by his education in the U.K., he pioneered ladderized IT programs patterned after the British system, ensuring students could gain employable skills at every stage while continuing their learning. His bold decision to bring IT education into malls redefined access to technology learning — making it approachable, practical, and vital to everyday Filipinos. He also championed customized training for companies and government institutions, aligning education with industry and global standards.                      </p>

                      <p>
                        Guided by his vision, Informatics has become more than a school — it is a platform that equips Filipinos not just to be job-ready, but to excel and lead in a global economy. With internationally recognized courses, flexible digital learning platforms, and a culture of continuous upskilling, Informatics carries forward Riingen’s mission: to help Filipinos thrive in the digital age and build a legacy of innovation, excellence, and leadership for generations to come.                      </p>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <img src={asset("assets/ourFounder.jpg")} alt="Founder Leonardo Riingen" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Award className="text-white" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            </motion.div>
          </section>

          {/* Our Milestones Timeline */}
          <section className="py-16 md:py-20 bg-slate-900" id="leadership-and-legacy">
            <motion.div>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                  <span
                    className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase mb-2 text-cyan-600"
                  >
                    Our Achievements
                  </span>
                  <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4 text-white">
                    <span>Our </span>
                    <span>Milestones</span>
                  </h2>
                    <p className="text-lg text-white max-w-3xl mx-auto">
                      A journey of excellence, innovation, and commitment to educational transformation
                    </p>
                  </div>

                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-400 transform md:-translate-x-1/2"></div>

                  <div className="space-y-12">
                    {milestones.map((milestone, index) => {
                      let lottieSrc;
                      if (index === 4) { // Singapore milestone
                        lottieSrc = asset("assets/Singapore flag Lottie JSON animation.lottie");
                      } else {
                        const lottieFiles = [
                          asset("assets/education.lottie"),
                          asset("assets/Teacher.lottie"),
                          asset("assets/Growth Chart.lottie"),
                          asset("assets/Coding.lottie"),
                          asset("assets/Advanced Analytics.lottie")
                        ];
                        lottieSrc = lottieFiles[index % lottieFiles.length];
                      }
                      return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-start gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 bg-white text-black rounded-full text-sm font-bold">
                            {milestone.year}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">
                          {milestone.title}
                        </h3>
                        <p className="text-white leading-relaxed">
                          {milestone.description}
                        </p>
                        <div className="mt-4">
                          <LottiePlayer src={lottieSrc} className="w-full max-w-xs mx-auto" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
                  </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          </section>

          {/* Community Engagement Section*/}
          <section id="community-engagements" className="py-16 md:py-24" style={{ background: BRAND_LIGHT }}>
            <Container>
              <div className="text-center mb-12">
                <span
                  className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase mb-2"
                  style={{ color: BRAND_BLUE }}
                >
                  Community Engagement
                </span>
                <motion.h2 {...fadeInUp} className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4">
                  <span style={{ color: BRAND_DARK }}>Community </span>
                  <span style={{ color: "#0097FF" }}>Engagements</span>
                </motion.h2>
              </div>
              {/* Continuous marquee strip */}
              <div className="mt-8 relative overflow-hidden">
                <div className="news-marquee">
                  <MarqueeGroup items={facebookItems} />
                </div>
              </div>
            </Container>
          </section>

          {/* Contact Section */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50" id="contact">
            <motion.div {...fadeInUp}>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                  <span
                    className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase mb-2"
                    style={{ color: BRAND_BLUE }}
                  >
                    Contact Us
                  </span>
                  <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4">
                    <span style={{ color: BRAND_DARK }}>Get in </span>
                    <span style={{ color: "#0097FF" }}>Touch</span>
                  </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      Ready to start your journey with Informatics? Contact us today to learn more about our programs and admissions process.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 lg:p-8 border border-slate-100">
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6" style={{ color: BRAND_DARK }}>
                        Contact Information
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                            <Mail size={28} style={{ color: BRAND_BLUE }} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-sm lg:text-base" style={{ color: BRAND_DARK }}>Email</p>
                            <a href="mailto:info@informatics.edu.ph" className="text-slate-600 hover:text-blue-600 transition-colors text-sm lg:text-base break-all">
                              info.northgate@informatics.com.ph
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                            <Phone size={28} style={{ color: BRAND_BLUE }} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-sm lg:text-base" style={{ color: BRAND_DARK }}>Phone</p>
                            <a href="tel:+63285231234" className="text-slate-600 hover:text-green-600 transition-colors text-sm lg:text-base">
                              0960-611-4435
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 lg:gap-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                            <MapPin size={28} style={{ color: BRAND_BLUE }} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-sm lg:text-base" style={{ color: BRAND_DARK }}>Main Campus</p>
                            <p className="text-slate-600 text-sm lg:text-base leading-relaxed">2070 BDO Bldg. Recto Ave Quiapo, Manila</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg p-6 lg:p-8 border border-slate-100">
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6" style={{ color: BRAND_DARK }}>
                        Quick Inquiry
                      </h3>
                      <InquiryForm />
                    </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          </section>
        </div>
      </main>
    </>
  );
}

