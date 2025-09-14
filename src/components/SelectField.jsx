import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { BRAND_BLUE, BRAND_DARK } from "../lib/brand";

export default function SelectField({ label, options, value: controlledValue, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const [uncontrolled, setUncontrolled] = useState(controlledValue === undefined);
  const [internalValue, setInternalValue] = useState(() => (controlledValue ?? (options?.[0]?.label ?? options?.[0] ?? "")));
  const ref = useRef(null);

  const getLabel = (opt) => (typeof opt === 'object' && opt !== null ? opt.label : opt);
  const getKey = (opt) => (typeof opt === 'object' && opt !== null ? opt.key : opt);
  const currentLabel = (() => {
    const val = uncontrolled ? internalValue : controlledValue;
    const match = options?.find((o) => getKey(o) === val || getLabel(o) === val);
    return match ? getLabel(match) : (val || placeholder || "Select");
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
            {options.map((opt, idx) => (
              <li
                key={idx}
                role="option"
                aria-selected={(uncontrolled ? internalValue === getLabel(opt) : controlledValue === getKey(opt))}
              >
                <button
                  type="button"
                  onClick={() => {
                    const nextKey = getKey(opt);
                    if (uncontrolled) setInternalValue(getLabel(opt));
                    if (onChange) onChange(nextKey);
                    setOpen(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-50"
                  style={{ color: BRAND_DARK }}
                >
                  <span>{getLabel(opt)}</span>
                  {(uncontrolled ? internalValue === getLabel(opt) : controlledValue === getKey(opt)) && <Check size={16} style={{ color: BRAND_BLUE }} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

