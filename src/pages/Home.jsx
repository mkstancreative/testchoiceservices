import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarCheck,
  ClipboardList,
  Globe2,
  Headphones,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";

import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Counter from "../components/Counter";
import CTABand from "../components/CTABand";
import PartnerMarquee from "../components/PartnerMarquee";
import { site, stats } from "../data/site";
import { exams } from "../data/exams";

const features = [
  {
    icon: ShieldCheck,
    title: "Registered the right way",
    body: "We complete your booking on the official exam board portal, verify your identity documents and send you the confirmation before you leave.",
  },
  {
    icon: BookOpenCheck,
    title: "Preparation that targets your score",
    body: "Every candidate starts with a diagnostic. Your class plan is built around the exact band or score your university or immigration route requires.",
  },
  {
    icon: Users,
    title: "Small, focused classes",
    body: "Groups capped at twelve so tutors can mark your writing and hear your speaking every single session. One-to-one intensives are available too.",
  },
  {
    icon: Globe2,
    title: "Guidance beyond the test",
    body: "Score reporting to institutions, application timelines and next-step advice for study, work and migration pathways.",
  },
  {
    icon: CalendarCheck,
    title: "Dates that fit your deadline",
    body: "We track slot availability across centres and hold the earliest realistic date for your application window.",
  },
  {
    icon: Headphones,
    title: "Support until results day",
    body: "A named coordinator on WhatsApp answers your questions from registration through to score release and reporting.",
  },
];

const steps = [
  {
    n: "01",
    title: "Free consultation",
    body: "Tell us your destination, course or visa route. We confirm which exam you actually need — and which you do not.",
  },
  {
    n: "02",
    title: "Diagnostic test",
    body: "A full mock under exam conditions shows your current level and the gap to your target score.",
  },
  {
    n: "03",
    title: "Preparation",
    body: "Classroom, online or one-to-one coaching with weekly marked mocks and measurable progress reports.",
  },
  {
    n: "04",
    title: "Registration & exam day",
    body: "We book your slot, brief you on the centre rules, and stay in touch until your results are released.",
  },
];

const testimonials = [
  {
    quote:
      "I needed band 7 in every module for my Canadian PR and had failed writing twice elsewhere. The writing clinics here fixed exactly what was wrong. I got 7.5 overall.",
    name: "Chinelo A.",
    role: "IELTS General · Lagos",
  },
  {
    quote:
      "They registered me for the GRE in three days when I had almost given up on the deadline. Quant went from 148 to 162 in seven weeks of classes.",
    name: "Ibrahim S.",
    role: "GRE · Abuja",
  },
  {
    quote:
      "As a nurse heading to the UK, the OET role-plays were the difference. My tutor knew the NMC requirements better than the agency I had been paying.",
    name: "Grace O.",
    role: "OET Nursing · Port Harcourt",
  },
];

