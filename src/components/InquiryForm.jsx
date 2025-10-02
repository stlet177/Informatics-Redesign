import { BRAND_BLUE, BRAND_DARK } from "../lib/brand";
import SelectField from "./SelectField";

export default function InquiryForm() {

  return (
    <form className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5">
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
      <button type="submit" className="simple-btn simple-btn--primary mt-5">
        Send inquiry
      </button>
    </form>
  );
}
