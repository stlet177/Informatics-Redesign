// Central site content configuration for navigation, programs, admissions, partners, and socials
// This is config-first so pages/components can reference consistent data.

import { asset } from "./assets";

export const navConfig = {
  primary: [
    { label: "Home", href: "#/" },
    { label: "About Informatics", href: "#/about" },
    { label: "Programs", href: "#/programs" },
    { label: "Microcredentials", href: "https://imc.informatics.edu.ph/", external: true },
    { label: "Admissions", href: "#/admissions" },
  ],
  // Dropdowns for About + Programs
  about: [
    { label: "Who is Informatics", href: "#/about#glance" },
    { label: "Info by the Numbers", href: "#/about#numbers" },
    { label: "Partners", href: "#/about#partners" },
    { label: "Explore Informatics", href: "#/about#explore" },
    { label: "FAQs", href: "#/about#faqs" },
    { label: "Privacy Policy", href: "#/about#privacy" },
    { label: "Contact Us", href: "#/contact" },
  ],
  programs: [
    { label: "Senior High School Tracks", href: "#/programs/shs" },
    { label: "Certificate Programs", href: "#/programs#certificates" },
    { label: "Short Courses (IMC)", href: "https://imc.informatics.edu.ph/", external: true },
    { label: "ION-LMS", href: "https://ion.informatics.edu.ph/login/index.php", external: true },
  ],
};

export const programsConfig = {
  academic: [
    {
      key: "it",
      title: "BS Information Technology",
      blurb: "Core CS/IT foundations, software engineering, cloud, and security.",
      usp: ["3 years", "IT infrastructure"],
      route: "#/programs/college/bsit",
      enrollmentLink: "#/contact",
    },
    {
      key: "cs",
      title: "BS Computer Science",
      blurb: "Computation, algorithms, AI/ML foundations, and advanced software.",
      usp: ["3 years", "Algorithms & software"],
      route: "#/programs/college/bscs",
      enrollmentLink: "#/contact",
    },
    {
      key: "is",
      title: "BS Information Systems",
      blurb: "Business process analysis, data systems, and decision support.",
      usp: ["3 years", "IS/BA focus"],
      route: "#/programs/college/bsis",
      enrollmentLink: "#/contact",
    },
    {
      key: "ba",
      title: "BS Business Administration",
      blurb: "Management foundations and marketing leadership for modern enterprises.",
      usp: ["3 years", "Marketing Management"],
      route: "#/programs/college/bsba",
      enrollmentLink: "#/contact",
    },
    {
      key: "oa",
      title: "BS Office Administration",
      blurb: "Digital productivity tools and office leadership for tech-enabled workplaces.",
      usp: ["3 years", "Digital Productivity"],
      route: "#/programs/college/bsoa",
      enrollmentLink: "#/contact",
    },
  ],
  certificates: [
    {
      key: "tesda",
      title: "TESDA Certificates",
      blurb: "Competency-based, industry-aligned certifications.",
      enrollmentLink: "#/contact",
    },
    {
      key: "diploma",
      title: "Diploma Programs",
      blurb: "Specialized diploma tracks for job-ready skills.",
      enrollmentLink: "#/contact",
    },
    {
      key: "short",
      title: "Short Courses",
      blurb: "Upskill fast; redirect to IMC site for full info.",
      externalLink: "https://imc.informatics.edu.ph/",
    },
  ],
};

export const admissionsConfig = {
  guidelines: [
    "Complete the online application form and submit requirements.",
    "Take the entrance assessment; receive advising based on results.",
    "Confirm slot and settle initial fees before enrollment cutoff.",
  ],
  scholarships: [
    { title: "Academic Excellence", desc: "For top-performing applicants.", cta: "Apply for scholarship", href: "#/contact" },
    { title: "Financial Assistance", desc: "Need-based support programs.", cta: "Inquire now", href: "#/contact" },
    { title: "Partner Grants", desc: "Supported by industry partners.", cta: "See if you qualify", href: "#/contact" },
  ],
  calendars: {
    shs: { label: "Senior High School", url: "#" },
    he: { label: "Higher Education", url: "#" },
  },
  imcRegistrationUrl: "https://imc.informatics.edu.ph/",
};

export const partnersConfig = [
  { name: "Cybersecurity Partner", src: asset("assets/partner-cybersecurity.png"), url: "#", alt: "Cybersecurity Partner" },
  { name: "PhilSmile", src: asset("assets/partner-philsmile.png"), url: "#", alt: "PhilSmile" },
  { name: "MS Imagine Academy", src: asset("assets/partner-ms-imagine.png"), url: "#", alt: "Microsoft Imagine Academy" },
  { name: "Percipio", src: asset("assets/partner-percipio.png"), url: "#", alt: "Percipio" },
  { name: "Google for Education", src: asset("assets/partner-google-edu.png"), url: "#", alt: "Google for Education" },
  { name: "CompTIA", src: asset("assets/partner-comptia.jpg"), url: "#", alt: "CompTIA" },
];

export const socialsConfig = [
  { platform: "Facebook", url: "https://www.facebook.com/informaticsph", ariaLabel: "Facebook" },
  { platform: "Instagram", url: "https://www.instagram.com/informaticsph", ariaLabel: "Instagram" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/informatics-philippines/", ariaLabel: "LinkedIn" },
  { platform: "YouTube", url: "https://www.youtube.com/@informaticsph", ariaLabel: "YouTube" },
  { platform: "Twitter", url: "https://twitter.com/informaticsph", ariaLabel: "Twitter" },
];

export default {
  nav: navConfig,
  programs: programsConfig,
  admissions: admissionsConfig,
  partners: partnersConfig,
  socials: socialsConfig,
};
