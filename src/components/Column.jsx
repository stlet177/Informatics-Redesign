export default function Column({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl ${className}`}>{children}</div>;
}

