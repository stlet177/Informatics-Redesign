import { BRAND_DARK } from "../lib/brand";
import { asset, PLACEHOLDER_IMG } from "../lib/assets";

export default function NewsCard({ item }) {
  const href = `#/news/${item.slug}`;
  const img = asset((item.image || '').replace(/^\//, ''));
  return (
    <a href={href} className="group rounded-2xl bg-white ring-1 ring-black/10 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-[16/9] w-full bg-slate-100">
        <img
          src={img}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PLACEHOLDER_IMG; }}
        />
      </div>
      <div className="p-4">
        <div className="text-xs uppercase tracking-wide text-slate-500">{formatDate(item.date)}</div>
        <h3 className="mt-1 text-base font-semibold group-hover:underline decoration-[color:var(--brand-blue)] underline-offset-4" style={{ color: BRAND_DARK }}>{item.title}</h3>
        {item.teaser && <p className="mt-2 text-sm text-slate-600 line-clamp-2">{item.teaser}</p>}
      </div>
    </a>
  );
}

function formatDate(d) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return d;
  }
}

