import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BRAND_BLUE, BRAND_DARK } from "../lib/brand";
import Container from "./Container";
import SelectField from "./SelectField";
import BranchMap from "../BranchMap";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { fadeInUp } from "../lib/variants";

export default function Contact() {
  const BRANCH_CONTACTS = {
    manila: { label: "Manila", registrar: "registrar_manila@informatics.edu.ph", cashier: "cashier_manila@informatics.edu.ph", phone: "09453210716", address: "2070 BDO Bldg. Recto Ave Quiapo, Manila", coords: { lat: 14.601307814946743, lng: 120.98930082652203 } },
    ng: { label: "Northgate", registrar: "registrar_ng@informatics.edu.ph", cashier: "cashier_ng@informatics.edu.ph", phone: "09606114435", address: "Indo China Drive, Northgate Cyberzone Filinvest Corporate City, Alabang Muntinlupa City, Metro Manila", coords: { lat: 14.42586527085314, lng: 121.04015885666861 } },
    cavite: { label: "Cavite", registrar: "registrar_cavite@informatics.edu.ph", cashier: "cashier_cavite@informatics.edu.ph", phone: "(Landline) 046-4712310", address: "Informatics Bldg. E. Aguinaldo Highway, Tanzang Luma V, Imus City, Cavite", coords: { lat: 14.392243795079663, lng: 120.94000059901043 } },
    baguio: { label: "Baguio", registrar: "registrar_baguio@informatics.edu.ph", cashier: "cashierbaguio@informatics.edu.ph", phone: "09175753237", address: "3/F Decibar Bldg., #65 Lower Bonifacio St., Baguio City", coords: { lat: 16.41810002387948, lng: 120.59632471103312 } },
    cebu: { label: "Cebu", registrar: "registrar_conso@informatics.edu.ph", cashier: "N/A", phone: "09178364963", address: "National Highway, Eskina Jugan, Pitogo Consolacion, Cebu City", coords: { lat: 10.31008717904268, lng: 123.89518818022984 } },
    cdo: { label: "CDO", registrar: "registrar.cdo@informatics.edu.ph", cashier: "cashier.cdo@informatics.edu.ph", phone: "N/A", address: "2nd level, Stary Bldg. Max Suniel St., Carmen, Cagayan De Oro", coords: { lat: 8.482402863722893, lng: 124.63492003787852 } },
    conso: { label: "Consolidated", registrar: "registrar_conso@informatics.edu.ph", cashier: "cashier_conso@informatics.edu.ph", phone: null, address: null, coords: null },
  };

  const branchOptions = Object.entries(BRANCH_CONTACTS).map(([key, v]) => ({ key, label: v.label }));
  const [branch, setBranch] = useState("");
  const [copiedKey, setCopiedKey] = useState("");
  const contactsRef = useRef(null);

  const selected = branch ? BRANCH_CONTACTS[branch] : null;

  const copyToClipboard = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1400);
    } catch {}
  };

  const isAvailable = (v) => v && v !== "N/A";
  const handleBranchChange = (value) => setBranch(value);

  const mapUrlFor = (key) => {
    const entry = key ? BRANCH_CONTACTS[key] : null;
    if (entry?.coords && typeof entry.coords.lat === 'number' && typeof entry.coords.lng === 'number') {
      const { lat, lng } = entry.coords;
      return `https://www.google.com/maps?q=loc:${lat},${lng}&z=17&output=embed`;
    }
    if (entry?.address) {
      const a = encodeURIComponent(entry.address);
      return `https://www.google.com/maps?q=${a}&z=17&output=embed`;
    }
    const label = entry?.label || "Philippines";
    const q = encodeURIComponent(`Informatics ${label} campus`);
    return `https://www.google.com/maps?q=${q}&output=embed`;
  };

  const overlayInfoFor = (key) => {
    const entry = key ? BRANCH_CONTACTS[key] : null;
    const name = entry?.label || "Informatics Philippines";
    let line = "";
    if (entry?.address) line = entry.address;
    else if (entry?.coords) line = `${entry.coords.lat.toFixed(6)}, ${entry.coords.lng.toFixed(6)}`;
    return { name, line };
  };

  const mapsLinkFor = (key) => {
    const entry = key ? BRANCH_CONTACTS[key] : null;
    if (entry?.coords && typeof entry.coords.lat === 'number' && typeof entry.coords.lng === 'number') {
      const { lat, lng } = entry.coords;
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    }
    if (entry?.address) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(entry.address)}`;
    const label = entry?.label || 'Informatics Philippines';
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Informatics ' + label + ' campus')}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 overflow-x-hidden">
      <Container className="grid gap-6 md:gap-10 md:grid-cols-2">
        {/* Mobile heading + blurb at the top */}
        <div className="md:hidden order-1">
          <h2 className="text-2xl font-semibold" style={{color: BRAND_DARK}}>Get in touch</h2>
          <p className="mt-3 text-slate-600">Questions about admissions, tuition, or programs? Our team will reach out within 1-2 business days.</p>
        </div>

        <motion.div {...fadeInUp} className="order-3 md:order-1 px-0">
          <h2 className="hidden md:block text-2xl md:text-3xl font-semibold" style={{color: BRAND_DARK}}>Get in touch</h2>
          <p className="hidden md:block mt-3 text-slate-600">Questions about admissions, tuition, or programs? Our team will reach out within 1-2 business days.</p>

          <div className="mt-8">
            <div className="text-sm font-semibold flex items-center gap-2" style={{color: BRAND_DARK}}>
              <Mail size={16} style={{ color: BRAND_BLUE }} /> Emails For Your Concern
            </div>
            <div className="mt-2 text-sm text-slate-600">Pick your branch to see Registrar, Cashier, and Phone contacts. Tap to copy.</div>

            <div className="mt-4 grid gap-3 sm:flex sm:items-end">
              <div className="w-full sm:w-auto min-w-[12rem]">
                <SelectField label="Branch" options={branchOptions} value={branch} onChange={handleBranchChange} placeholder="Select a branch." />
              </div>
            </div>

            {/* Contacts + Map */}
            <div className="sm:contents rounded-2xl bg-white ring-1 ring-black/5 p-3 mt-4 space-y-3 sm:space-y-0">
              <div className="grid gap-3 text-sm min-h-[148px]" ref={contactsRef}>
                <div className="rounded-xl bg-white sm:bg-transparent p-3 sm:p-0 ring-1 sm:ring-0 ring-black/5 sm:shadow-none shadow-sm">
                  <div className="font-medium" style={{color: BRAND_DARK}}>Branch Contacts</div>
                  <div className="mt-2 space-y-2">
                    <button type="button" onClick={() => isAvailable(selected?.registrar) && copyToClipboard(selected.registrar, 'reg')} className="flex items-center justify-between gap-3 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99]" style={{ borderColor: '#E2E8F0', color: BRAND_DARK }}>
                      <span className="inline-flex items-center gap-2 shrink-0">{copiedKey === 'reg' ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Mail size={16} style={{ color: BRAND_BLUE }} />} Registrar</span>
                      <span className="truncate select-text min-w-0 flex-1">{selected?.registrar || 'Unavailable'}</span>
                      <span className="text-slate-500 shrink-0">{copiedKey === 'reg' ? 'Copied' : isAvailable(selected?.registrar) ? 'Copy' : ''}</span>
                    </button>
                    <button type="button" onClick={() => isAvailable(selected?.cashier) && copyToClipboard(selected.cashier, 'cash')} className="flex items-center justify-between gap-3 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99]" style={{ borderColor: '#E2E8F0', color: BRAND_DARK }}>
                      <span className="inline-flex items-center gap-2 shrink-0">{copiedKey === 'cash' ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Mail size={16} style={{ color: BRAND_BLUE }} />} Cashier</span>
                      <span className="truncate select-text min-w-0 flex-1">{selected?.cashier || 'Unavailable'}</span>
                      <span className="text-slate-500 shrink-0">{copiedKey === 'cash' ? 'Copied' : isAvailable(selected?.cashier) ? 'Copy' : ''}</span>
                    </button>
                    <button type="button" onClick={() => isAvailable(selected?.phone) && copyToClipboard(selected.phone, 'phone')} className="flex items-center justify-between gap-3 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99]" style={{ borderColor: '#E2E8F0', color: BRAND_DARK }}>
                      <span className="inline-flex items-center gap-2 shrink-0">{copiedKey === 'phone' ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Phone size={16} style={{ color: BRAND_BLUE }} />} Phone</span>
                      <span className="truncate select-text min-w-0 flex-1">{selected?.phone || 'Unavailable'}</span>
                      <span className="text-slate-500 shrink-0">{copiedKey === 'phone' ? 'Copied' : isAvailable(selected?.phone) ? 'Copy' : ''}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative h-[260px] sm:h-[320px] rounded-xl overflow-hidden ring-1 ring-black/5">
                <BranchMap branches={BRANCH_CONTACTS} active={branch} />
                <div className="absolute bottom-2 left-2 right-2 sm:left-2 sm:right-auto max-w-[92%] sm:max-w-md">
                  <div className="inline-flex items-start gap-2 rounded-xl bg-white/90 backdrop-blur px-3 py-2 shadow-md ring-1 ring-black/5">
                    <MapPin size={16} style={{ color: BRAND_BLUE }} />
                    <div>
                      <div className="text-[13px] sm:text-sm font-semibold" style={{ color: BRAND_DARK }}>
                        {overlayInfoFor(branch).name}
                      </div>
                      {overlayInfoFor(branch).line && (
                        <a href={mapsLinkFor(branch)} target="_blank" rel="noopener noreferrer" className="text-[11px] sm:text-xs text-slate-600 underline decoration-dotted hover:decoration-solid break-words">
                          {overlayInfoFor(branch).line}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keep technical support visible */}
            <div className="mt-6">
              <div className="font-medium text-sm" style={{color: BRAND_DARK}}>Technical Support</div>
              <button type="button" onClick={() => copyToClipboard("tech.support@informatics.edu.ph", "tech")} className="mt-1 inline-flex items-center justify-between gap-3 rounded-lg border px-3 py-1.5 hover:bg-slate-50 active:scale-[0.99] text-[13px] sm:text-sm w-full" style={{ borderColor: "#E2E8F0", color: BRAND_DARK }}>
                <span className="inline-flex items-center gap-2 shrink-0">{copiedKey === "tech" ? <Check size={16} style={{ color: BRAND_BLUE }} /> : <Mail size={16} style={{ color: BRAND_BLUE }} />} Tech Support</span>
                <span className="truncate select-text min-w-0 flex-1">tech.support@informatics.edu.ph</span>
                <span className="text-slate-500 shrink-0">{copiedKey === "tech" ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.form {...fadeInUp} className="order-2 md:order-2 rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>First & Last Name</label>
              <input className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="Juan Dela Cruz" />
            </div>
            <div>
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>Contact Number</label>
              <input type="tel" className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="09xx xxx xxxx" />
            </div>
            <SelectField label="Type" options={["New student", "Enrolled student", "Alumni", "Job Applicant", "Other"]} />
            <SelectField label="Concern" options={["Programs/Courses", "Tuition Fee", "Enrollment", "Credentials", "Careers", "Proposals", "Other"]} />
            <div className="md:col-span-2">
              <SelectField label="Preferred Branch" options={["Informatics Manila", "Northgate Alabang", "North Luzon", "South Luzon", "Visayas", "Mindanao", "Others/Any"]} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium" style={{color: BRAND_DARK}}>Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] transition-colors" style={{ borderColor: "#E2E8F0" }} placeholder="Tell us how we can help" />
            </div>
          </div>
          <motion.button type="button" className="mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white shadow-sm" style={{ background: BRAND_BLUE }} whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(0,0,0,0.16)" }} whileTap={{ scale: 0.98 }}>
            Send inquiry
          </motion.button>
        </motion.form>
      </Container>
    </section>
  );
}
