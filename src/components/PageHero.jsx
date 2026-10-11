import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/** Compact hero used at the top of every inner page. */
export default function PageHero({ eyebrow, title, subtitle, breadcrumb }) {
  return (
    <section className="mesh-dark relative overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.6, 0.35, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="eyebrow-dark">{eyebrow}</span>}
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">{subtitle}</p>
          )}

          {breadcrumb && (
            <nav className="mt-8 flex items-center gap-2 text-sm text-navy-300" aria-label="Breadcrumb">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-brand-300">{breadcrumb}</span>
            </nav>
          )}
        </motion.div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 60"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 60h1440V0c-240 40-520 52-760 40S240 8 0 26z" />
      </svg>
    </section>
  );
}
