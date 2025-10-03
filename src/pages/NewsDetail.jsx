import { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import { BRAND_DARK } from "../lib/brand";
import { PLACEHOLDER_IMG, resolveAsset } from "../lib/assets";

export default function NewsDetail({ slug }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const newsUrl = new URL("../content/news.json", import.meta.url).href;
    fetch(newsUrl)
      .then((r) => r.json())
      .then((data) => {
        const found = data.find((x) => x.slug === slug);
        setItem(found || null);
      })
      .catch(() => setItem(null));
  }, [slug]);

  const img = useMemo(() => resolveAsset(item?.image), [item]);

  if (!item) {
    return (
      <main className="pt-24 md:pt-28 pb-16">
        <Container>
          <p className="text-slate-600">Loading...</p>
        </Container>
      </main>
    );
  }

  return (
    <main className="pt-24 md:pt-28 pb-20">
      <Container>
        <a href="#/news" className="text-sm text-slate-600 hover:underline">← Back to News</a>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>{item.title}</h1>
        <div className="mt-2 text-sm text-slate-500">{formatDate(item.date)}</div>
        <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-black/10 bg-slate-50">
          <img src={img || PLACEHOLDER_IMG} alt={item.title} className="w-full h-auto" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PLACEHOLDER_IMG; }} />
        </div>
        <article className="prose prose-slate max-w-none mt-6">
          <p>{item.body}</p>
        </article>
      </Container>
    </main>
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
