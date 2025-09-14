// Informatics Philippines - Modularized React App
// Components split for readability and maintainability

import { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProgramIT from "./pages/ProgramIT";
import ProgramCS from "./pages/ProgramCS";
import ProgramIS from "./pages/ProgramIS";
import ProgramBA from "./pages/ProgramBA";
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

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global subtle geometry background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{
        backgroundImage: 'radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-25" style={{
        backgroundImage:
          `radial-gradient(circle at 10% 15%, ${BRAND_BLUE}10 0, transparent 28%),` +
          `radial-gradient(circle at 92% 12%, ${BRAND_BLUE}12 0, transparent 34%),` +
          `radial-gradient(circle at 72% 88%, ${BRAND_BLUE}10 0, transparent 28%)`,
      }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 20px)',
      }} />

      {/* Foreground content */}
      <div className="relative z-10">
        <Nav />
        <SocialBar />
        {route.startsWith("#/programs/information-technology") ? (
          <ProgramIT />
        ) : route.startsWith("#/programs/computer-science") ? (
          <ProgramCS />
        ) : route.startsWith("#/programs/information-systems") ? (
          <ProgramIS />
        ) : route.startsWith("#/programs/business-administration") ? (
          <ProgramBA />
        ) : (
          <Home />
        )}
        <Footer />
      </div>
    </div>
  );
}
