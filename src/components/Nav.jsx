import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import Container from "./Container";
import { BRAND_DARK } from "../lib/brand";
import { INFO_LOGO, PLACEHOLDER_IMG } from "../lib/assets";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news-events" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },

  {
    label: "ION-LMS (For Students)",
    href: "https://ion.informatics.edu.ph",
    external: true,
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const { body } = document;
    if (!body) return;
    const original = body.style.overflow;
    if (mobileOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = original || "";
    }
    return () => {
      body.style.overflow = original || "";
    };
  }, [mobileOpen]);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    if (!searchValue.trim()) return;
    window.location.assign(`/search?query=${encodeURIComponent(searchValue.trim())}`);
    setSearchOpen(false);
    setMobileSearchOpen(false);
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "backdrop-blur bg-white/90 shadow" : "bg-white"
      }`}
    >
      <Container className="flex items-center justify-between gap-6 py-3">
        <a href="#/" className="flex items-center" aria-label="Informatics Philippines">
          <img
            src={INFO_LOGO}
            alt="Informatics Philippines logo"
            className="h-10 w-auto md:h-11"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = PLACEHOLDER_IMG;
            }}
          />
        </a>
        <nav
          className="hidden lg:flex items-center gap-6 text-sm font-semibold"
          aria-label="Main navigation"
          style={{ color: BRAND_DARK }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="nav-glow transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              {link.label}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setSearchOpen((prev) => !prev);
                setMobileSearchOpen(false);
              }}
              className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:border-sky-400 hover:text-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              aria-label="Open search"
              aria-expanded={searchOpen}
            >
              <Search size={18} />
            </button>
            {searchOpen ? (
              <form
                onSubmit={handleSubmitSearch}
                role="search"
                aria-label="Site search"
                className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg"
              >
                <label htmlFor="desktop-search" className="sr-only">
                  Search
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="desktop-search"
                    ref={searchInputRef}
                    type="search"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    className="flex-1 h-10 rounded-full border border-slate-300 px-3 text-sm focus:border-sky-500 focus:outline-none"
                    placeholder="Search"
                    onBlur={() => {
                      window.setTimeout(() => setSearchOpen(false), 150);
                    }}
                  />
                  <button
                    type="submit"
                    className="flex h-10 items-center justify-center rounded-full bg-slate-900 px-4 text-xs font-semibold uppercase tracking-wide text-white"
                  >
                    Go
                  </button>
                </div>
              </form>
            ) : null}
          </div>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => {
              setMobileSearchOpen((prev) => !prev);
              setSearchOpen(false);
            }}
            className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:border-sky-400 hover:text-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            aria-label="Toggle mobile search"
            aria-expanded={mobileSearchOpen}
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileSearchOpen(false);
              setMobileOpen(true);
            }}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            Menu
          </button>
        </div>
      </Container>
      {mobileSearchOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-3 lg:hidden">
          <form onSubmit={handleSubmitSearch} role="search" aria-label="Mobile site search" className="flex items-center gap-3">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
           <input
              id="mobile-search"
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              className="flex-1 h-10 rounded-full border border-slate-300 px-4 text-sm focus:border-sky-500 focus:outline-none"
              placeholder="Search"
            />
            <button
              type="submit"
              className="flex h-10 items-center justify-center rounded-full bg-slate-900 px-5 text-xs font-semibold uppercase tracking-wide text-white"
            >
              Go
            </button>
          </form>
        </div>
      ) : null}
      {mobileOpen ? (
        <div className="lg:hidden" id="mobile-navigation">
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 z-50 w-72 max-w-full bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <span className="text-base font-semibold" style={{ color: BRAND_DARK }}>
                Navigation
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Close
              </button>
            </div>
            <nav
              className="flex flex-col gap-2 px-6 py-6 text-sm font-semibold"
              aria-label="Mobile navigation"
              style={{ color: BRAND_DARK }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="nav-glow rounded-full px-4 py-2 transition hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
