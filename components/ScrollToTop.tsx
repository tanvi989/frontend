import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Fire Meta Pixel PageView on every route change (SPA doesn't reload, so index.html only runs once)
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as Window & { fbq?: (a: string, b: string) => void }).fbq === "function") {
      (window as Window & { fbq: (a: string, b: string) => void }).fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
