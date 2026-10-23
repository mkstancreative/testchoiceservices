import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Armchair,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  Fingerprint,
  Lock,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Zap,
} from "lucide-react";

import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import CTABand from "../components/CTABand";
import PartnerMarquee from "../components/PartnerMarquee";
import { site } from "../data/site";
import { comingSoon, exams } from "../data/exams";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure, supervised testing",
    body: "Trained invigilators, controlled entry and lockers for personal items keep every session fair and every result credible.",
  },
  {
    icon: Fingerprint,
    title: "Careful identity checks",
    body: "Every candidate is checked against a valid original ID and their booking before they are seated.",
  },
  {
    icon: Armchair,
    title: "Your own workstation",
    body: "Partitioned stations with standardised hardware and headsets tested before you begin — no shared screens, no distractions.",
  },
  {
    icon: Zap,
    title: "Backup power & stable connection",
    body: "A test that drops halfway is a nightmare. We run backup power and reliable connectivity so your session is not interrupted.",
  },
  {
    icon: CalendarCheck,
    title: "Dates that fit your deadline",
    body: "Tell us your application or visa deadline and we will offer the earliest seats the exam board allows.",
  },
  {
    icon: UserCheck,
    title: "Accessible & accommodating",
    body: "Need extra time or an accessible station? Tell us when you book and we will work with the exam board to arrange it.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose your exam",
    body: "Pick the test and version you need. Not sure which one your university or visa route requires? Ask the front desk.",
  },
  {
    n: "02",
    title: "Book a seat",
    body: "Send a booking request with your preferred date and session. We confirm availability and send the fee breakdown.",
  },
  {
    n: "03",
    title: "Check in",
    body: "Arrive early with your original ID. We verify your identity, store your belongings and seat you at your station.",
  },
  {
    n: "04",
    title: "Sit the test",
    body: "Test in a quiet, supervised room. Your exam board releases your results directly to you.",
  },
];

const testimonials = [
  {
    quote:
      "Check-in was quick and everything was exactly as described. The room was quiet, my headset was tested before I started, and I could focus on the exam.",
    name: "Chinelo A.",
    role: "IELTS · Owerri",
  },
  {
    quote:
      "I had a tight application deadline and they found me a seat within the week. The staff explained the ID rules clearly so nothing went wrong on the day.",
    name: "Ibrahim S.",
    role: "GRE · Enugu",
  },
  {
    quote:
      "Power never flickered and the stations were comfortable for a long exam. For a nurse heading to the UK, a calm test environment mattered a lot.",
    name: "Grace O.",
    role: "OET · Port Harcourt",
  },
];

