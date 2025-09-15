export default function CardGrid({ children, cols = { base: 1, md: 3 }, gap = 6 }) {
  const cls = [
    `grid gap-${gap}`,
    cols?.base ? `grid-cols-${cols.base}` : '',
    cols?.sm ? `sm:grid-cols-${cols.sm}` : '',
    cols?.md ? `md:grid-cols-${cols.md}` : '',
    cols?.lg ? `lg:grid-cols-${cols.lg}` : '',
  ].join(' ');
  return <div className={cls}>{children}</div>;
}

