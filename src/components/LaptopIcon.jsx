import { BRAND_BLUE } from "../lib/brand";

export default function LaptopIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke={BRAND_BLUE} strokeWidth="1.5"/>
      <path d="M2 18h20" stroke={BRAND_BLUE} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