export default function Home() {
  const featured = exams.slice(0, 6);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="mesh-dark relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="animate-float absolute right-[8%] top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative grid items-center gap-14 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <motion.span
              className="eyebrow-dark"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-3.5 w-3.5" /> Registration &amp; preparation centre
            </motion.span>

            <motion.h1
              className="mt-7 text-balance text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-[3.9rem]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.21, 0.6, 0.35, 1] }}
            >
              Sit the exam that opens the{" "}
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-gold-400 bg-clip-text text-transparent">
                door abroad
              </span>
              .
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-lg leading-relaxed text-navy-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {site.name} handles registration and preparation for TOEFL, IELTS, PTE, SELT, OET,
              Duolingo, SAT, ACT, GRE, GMAT and CELPIP — so you walk into the test centre knowing
              exactly what to expect.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              <Link to="/registration" className="btn-primary">
                Register for an exam <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/exams" className="btn-outline">
                Browse all exams
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-navy-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-brand-400" /> Official board registration
              </span>
              <span className="flex items-center gap-2">
                <Target className="h-4 w-4 text-brand-400" /> Score-targeted coaching
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gold-400" /> 4,500+ candidates served
              </span>
            </motion.div>
          </div>

          {/* Floating glass panel */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-white">
                  Upcoming exam windows
                </h2>
                <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
                  Open
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  { exam: "IELTS Academic", note: "Weekly · Lagos & Abuja" },
                  { exam: "TOEFL iBT", note: "Multiple slots monthly" },
                  { exam: "PTE Academic", note: "Results in 48 hours" },
                  { exam: "Duolingo English Test", note: "On demand, from home" },
                ].map((row, i) => (
                  <motion.li
                    key={row.exam}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition hover:border-brand-400/50 hover:bg-white/10"
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{row.exam}</p>
                      <p className="text-xs text-navy-300">{row.note}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-brand-400" />
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/registration"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:bg-brand-50"
              >
                Check availability <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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

      <PartnerMarquee />

      {/* --------------------------------------------------------------- Stats */}
      <section className="container-page py-16 lg:py-20">
        <RevealGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="rounded-2xl border border-navy-100 bg-gradient-to-b from-white to-navy-50/50 p-7 text-center">
                <p className="font-display text-4xl font-bold text-navy-900 lg:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-navy-500">{s.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* --------------------------------------------------------------- Exams */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we cover"
              title="Every major English and admissions exam, under one roof"
              subtitle="Registration, preparation and post-exam support for the tests universities, employers and immigration authorities actually ask for."
            />
            <Reveal delay={0.15}>
              <Link to="/exams" className="btn-dark shrink-0">
                See all exams <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((exam) => (
              <RevealItem key={exam.id}>
                <Link to={`/exams#${exam.id}`} className="card group block h-full">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${exam.accent} font-display text-sm font-bold text-white shadow-lg`}
                  >
                    {exam.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{exam.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600">
                    {exam.board}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-600">{exam.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-all group-hover:gap-3 group-hover:text-brand-600">
                    Exam details <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ------------------------------------------------------------ Features */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Why candidates choose us"
          title="A centre that is judged on your score, not your registration fee"
          subtitle="We are a preparation and registration provider — which means our reputation rests entirely on how you perform on test day."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="card h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{f.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* --------------------------------------------------------------- Steps */}
      <section className="mesh-dark relative overflow-hidden py-20 lg:py-28">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading
            dark
            align="center"
            eyebrow="How it works"
            title="Four steps from first enquiry to results day"
            subtitle="No guesswork, no missed deadlines — a process we have run with thousands of candidates."
          />

          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:bg-white/10">
                  <span className="font-display text-4xl font-bold text-brand-400/60 transition group-hover:text-brand-400">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-300">{s.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* -------------------------------------------------------- Prep feature */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">
              <ClipboardList className="h-3.5 w-3.5" /> Preparatory services
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              Coaching built around the score you need — not a generic syllabus
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
              A band 6.5 for a UK master's and a band 8 for Australian PR are different jobs. We
              start with a diagnostic, set the target, and drill only what stands between you and it.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Classroom, live online and one-to-one intensive tracks",
                "Weekly full-length mocks marked against official rubrics",
                "Speaking rehearsals with recorded feedback",
                "Writing marked and returned within 48 hours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm text-navy-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/preparation" className="btn-dark mt-9">
              Explore preparation <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                  Sample progress
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  IELTS Academic · 8-week track
                </h3>

                <div className="mt-8 space-y-5">
                  {[
                    { skill: "Listening", from: 6.0, to: 8.0, pct: 89 },
                    { skill: "Reading", from: 5.5, to: 7.5, pct: 83 },
                    { skill: "Writing", from: 5.0, to: 7.0, pct: 78 },
                    { skill: "Speaking", from: 6.0, to: 7.5, pct: 83 },
                  ].map((row, i) => (
                    <div key={row.skill}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-navy-200">{row.skill}</span>
                        <span className="font-semibold text-white">
                          {row.from.toFixed(1)} → {row.to.toFixed(1)}
                        </span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.15 * i, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-xs leading-relaxed text-navy-400">
                  Illustrative of a typical eight-week track. Individual results vary with starting
                  level and study hours.
                </p>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-navy-100 sm:block">
                <p className="font-display text-3xl font-bold text-brand-600">96%</p>
                <p className="text-xs font-medium text-navy-500">
                  hit their target
                  <br />
                  on first attempt
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- Testimonials */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Candidate stories"
            title="Scores that changed plans"
          />

          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealItem key={t.name}>
                <figure className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5">
                  <Quote className="h-8 w-8 text-brand-200" />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-navy-100 pt-5">
                    <p className="font-display font-bold text-navy-900">{t.name}</p>
                    <p className="text-xs text-navy-500">{t.role}</p>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand />
    </>
  );
}
