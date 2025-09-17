import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { BRAND_BLUE, BRAND_DARK } from "../lib/brand";

export default function SelectField({ label, options = [], value: controlledValue, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const normalizedOptions = useMemo(() => {
    return options.map((opt) => {
      if (typeof opt === "object" && opt !== null) {
        const value = opt.value ?? opt.key ?? opt.id ?? opt.label ?? "";
        const labelText = opt.label ?? String(value);
        return { value, label: labelText };
      }
      return { value: opt, label: String(opt) };
    });
  }, [options]);

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(() => (
    !isControlled ? (normalizedOptions[0]?.value ?? "") : ""
  ));

  useEffect(() => {
    if (!isControlled && normalizedOptions.length) {
      const exists = normalizedOptions.some((opt) => opt.value === internalValue);
      if (!exists) setInternalValue(normalizedOptions[0]?.value ?? "");
    }
  }, [internalValue, isControlled, normalizedOptions]);

  const selectedValue = isControlled ? controlledValue : internalValue;
  const currentLabel = (() => {
    const match = normalizedOptions.find((opt) => opt.value === selectedValue || opt.label === selectedValue);
    if (match) return match.label;
    return selectedValue || placeholder || "Select";
  })();

  useEffect(() => {
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium" style={{ color: BRAND_DARK }}>{label}</label>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="mt-1 w-full inline-flex items-center justify-between rounded-xl border px-4 py-2 bg-transparent text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)] hover:border-[var(--brand-blue)] transition-all duration-200"
        style={{ borderColor: "#E2E8F0" }}
      >
        <span className={!currentLabel ? 'text-slate-500' : ''}>{currentLabel}</span>
        <ChevronDown size={16} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="listbox"
            className="absolute left-0 right-0 top-full z-30 mt-2 max-h-56 w-full overflow-auto rounded-xl border bg-white p-1 text-sm shadow-lg ring-1 ring-black/5"
            style={{ borderColor: "#E2E8F0" }}
          >
            {normalizedOptions.map((opt, idx) => (
              <li
                key={opt.value ?? idx}
                role="option"
                aria-selected={(isControlled ? controlledValue === opt.value : internalValue === opt.value)}
              >
                <button
                  type="button"
                  onClick={() => {
                    const nextValue = opt.value;
                    if (!isControlled) setInternalValue(nextValue);
                    if (onChange) onChange(nextValue);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-50"
                  style={{ color: BRAND_DARK }}
                >
                  <span>{opt.label}</span>
                  {(isControlled ? controlledValue === opt.value : internalValue === opt.value) && <Check size={16} style={{ color: BRAND_BLUE }} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
