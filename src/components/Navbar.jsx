import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-navy-950 py-2 text-xs text-navy-200 lg:block">
        <div className="container-page flex items-center justify-between">
          <p>{site.tagline}</p>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <a href={site.emailHref} className="transition hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-navy-100 bg-white/90 py-3 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-white py-5"
        }`}
      >
        <nav className="container-page flex items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-navy-800 text-white shadow-lg shadow-brand-500/25 transition-transform duration-300 group-hover:rotate-6">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-navy-900">{site.name}</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-brand-600">
                Nigeria
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-brand-700" : "text-navy-700 hover:text-brand-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link to="/registration" className="btn-primary">
              Register for an exam
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-200 text-navy-800 transition hover:border-brand-400 hover:text-brand-600 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 bg-white p-6 pt-24 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium transition ${
                        isActive
                          ? "bg-brand-50 text-brand-700"
                          : "text-navy-800 hover:bg-navy-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <div className="mt-4 border-t border-navy-100 pt-5">
                <Link to="/registration" className="btn-primary w-full">
                  Register for an exam
                </Link>
                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-navy-700"
                >
                  <Phone className="h-4 w-4 text-brand-600" /> {site.phone}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
