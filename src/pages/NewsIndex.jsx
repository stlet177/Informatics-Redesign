import { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import CardGrid from "../components/CardGrid";
import NewsCard from "../components/NewsCard";
import { BRAND_DARK, BRAND_LIGHT } from "../lib/brand";
import { resolveAsset } from "../lib/assets";

export default function NewsIndex() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const newsUrl = new URL("../content/news.json", import.meta.url).href;
    fetch(newsUrl)
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setItems([]);
          return;
        }
        setItems(data.map((item) => ({
          ...item,
          image: resolveAsset(item.image),
        })));
      })
      .catch(() => setItems([]));
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(["all"]);
    items.forEach((i) => cats.add(i.category || "news"));
    return Array.from(cats);
  }, [items]);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => (i.category || "news") === filter);
  }, [items, filter]);

  return (
    <main className="pt-24 md:pt-28 pb-16" style={{ background: BRAND_LIGHT }}>
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: BRAND_DARK }}>News & Events</h1>
            <p className="mt-2 text-slate-600">Updates, stories, and upcoming events from Informatics.</p>
          </div>
          <div className="inline-flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-sm ${filter === c ? 'bg-white shadow ring-1 ring-black/5' : 'bg-white/60 ring-1 ring-black/5 hover:bg-white'}`}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <CardGrid cols={{ base: 1, md: 3 }} gap={6}>
            {filtered.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </CardGrid>
        </div>
      </Container>
    </main>
  );
}
