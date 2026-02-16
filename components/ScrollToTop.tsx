import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackMetaPageView } from "@/utils/analytics";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Fire Meta Pixel PageView on every route change (SPA: no full reload, so pixel must fire per virtual page)
  useEffect(() => {
    trackMetaPageView();
  }, [pathname]);

  return null;
}
