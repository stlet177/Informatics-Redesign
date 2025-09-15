import { BRAND_DARK, BRAND_BLUE } from "../lib/brand";

export default function CalendarList({ calendars = {} }) {
  const entries = Object.entries(calendars);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {entries.map(([key, cal]) => (
        <div key={key} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold" style={{ color: BRAND_DARK }}>{cal.label}</div>
            <div className="text-xs text-slate-600">Academic Calendar</div>
          </div>
          <a href={cal.url || '#'} target={cal.url && cal.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white" style={{ background: BRAND_BLUE }}>
            View
          </a>
        </div>
      ))}
    </div>
  );
}

