import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on navigation. If the URL carries a hash we scroll to that
 * element instead, so footer links like /exams#ielts land in the right place.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        // Wait a frame so the freshly mounted page has laid out.
        requestAnimationFrame(() =>
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        );
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "auto" : "auto" });
  }, [pathname, hash]);

  return null;
}
