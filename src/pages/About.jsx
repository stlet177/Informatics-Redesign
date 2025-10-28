import Container from "../components/Container";
import { Globe, GraduationCap, Briefcase, Users, Award, Target, Heart, Lightbulb, Shield, TrendingUp, MapPin, Menu, History, Rocket } from "lucide-react";
import FeatureStats from "../components/FeatureStats";
import Partners from "../components/Partners";
import { BRAND_DARK, BRAND_LIGHT, BRAND_BLUE } from "../lib/brand";
import { asset } from "../lib/assets";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "../lib/variants";
import LottiePlayer from "../components/LottiePlayer";

import React, { useState, useRef, useEffect } from "react";

export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sidebarItems = [
    { text: "Where It all began", icon: History, action: () => scrollToSection('where-it-all-began') },
    { text: "The Future We're Building", icon: Rocket, action: () => scrollToSection('the-future-were-building') },
    { text: "Leadership And Legacy", icon: Users, action: () => scrollToSection('our-founder') },
    { text: "Our Achievements", icon: Award, action: () => scrollToSection('leadership-and-legacy') },
    { text: "Our Campuses", icon: MapPin, action: () => scrollToSection('campuses') },
    { text: "Community Engagements", icon: Heart, action: () => scrollToSection('community-engagements') },
    { text: "Careers", icon: Briefcase, action: () => window.location.href = 'https://ph.jobstreet.com/companies/informatics-college-168552199237399/jobs' }
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
      title: "People",
      description: "We empower our people to uphold professionalism, ethics, and integrity. ",
      image: asset("assets/campus2.jpg")
    },
    {
      icon: Lightbulb,
      title: "Innovative culture",
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
      title: "Results",
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
      year: "(International) - 2004",
      title: "Franchise Excellence Award (Finalist)",
      description: "Shortlisted Among The Top Franchise Organizations."
    },
    {
      year: "per TESDA survey - 2010",
      title: "Best IT School For Employment (70% Post-Training Employment Rate)",
      description: "Cited For Strong Graduate Employability Outcomes."
    },
    {
      year: "19th Annual National Consumers Quality Awards (Philippines) - 2003",
      title: "People's Choice Award - Top Computer Learning Center",
      description: "Public-Voted Recognition For Computer Learning Excellence."
    },
  ];

  const campuses = [
    {
      name: "INFORMATICS NORTH LUZON -BAGUIO BRANCH",
      address: "3rd Floor Decibar Bldg., #65 Lower Bonifacio Street, Baguio City",
      image: asset("assets/north-luzon.jpg")
    },
    {
      name: "INFORMATICS MANILA BRANCH",
      address: "2070 BDO Building CM Recto Ave., Quiapo, Manila",
      image: asset("assets/manila-campus.jpg")
    },
    {
      name: "INFORMATICS CAVITE BRANCH",
      address: "Km. 21, Informatics Building, Emilio Aguinaldo Highway, Anabu 1-E, Imus, Cavite",
      image: asset("assets/south-luzon.jpg")
    },
    {
      name: "INFORMATICS ALABANG BRANCH",
      address: "Ground Floor, Convergence Bldg., Indo China Drive Northgate Cyberzone Filinvest Corporate City Alabang Muntinlupa City",
      image: asset("assets/campus.jpg")
    },
    {
      name: "INFORMATICS MINDANAO - CAGAYAN DE ORO BRANCH",
      address: "2F Stary Building, Max Suniel Street, Carmen, Cagayan de Oro City",
      image: asset("assets/mindanao-cdo.jpg")
    },
    {
      name: "INFORMATICS VISAYAS - CONSOLACION BRANCH",
      address: "National Highway Brgy. Pitogo Consolacion, Cebu",
      image: asset("assets/visayas-cebu.jpg")
    }
  ];

  const facebookLinks = [
    "https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/528959311_1335355621293786_5866450033975963540_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF72FobdWp3y4yc-rAFIH6-RZ5_cFDORYZFnn9wUM5FhlXVCQKU7PoMGmSvNiMDsisnR_jsd3RHea0F90Hxb6Xc&_nc_ohc=K8eaDIqJunEQ7kNvwGXXECi&_nc_oc=Adnsjj171pQBwz_DAlO_yaZloKwjcRbvYzy71BJylNwK5t5K2cx5gHpYKI5wWk3wTkXHi_rHZLiRkZx1ZkKnmKrW&_nc_zt=23&_nc_ht=scontent.fmnl8-2.fna&_nc_gid=KoIba5CyMTy-D7J5NHGXxg&oh=00_Affnk6dFSxA-NG9XbkWO-QoMzIEftGFC2LnrnIDVBEt6Vg&oe=68F793DB",
    "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/509604002_779362648087318_9112359933200247564_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmGchxrKDXuoWQk4YuiqzKI9hCsu_EoEsj2EKy78SgS98YjNNyK_2Q3DVvY_xcPpWlFBAHFoH4eqDmW1ZRqjin&_nc_ohc=t05tfWHkO-0Q7kNvwFGUl1W&_nc_oc=AdlTGNByx2OMyrJO1ogDz2RWK9R4vdoxD42BxnmDMAG2p_Q-Kk06-ZF6K7Jm_rd4-gzt0qK1gXQbB3vBZoeGa4Kd&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=WqaiMoW4gZSzV1fF1ZcqeA&oh=00_Afe1ctqpUGwSWhVQFTaGJYwtq7zg0ZzQKa4onD2wiwoKWw&oe=68F79B52",
    "https://scontent.fmnl8-1.fna.fbcdn.net/v/t39.30808-6/500612511_713102617776108_7830812769912256440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF5-QfTevfUMBuFOU1ioeMTtCgnkGBtFpO0KCeQYG0WkwZY4Ex9gtMdwrCPTsdpoDrHeiDvqZJSBkHPn1uXeX5C&_nc_ohc=_MAfq02J20IQ7kNvwGdeIIl&_nc_oc=Adkyua8fVwgNWnuOAIYhg9Gu66jDTzr7qeQUbgnjrjMNwMu3iuR8edd8YuYdhHszI-Wt6FUk483oLZnS3AX_87U9&_nc_zt=23&_nc_ht=scontent.fmnl8-1.fna&_nc_gid=tr3eyOmy_0ms5hNH8XKCTg&oh=00_AfcoIiKfZwWdPcDORPygdLazDr7nBOswrfR8ecv3Zul4EQ&oe=68F79FF0",
    "https://scontent.fmnl8-5.fna.fbcdn.net/v/t39.30808-6/500650129_996735152675368_1018214043556453986_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFMjZB29KehM47-jflZfmbkrVw6IZ2pmj2tXDohnamaPRFv9_z3xWkFHKgFxxw7t7ZjtzUl7PxNg2B0uxnxaBds&_nc_ohc=3rx38J74gGoQ7kNvwEdfBLf&_nc_oc=AdlM5432ca0ku0alnkrkMXgqMTEi2cTIs6enu2Vab2SjorG0xe3F1JRrClxqtZQDxF-8fQJuKrBUF8-Gpx_HJEox&_nc_zt=23&_nc_ht=scontent.fmnl8-5.fna&_nc_gid=L7wzXaUb89Chd8717u19nA&oh=00_AfdP7S0-dbUTpuV5yV7OnCJ20B2phro8gNr4sIbMwrQfRw&oe=68F7724F",
    "https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/500060788_995669096115307_78722843202150056_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGkgd--APYeObmM4RhpTahiq3Gp7tI8gPircanu0jyA-DHDCW0-gf5dCY1yZVbJ-HAUzT8gtsd6RPtOLUdQQPt_&_nc_ohc=1Ni0ANSoj9cQ7kNvwFaKm6E&_nc_oc=Adlpu4eStS27kiUjDpBQ26SSKHf3nfJTaUfy_AB0b593jZETHHPWcLw26ahxw9n8FKQt6bCHqIjPsnOloGwLIMwm&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=mpNDAC-dkicRTjDg4HHgwg&oh=00_AfddnbY0XnHBvyzmxXyJXclfLDYQ36DCxTyWHTC-hpyhVw&oe=68F79B39"
  ];

  const facebookShareLinks = [
    "https://www.facebook.com/share/p/14RgaGHXHpz/",
    "https://www.facebook.com/share/p/1BCckBNV3E/",
    "https://www.facebook.com/share/p/14MYqWf4mWS/",
    "https://www.facebook.com/share/p/1CYWueeK4K/",
    "https://www.facebook.com/share/p/1FZdFiyhKk/"
  ];

  const newTitles = [
    "𝐈𝐒𝐊𝐎𝐋𝐀𝐑 𝐧𝐠 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐜𝐬 𝐢𝐬 𝐜𝐨𝐦𝐢𝐧𝐠 𝐛𝐚𝐜𝐤!",
    "𝐅𝐨𝐫𝐠𝐢𝐧𝐠 𝐚 𝐅𝐮𝐭𝐮𝐫𝐞-𝐑𝐞𝐚𝐝𝐲 𝐅𝐨𝐫𝐜𝐞 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐈𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧",
    "𝗡𝗕𝗜 𝗔𝗡𝗗 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗖𝗦 𝗠𝗔𝗡𝗜𝗟𝗔 𝗦𝗜𝗚𝗡𝗦 𝗠𝗘𝗠𝗢𝗥𝗔𝗡𝗗𝗨𝗠 𝗢𝗙 𝗔𝗚𝗥𝗘𝗘𝗠𝗘𝗡𝗧",
    "𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐜𝐬 𝐏𝐡𝐢𝐥𝐢𝐩𝐩𝐢𝐧𝐞𝐬 𝐚𝐧𝐝 𝐍𝐁𝐈 𝐋𝐚𝐮𝐧𝐜𝐡 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐁𝐞𝐧𝐞𝐟𝐢𝐭 𝐏𝐫𝐨𝐠𝐫𝐚𝐦",
    "𝐓𝐡𝐞 𝐃𝐈𝐋𝐆-𝐁𝐚𝐠𝐮𝐢𝐨 𝐩𝐚𝐫𝐭𝐧𝐞𝐫𝐬 𝐰𝐢𝐭𝐡 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐜𝐬 𝐭𝐨 𝐛𝐨𝐨𝐬𝐭 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐥𝐢𝐭𝐞𝐫𝐚𝐜𝐲 𝐢𝐧 𝐭𝐡𝐞 𝐋𝐆𝐔."
  ];

