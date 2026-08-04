import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  GraduationCap,
  Layers,
  Timer,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import CTABand from "../components/CTABand";
import { categories, exams, otherExams } from "../data/exams";

export default function Exams() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? exams : exams.filter((e) => e.category === active)),
    [active]
  );

  return (
    <>
      <PageHero
        eyebrow={<><Layers className="h-3.5 w-3.5" /> Exam catalogue</>}
        title="Eleven exams. One centre. Registration and preparation for both."
        subtitle="Filter by what you need the exam for — study, admission or migration — then tell us your target score and deadline."
        breadcrumb="Exams"
      />

      {/* ------------------------------------------------------------ Filters */}
      <section className="container-page py-16 lg:py-20">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-navy-600 hover:text-brand-600"
                }`}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="exam-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-navy-900"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-navy-200 bg-white" />
                )}
                {cat.label}
              </button>
            );
          })}
        </Reveal>

        <motion.div layout className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((exam) => (
              <motion.article
                key={exam.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -12 }}
                transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div className={`bg-gradient-to-br ${exam.accent} px-7 py-6 text-white`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl font-bold">{exam.name}</h2>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/75">
                        {exam.board}
                      </p>
                    </div>
                    <GraduationCap className="h-7 w-7 shrink-0 text-white/50 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-medium uppercase tracking-wider text-navy-400">
                    {exam.full}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{exam.summary}</p>

                  <dl className="mt-6 space-y-2.5 border-t border-navy-100 pt-5 text-sm">
                    <div className="flex items-start gap-2.5">
                      <Timer className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <dt className="sr-only">Duration</dt>
                      <dd className="text-navy-600">{exam.duration}</dd>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <dt className="sr-only">Scoring</dt>
                      <dd className="text-navy-600">{exam.scoring}</dd>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                      <dt className="sr-only">Validity</dt>
                      <dd className="text-navy-600">Valid for {exam.validity}</dd>
                    </div>
                  </dl>

                  <a
                    href={`#${exam.id}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-all hover:gap-3 hover:text-brand-600"
                  >
                    Full breakdown <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* -------------------------------------------------- Detailed sections */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="In detail"
            title="What each exam involves, and how we prepare you for it"
          />

          <div className="mt-16 space-y-6">
            {exams.map((exam, i) => (
              <Reveal key={exam.id} delay={i * 0.04}>
                <article
                  id={exam.id}
                  className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy-100 bg-white"
                >
                  <div className="grid lg:grid-cols-12">
                    <div
                      className={`bg-gradient-to-br ${exam.accent} p-8 text-white lg:col-span-4`}
                    >
                      <h3 className="font-display text-3xl font-bold">{exam.name}</h3>
                      <p className="mt-2 text-sm text-white/80">{exam.full}</p>

                      <dl className="mt-8 space-y-4 text-sm">
                        {[
                          ["Exam board", exam.board],
                          ["Duration", exam.duration],
                          ["Format", exam.format],
                          ["Score range", exam.scoring],
                          ["Validity", exam.validity],
                          ["Centre fee", exam.fee],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <dt className="text-xs uppercase tracking-wider text-white/60">{k}</dt>
                            <dd className="mt-0.5 font-medium">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="p-8 lg:col-span-8">
                      <p className="text-base leading-relaxed text-navy-700">{exam.summary}</p>

                      <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-navy-900">
                        How we prepare you
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {exam.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3">
                            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                            <span className="text-sm text-navy-600">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-navy-900">
                        Recognised by
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exam.acceptedBy.map((a) => (
                          <span
                            key={a}
                            className="rounded-full bg-navy-50 px-3.5 py-1.5 text-xs font-medium text-navy-700"
                          >
                            {a}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                          to="/registration"
                          state={{ exam: exam.name }}
                          className="btn-primary"
                        >
                          Register for {exam.name} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/preparation" className="btn-dark">
                          Preparation options
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Other exams */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="And others"
          title="Not on the list? Ask us anyway"
          subtitle="We regularly arrange registration support for professional certifications. If we cannot help directly, we will point you to a centre that can."
        />

        <RevealGroup className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {otherExams.map((name) => (
            <RevealItem key={name}>
              <span className="inline-block rounded-full border border-navy-200 bg-white px-5 py-2.5 text-sm font-medium text-navy-700 transition hover:border-brand-400 hover:text-brand-600">
                {name}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link to="/contact" className="btn-dark">
            Ask about another exam <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