export default function Home() {
  const featured = exams.slice(0, 6);
  const comingSoonLine = `${comingSoon.join(", ")} and others coming soon`;

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="mesh-dark relative overflow-hidden">
        <div
          className="grid-lines absolute inset-0 opacity-50"
          aria-hidden="true"
        />
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
              <Sparkles className="h-3.5 w-3.5" /> Secure computer-based
              test centre
            </motion.span>

            <motion.h1
              className="mt-7 text-balance text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-[3.9rem]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.08,
                ease: [0.21, 0.6, 0.35, 1],
              }}
            >
              Sit your exam in a centre built for{" "}
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-gold-400 bg-clip-text text-transparent">
                your best result
              </span>
              .
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-lg leading-relaxed text-navy-200"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {site.name} hosts TOEFL iBT in Owerri — a quiet, supervised test
              room with careful check-in, so test day is the easy part.{" "}
              {comingSoonLine}.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              <Link to="/book" className="btn-primary">
                Book a seat <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/exams" className="btn-outline">
                About the exam
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-navy-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-brand-400" /> Careful ID
                verification
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand-400" /> Supervised,
                secure rooms
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gold-400" /> 4,500+ candidates
                tested
              </span>
            </motion.div>
          </div>

          {/* Floating glass panel */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.3,
              ease: [0.21, 0.6, 0.35, 1],
            }}
          >
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-white">
                  Exams you can sit here
                </h2>
                <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-300">
                  Open
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  { exam: "TOEFL iBT", note: "Secure workstation, headset provided" },
                  { exam: comingSoon.join(" · "), note: "And others coming soon" },
                ].map((row, i) => (
                  <motion.li
                    key={row.exam}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition hover:border-brand-400/50 hover:bg-white/10"
                    initial={{ opacity: 0, x: 26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {row.exam}
                      </p>
                      <p className="text-xs text-navy-300">{row.note}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-brand-400" />
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/book"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:bg-brand-50"
              >
                Check seat availability <ArrowRight className="h-4 w-4" />
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

      {/* --------------------------------------------------------------- Exams */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Exams we host"
              title="TOEFL iBT, at a centre close to home"
              subtitle={`The English test universities across the US, Canada and 160+ countries ask for. ${comingSoonLine}.`}
            />
            <Reveal delay={0.15}>
              <Link to="/exams" className="btn-dark shrink-0">
                Exam details <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((exam) => (
              <RevealItem key={exam.id}>
                <Link
                  to={`/exams#${exam.id}`}
                  className="card group block h-full"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${exam.accent} font-display text-sm font-bold text-white `}
                  >
                    {exam.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                    {exam.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600">
                    {exam.board}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-600">
                    {exam.summary}
                  </p>

                  {exam.variants && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exam.variants.map((v) => (
                        <span
                          key={v.name}
                          className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-600"
                        >
                          {v.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-all group-hover:gap-3 group-hover:text-brand-600">
                    Exam details <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </RevealItem>
            ))}
            {[...comingSoon, "And others"].map((name) => (
              <RevealItem key={name}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-navy-200 bg-white/60 p-7">
                  <h3 className="font-display text-xl font-bold text-navy-400">
                    {name}
                  </h3>
                  <span className="mt-5 inline-flex w-fit rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-500">
                    Coming soon
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ------------------------------------------------------------ Features */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Why test with us"
          title="A test centre where nothing gets in the way of your performance"
          subtitle="We do not set or mark your exam. Our job is to give you a fair, calm, secure place to sit it."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="card h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {f.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* --------------------------------------------------------------- Steps */}
      <section className="mesh-dark relative overflow-hidden py-20 lg:py-28">
        <div
          className="grid-lines absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <SectionHeading
            dark
            align="center"
            eyebrow="How it works"
            title="Four steps from booking to sign-out"
            subtitle="A simple, predictable process we run every test day."
          />

          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:bg-white/10">
                  <span className="font-display text-4xl font-bold text-brand-400/60 transition group-hover:text-brand-400">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-300">
                    {s.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ----------------------------------------------------- Test-day feature */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">
              <ClipboardList className="h-3.5 w-3.5" /> Test-day experience
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              Arrive, check in, test — a calm process from the front door
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
              Most test-day stress comes from not knowing the rules. Our test-day
              guide spells out what to bring, what to leave outside and what
              happens at every stage.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Bring a valid original photo ID that matches your booking",
                "Arrive 30–45 minutes early for check-in",
                "Personal items stored in secure lockers",
                "Invigilator on hand for any technical issue",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm text-navy-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/test-day" className="btn-dark mt-9">
              Read the test-day guide <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                Check-in sequence
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                What happens when you arrive
              </h3>

              <ol className="mt-8 space-y-5">
                {[
                  { icon: Fingerprint, label: "ID & booking verified" },
                  { icon: Lock, label: "Belongings stored in a locker" },
                  { icon: Armchair, label: "Seated at your station" },
                  { icon: ShieldCheck, label: "Rules briefing, then exam launches" },
                ].map((row, i) => (
                  <motion.li
                    key={row.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.12 * i }}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                      <row.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-navy-100">{row.label}</span>
                  </motion.li>
                ))}
              </ol>

              <p className="mt-8 text-xs leading-relaxed text-navy-400">
                Exact steps vary slightly by exam board. Your booking confirmation lists the
                requirements for your test.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- Testimonials */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Candidate feedback"
            title="Candidates on their test day"
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
                    <p className="font-display font-bold text-navy-900">
                      {t.name}
                    </p>
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