const truncateTitle = (title, maxLength = 90) => {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + "... read more";
  }
  return title;
};

const facebookItems = facebookLinks.map((link, index) => ({
    slug: facebookShareLinks[index],
    image: link,
    title: truncateTitle(newTitles[index], 20),
    teaser: "Click to view on Facebook"
  }));

  const marqueeItems = Array.from({ length: 20 }, () => facebookItems).flat();

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
            const itemWidth = 300; 
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
             className="flex-shrink-0 min-w-[150px] sm:min-w-[200px] md:min-w-[250px] max-w-[85vw] rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden scroll-snap-align-start">
            <div className="w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
              <img src={n.image} alt={n.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500">Social Media</div>
              <div className="mt-1 text-xs sm:text-sm font-semibold truncate" style={{ color: BRAND_DARK }}>{n.title}</div>
              {n.teaser && <div className="mt-1 text-xs sm:text-xs text-slate-600 line-clamp-2">{n.teaser}</div>}
            </div>
          </a>
        ))}
        {items.map((n, i) => (
          <a key={`dup-${i}`}
             href={n.slug}
             target="_blank"
             rel="noopener noreferrer"
             className="flex-shrink-0 min-w-[150px] sm:min-w-[200px] md:min-w-[250px] max-w-[85vw] rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden scroll-snap-align-start">
            <div className="w-full h-24 sm:h-28 md:h-32 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
              <img src={n.image} alt={n.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-3 sm:p-4">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500">Social Media</div>
              <div className="mt-1 text-xs sm:text-sm font-semibold truncate" style={{ color: BRAND_DARK }}>{n.title}</div>
              {n.teaser && <div className="mt-1 text-xs sm:text-xs text-slate-600 line-clamp-2">{n.teaser}</div>}
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <main className={`pt-12 md:pt-16 flex min-h-screen bg-white font-sans`}>
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex fixed left-0 top-16 w-48 h-screen bg-[#0F172A] border-r border-white/20 p-3 overflow-y-auto shadow-xl"
        >
          <div>
            <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3">On This Page</h3>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col gap-3"
            >
              {sidebarItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setSidebarOpen(false); item.action(); }}
                  transition={{ type: "spring", stiffness: 300 }}
                  variants={itemVariants}
                  className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-white transition border-b border-white/20 hover:border-white/50"
                  whileHover={{ scale: 1.05, y: -1, color: "#ffffff" }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                    <item.icon size={14} />
                  </div>
                  {item.text}
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </motion.aside>
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={sidebarOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed md:hidden left-0 top-16 w-64 h-screen bg-[#0F172A] border-r border-white/20 p-3 overflow-y-auto shadow-xl z-50`}
        >
          <div>
            <h3 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3">On This Page</h3>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col gap-3"
            >
              {sidebarItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  onClick={(e) => { e.preventDefault(); item.action(); setSidebarOpen(false); }}
                  transition={{ type: "spring", stiffness: 300 }}
                  variants={itemVariants}
                  className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-white transition border-b border-white/20 hover:border-white/50"
                  whileHover={{ scale: 1.05, y: -1, color: "#ffffff" }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                    <item.icon size={14} />
                  </div>
                  {item.text}
                </motion.a>
              ))}
            </motion.nav>
          </div>
        </motion.aside>
        <div className="flex-1 md:ml-48 relative min-h-[calc(100vh-4rem)] p-6 max-w-full overflow-x-hidden">
          <div className="md:hidden fixed top-16 left-4 z-50">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
          <motion.section {...fadeInUp} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            <motion.img
              src={asset("assets/campus.jpg")}
              alt="Informatics campus exterior"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
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
                        <motion.p variants={paragraphVariants} className="mb-6">
                          Our story began in 1983 in Singapore, when Informatics was founded to open doors for a
                          new generation of IT professionals. A decade later, in 1993, Leonardo “Leo” Riingen brought
                          that same vision to the Philippines. What started as one computer school in Manila has
                          since grown into a nationwide network of colleges and training centers, helping
                          thousands of Filipinos build brighter futures in IT and Business. In the early 2000s, we
                          introduced Purple Train, one of the first digital learning platforms in the country, proving
                          that education could be flexible, accessible, and ahead of its time.</motion.p>

                        <motion.p variants={paragraphVariants}>
                          Now, more than 30 years later, Informatics continues to move forward with the same
                          passion—to equip students and professionals with the skills they need to thrive in a
                          changing world. Whether through Senior High, Diploma and Degree programs, or short,
                          practical Informatics Microcredential Courses (IMC) for working professionals, our
                          mission has never changed: to empower Filipinos with learning that is future-ready,
                          meaningful, and built to last.</motion.p>

                        </motion.div>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2">
                      <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                          <img src={asset("assets/ourstory.jpg")} alt="Informatics Campus" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          </section>
          <div className="text-center mb-12 relative z-10 py-8 bg-white">
            <motion.h2 id="the-future-were-building"
              className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ color: BRAND_DARK }}
            >
              <span>The Future </span>
              <span style={{ color: "#0097FF" }}>We're Building</span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The core principles that guide Informatics Philippines in empowering Filipinos through technology education and innovation.
            </motion.p>
          </div>
          <section className="py-8 md:py-12 relative overflow-hidden" id="our-mission-vision">
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0"
                style={{ backgroundImage: `url(${asset("assets/missionvision1.jpg")})`, backgroundSize: 'cover', backgroundPosition: 'center', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3d0a0a]/95 to-[#3d0a0a]/80"></div>
              </motion.div>
              <motion.div
                className="absolute inset-0"
                style={{ backgroundImage: `url(${asset("assets/missionvision.jpg")})`, backgroundSize: 'cover', backgroundPosition: 'center', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-[#001F3F]/95 to-[#001F3F]/80"></div>
              </motion.div>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <Container className="relative z-10">
              <div className="max-w-7xl mx-auto relative min-h-[60vh] flex flex-col justify-center">
                <motion.div
                  className="absolute top-8 left-8 md:top-16 md:left-16 text-white text-left max-w-md"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-blue-300 pb-2">Our Mission</h3>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed font-light">We Help People Learn Technology To Make Their Lives Better.</p>
                </motion.div>
                <motion.div
                  className="absolute bottom-8 right-8 md:bottom-16 md:right-16 text-white text-right max-w-md"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-end mb-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-blue-300 pb-2">Our Vision</h3>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed font-light">We Transform Individuals To Become Successful Innovators By Leveraging The Power Of Technology.</p>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                </motion.div>
              </div>
            </Container>
          </section>
          <section ref={ref} className="py-16 md:py-20" id="our-achievements">
            <motion.div {...fadeInUp}>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    
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

                  <div className="grid lg:grid-cols-2 gap-0 items-stretch mb-8">
                    <div className="flex flex-col justify-center space-y-8 bg-[#001F3F] p-8 rounded-lg">
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
                            <h3 className="text-lg font-bold mb-2 text-white">
                              {value.title}
                            </h3>
                            <p className="text-sm text-white leading-relaxed">
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
                        Since 1993, Leonardo “Leo” Riingen has made
                        technology education more accessible to Filipinos.
                        Inspired by his studies in the U.K., he introduced
                        ladderized IT programs that provided skills at every
                        stage, and even brought IT learning into malls to make
                        it practical and within reach. He also pushed for training
                        tailored to companies and government, keeping
                        education aligned with industry needs.                      
                        </p>

                        <p>
                        Through his vision, Informatics has grown into more
                        than a school. It is a platform that helps Filipinos build
                        skills for the digital age and prepares them not only for
                        work, but also for leadership in a changing world.
                        </p>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className="relative">
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <img src={asset("assets/ourFounder.jpg")} alt="Founder Leonardo Riingen" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            </motion.div>
          </section>
          <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-slate-50/50" id="leadership-and-legacy">
            <motion.div>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-8">

                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                    <span style={{ color: BRAND_DARK }}>Our </span>
                    <span style={{ color: "#0097FF" }}>Achievements</span>
                  </h2>
                    <p className="text-base text-slate-600 max-w-3xl mx-auto">
                      A journey of excellence, innovation, and commitment to educational transformation
                    </p>
                  </div>

                  <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {(() => {
                      const startIndex = currentPage * 3;
                      const endIndex = startIndex + 3;
                      const pageMilestones = milestones.slice(startIndex, endIndex);
                      return pageMilestones.map((milestone, index) => (
                        <motion.div
                          key={startIndex + index}
                          className="group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 border border-slate-100"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="p-2 sm:p-3">
                            <div className="mb-2">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                                  <Award size={14} className="sm:w-4 sm:h-4" style={{ color: BRAND_BLUE }} />
                                </div>
                                <div>
                                  <h3 className="text-sm sm:text-base font-bold mb-0.5" style={{ color: BRAND_DARK }}>
                                    {milestone.title}
                                  </h3>
                                  <div className="text-xs font-bold text-slate-500 mb-1">{milestone.year}</div>
                                  <p className="text-xs text-slate-600">{milestone.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ));
                    })()}
                  </div>

                  <div className="flex justify-center gap-2 mt-8">
                    {[0, 1, 2].map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-blue-600 scale-125'
                            : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to page ${page + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Container>
            </motion.div>
          </section>
          <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-slate-50/50" id="campuses">
            <Container>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4">
                    <span style={{ color: BRAND_DARK }}>Our </span>
                    <span style={{ color: "#0097FF" }}>Campuses</span>
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Discover our nationwide network of campuses dedicated to providing quality IT education.
                  </p>
                </div>

                <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {campuses.map((campus, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative overflow-hidden h-32 sm:h-40 md:h-48">
                        <img
                          src={campus.image}
                          alt={`${campus.name} Campus`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3">
                          <h3 className="text-sm sm:text-base font-bold text-white mb-1">{campus.name}</h3>
                          <p className="text-xs text-white/80">{campus.address}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
          <section id="community-engagements" className="py-16 md:py-24" style={{ background: BRAND_LIGHT }}>
            <Container>
              <div className="text-center mb-12">
                <span
                  className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase mb-2"
                  style={{ color: BRAND_BLUE }}
                >
                </span>
                <motion.h2 {...fadeInUp} className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4">
                  <span style={{ color: BRAND_DARK }}>Community </span>
                  <span style={{ color: "#0097FF" }}>Engagements</span>
                </motion.h2>
              </div>
              <div className="mt-8 relative overflow-hidden">
                <div className="news-marquee">
                  <MarqueeGroup items={facebookItems} />
                </div>
              </div>
            </Container>
          </section>
          <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50">
            <motion.div {...fadeInUp}>
              <Container>
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                   
                    <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight mb-4">
                      <span style={{ color: BRAND_DARK }}>Explore Careers at </span>
                      <span style={{ color: "#0097FF" }}>Informatics</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                      Join our team and be part of a dynamic organization committed to transforming lives through technology education.
                    </p>
                  </div>

                  <div className="text-center">
                    <motion.a
                      href="https://ph.jobstreet.com/companies/informatics-college-168552199237399/jobs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Briefcase size={24} />
                      View Open Positions
                    </motion.a>
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
