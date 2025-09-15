import { BRAND_DARK, BRAND_BLUE } from "../lib/brand";

export default function FeatureStats({ items = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {items.map((it, i) => (
        <div key={i} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm">
          <div className="text-2xl font-extrabold" style={{ color: BRAND_BLUE }}>{it.value}</div>
          <div className="mt-1 text-sm" style={{ color: BRAND_DARK }}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}

