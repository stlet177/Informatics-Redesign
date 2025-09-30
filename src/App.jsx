// Informatics Philippines - Modularized React App
// Components split for readability and maintainability

import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProgramIT from "./pages/ProgramIT";
import ProgramCS from "./pages/ProgramCS";
import ProgramIS from "./pages/ProgramIS";
import ProgramBA from "./pages/ProgramBA";
import About from "./pages/About";
import Campuses from "./pages/Campuses";
import Careers from "./pages/Careers";
import ProgramsIndex from "./pages/ProgramsIndex";
import Admissions from "./pages/Admissions";
import NewsIndex from "./pages/NewsIndex";
import NewsDetail from "./pages/NewsDetail";
import ContactPage from "./pages/ContactPage";
import SHS from "./pages/SHS";
import TuitionAid from "./pages/TuitionAid";
import Scholarships from "./pages/Scholarships";
import AdmissionsFAQs from "./pages/AdmissionsFAQs";
import ExplorePrograms from "./pages/ExplorePrograms";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import { BRAND_BLUE } from "./lib/brand";

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash || "#/");
  const prevRoute = useRef(route);

  useEffect(() => {
    const onHash = () => {
      const next = window.location.hash || "#/";
      setRoute(next);
      const prev = prevRoute.current;
      const navigatedBetweenPages = prev.startsWith("#/") !== next.startsWith("#/") ||
        prev.startsWith("#/programs/") || next.startsWith("#/programs/");
      if (navigatedBetweenPages) window.scrollTo({ top: 0, behavior: "auto" });
      prevRoute.current = next;
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Expose brand color as CSS variable for Tailwind utility hooks
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `:root{--brand-blue:${BRAND_BLUE};}`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Basic SEO title per route
  useEffect(() => {
    const base = "Informatics Philippines";
    const t = titleForRoute(route);
    document.title = t ? `${t} · ${base}` : base;
  }, [route]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Large light-gray geometric shapes (site background) */}
      <div aria-hidden className="pointer-events-none absolute z-0" style={{
        left: '-220px', top: '12%', width: '720px', height: '720px', opacity: 0.16,
        background: 'linear-gradient(135deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.08) 100%)',
        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
        filter: 'blur(1.2px)'
      }} />
      <div aria-hidden className="pointer-events-none absolute z-0" style={{
        right: '-200px', bottom: '10%', width: '620px', height: '620px', opacity: 0.16,
        background: 'linear-gradient(135deg, rgba(148,163,184,0.16) 0%, rgba(148,163,184,0.08) 100%)',
        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
        transform: 'rotate(18deg)',
        filter: 'blur(1.2px)'
      }} />

      {/* Foreground content */}
      <div className="relative z-10">
        <Nav />
        <SocialBar />
        {route.startsWith("#/news/") ? (
          <NewsDetail slug={route.replace(/^#\/news\//, "")} />
        ) : route.startsWith("#/news") ? (
          <NewsIndex />
        ) : route.startsWith("#/about") ? (
          <About />
        ) : route.startsWith("#/campuses") ? (
          <Campuses />
        ) : route.startsWith("#/careers") ? (
          <Careers />
        ) : route.startsWith("#/programs/shs") ? (
          <SHS />
        ) : route.startsWith("#/programs/information-technology") ? (
          <ProgramIT />
        ) : route.startsWith("#/programs/computer-science") ? (
          <ProgramCS />
        ) : route.startsWith("#/programs/information-systems") ? (
          <ProgramIS />
        ) : route.startsWith("#/programs/business-administration") ? (
          <ProgramBA />
        ) : route.startsWith("#/programs/explore") ? (
          <ExplorePrograms />
        ) : route.startsWith("#/programs") ? (
          <ProgramsIndex />
        ) : route.startsWith("#/admissions/tuition") ? (
          <TuitionAid />
        ) : route.startsWith("#/admissions/scholarships") ? (
          <Scholarships />
        ) : route.startsWith("#/admissions/faqs") ? (
          <AdmissionsFAQs />
        ) : route.startsWith("#/admissions") ? (
          <Admissions />
        ) : route.startsWith("#/contact") ? (
          <ContactPage />
        ) : (
          <Home />
        )}
        <Footer />
      </div>
    </div>
  );
}

function titleForRoute(route) {
  if (!route) return "";
  if (route.startsWith("#/news/")) return "News";
  if (route.startsWith("#/news")) return "News & Events";
  if (route.startsWith("#/about")) return "About Informatics";
  if (route.startsWith("#/campuses")) return "Our Campuses";
  if (route.startsWith("#/careers")) return "Careers";
  if (route.startsWith("#/programs/shs")) return "Senior High School Tracks";
  if (route.startsWith("#/programs/information-technology")) return "BS Information Technology";
  if (route.startsWith("#/programs/computer-science")) return "BS Computer Science";
  if (route.startsWith("#/programs/information-systems")) return "BS Information Systems";
  if (route.startsWith("#/programs/business-administration")) return "BS Business Administration";
  if (route.startsWith("#/programs/explore")) return "Explore Programs";
  if (route.startsWith("#/programs")) return "Programs";
  if (route.startsWith("#/admissions/tuition")) return "Tuition & Financial Aid";
  if (route.startsWith("#/admissions/scholarships")) return "Scholarships";
  if (route.startsWith("#/admissions/faqs")) return "Admissions FAQs";
  if (route.startsWith("#/admissions")) return "Admissions";
  if (route.startsWith("#/contact")) return "Contact Us";
  return "Home";
}
