import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Camera,
  GraduationCap,
  Laptop,
  Trophy,
  Users,
  X,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import CTABand from "../components/CTABand";

/**
 * Gallery items.
 *
 * To use real photographs: drop the files into `public/gallery/` and set
 * `src: "/gallery/your-file.jpg"` on the item. When `src` is absent the tile
 * falls back to a styled gradient placeholder, so the page never looks broken.
 */
const groups = [
  { id: "all", label: "All", icon: Camera },
  { id: "centre", label: "The centre", icon: Building2 },
  { id: "classes", label: "Classes", icon: Users },
  { id: "digital", label: "Digital testing", icon: Laptop },
  { id: "candidates", label: "Candidates", icon: Trophy },
];

const items = [
  {
    id: 1,
    group: "centre",
    title: "Reception & candidate check-in",
    caption: "Where every candidate is verified before entering the testing area.",
    accent: "from-navy-700 to-navy-950",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    group: "classes",
    title: "IELTS speaking clinic",
    caption: "Small-group speaking practice with recorded feedback.",
    accent: "from-brand-500 to-emerald-800",
  },
  {
    id: 3,
    group: "digital",
    title: "Computer-based testing lab",
    caption: "Individual stations set up to mirror the real exam interface.",
    accent: "from-blue-600 to-indigo-900",
  },
  {
    id: 4,
    group: "candidates",
    title: "Results day",
    caption: "A CELPIP candidate collecting the level she needed for Express Entry.",
    accent: "from-amber-500 to-orange-800",
  },
  {
    id: 5,
    group: "classes",
    title: "GRE quantitative session",
    caption: "Working through data interpretation under exam timing.",
    accent: "from-cyan-600 to-sky-900",
  },
  {
    id: 6,
    group: "centre",
    title: "Study lounge",
    caption: "Quiet space for candidates to revise between sessions.",
    accent: "from-teal-600 to-emerald-900",
    span: "lg:col-span-2",
  },
  {
    id: 7,
    group: "digital",
    title: "Mock test in progress",
    caption: "Full-length mocks run under the same conditions as the real thing.",
    accent: "from-violet-600 to-purple-900",
  },
  {
    id: 8,
    group: "candidates",
    title: "OET nursing cohort",
    caption: "Healthcare professionals preparing for UK and Australian registration.",
    accent: "from-rose-500 to-red-800",
  },
  {
    id: 9,
    group: "classes",
    title: "Writing feedback workshop",
    caption: "Marked scripts reviewed against official band descriptors.",
    accent: "from-lime-600 to-green-900",
  },
];

function Tile({ item, onOpen }) {
  return (
    <motion.button
      type="button"
      layout
      onClick={() => onOpen(item)}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
      className={`group relative min-h-[240px] overflow-hidden rounded-2xl text-left ${
        item.span ?? ""
      }`}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.accent} transition-transform duration-700 group-hover:scale-110`}
        >
          <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
          <GraduationCap
            className="absolute right-6 top-6 h-10 w-10 text-white/20"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
        <p className="mt-1 max-h-0 overflow-hidden text-sm text-navy-200 opacity-0 transition-all duration-400 group-hover:max-h-24 group-hover:opacity-100">
          {item.caption}
        </p>
      </div>

      <span className="absolute right-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
        View
      </span>
    </motion.button>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const visible = useMemo(
    () => (active === "all" ? items : items.filter((i) => i.group === active)),
    [active]
  );

  return (
    <>
      <PageHero
        eyebrow={<><Camera className="h-3.5 w-3.5" /> Gallery</>}
        title="A look inside the centre"
        subtitle="Our facilities, our classes and the candidates who have passed through them."
        breadcrumb="Gallery"
      />

      <section className="container-page py-16 lg:py-20">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {groups.map((g) => {
            const isActive = active === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setActive(g.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-navy-600 hover:text-brand-600"
                }`}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="gallery-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-navy-900"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-navy-200 bg-white" />
                )}
                <g.icon className="h-4 w-4" />
                {g.label}
              </button>
            );
          })}
        </Reveal>

        <motion.div
          layout
          className="mt-12 grid auto-rows-[240px] gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <Tile key={item.id} item={item} onOpen={setLightbox} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-navy-500">
            Placeholder tiles. Drop real photographs into{" "}
            <code className="rounded bg-navy-100 px-1.5 py-0.5 text-xs">public/gallery/</code> and
            add a <code className="rounded bg-navy-100 px-1.5 py-0.5 text-xs">src</code> to each item
            in <code className="rounded bg-navy-100 px-1.5 py-0.5 text-xs">src/pages/Gallery.jsx</code>.
          </p>
        </Reveal> */}
      </section>

      {/* ------------------------------------------------------ Facility notes */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="The facility"
            title="Built for concentration"
            subtitle="Everything about the space is designed to remove distraction on the days that matter."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Laptop,
                title: "Dedicated testing stations",
                body: "Individual workstations with partitions, standardised hardware and noise-cancelling headsets for listening sections.",
              },
              {
                icon: Building2,
                title: "Quiet, controlled environment",
                body: "Sound-treated rooms, backup power and stable connectivity — so a mock test never gets interrupted.",
              },
              {
                icon: Users,
                title: "Small classrooms",
                body: "Rooms sized for twelve candidates, keeping every session interactive rather than a lecture.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="card h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <div
              className="absolute inset-0 bg-navy-950/85 backdrop-blur-sm"
              onClick={() => setLightbox(null)}
            />

            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {lightbox.src ? (
                <img src={lightbox.src} alt={lightbox.title} className="h-80 w-full object-cover" />
              ) : (
                <div
                  className={`relative flex h-80 items-center justify-center bg-gradient-to-br ${lightbox.accent}`}
                >
                  <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
                  <GraduationCap className="h-20 w-20 text-white/30" />
                </div>
              )}

              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-navy-900">{lightbox.title}</h3>
                <p className="mt-3 leading-relaxed text-navy-600">{lightbox.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand
        title="Prefer to see it in person?"
        subtitle="Walk-in visits are welcome during opening hours, or book a time and we will show you the testing lab and classrooms."
      />
    </>
  );
}
