export function navigateHash(target) {
  if (typeof window === "undefined") return;
  if (!target) return;

  const normalized = target.startsWith("#") ? target : `#${target}`;

  if (window.location.hash !== normalized) {
    window.location.hash = normalized;
    return;
  }

  const evt = typeof HashChangeEvent === "function"
    ? new HashChangeEvent("hashchange")
    : new Event("hashchange");
  window.dispatchEvent(evt);
}
