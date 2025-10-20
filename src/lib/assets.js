
export const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

export const resolveAsset = (p) => {
  if (!p) return p;
  if (/^(https?:|data:)/i.test(p)) return p;
  const base = import.meta.env.BASE_URL || "/";
  if (p.startsWith(base)) return p;
  return asset(p);
};


export const INFO_LOGO = asset("assets/informatics-logo.png");
export const CAMPUS_IMG = asset("assets/campus2.jpg");


import { BRAND_BLUE } from "./brand";
export const PLACEHOLDER_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='320' height='120'>
      <rect width='100%' height='100%' fill='${BRAND_BLUE}'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
            font-family='Arial, Helvetica, sans-serif' font-size='18' fill='white'>
        Image not available
      </text>
    </svg>
  `);


export const PARTNERS = [
  { src: asset("assets/partner-cybersecurity.png"), alt: "Cybersecurity Partner" },
  { src: asset("assets/partner-philsmile.png"), alt: "PhilSmile" },
  { src: asset("assets/partner-ms-imagine.png"), alt: "Microsoft Imagine Academy" },
  { src: asset("assets/partner-percipio.png"), alt: "Percipio" },
  { src: asset("assets/partner-google-edu.png"), alt: "Google for Education" },
  { src: asset("assets/partner-comptia.jpg"), alt: "CompTIA" },
];
