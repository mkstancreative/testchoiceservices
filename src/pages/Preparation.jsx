import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  ChevronDown,
  Laptop,
  Minus,
  Plus,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import CTABand from "../components/CTABand";

const tracks = [
  {
    icon: Users,
    name: "Classroom group",
    tagline: "Best value · maximum practice",
    duration: "6 – 8 weeks",
    sessions: "3 sessions per week",
    highlight: false,
    features: [
      "Maximum twelve candidates per class",
      "Weekly full-length mock under exam conditions",
      "Writing marked and returned in 48 hours",
      "Speaking practice in every session",
      "Printed and digital course materials",
    ],
  },
  {
    icon: UserRound,
    name: "One-to-one intensive",
    tagline: "Fastest route to a stretch score",
    duration: "2 – 4 weeks",
    sessions: "Scheduled around you",
    highlight: true,
    features: [
      "Fully personalised study plan from your diagnostic",
      "Daily or alternate-day sessions available",
      "Unlimited writing submissions marked",
      "Recorded speaking reviews with tutor commentary",
      "Priority exam date booking",
    ],
  },
  {
    icon: Laptop,
    name: "Live online",
    tagline: "Anywhere in Nigeria or abroad",
    duration: "6 – 8 weeks",
    sessions: "Evening & weekend cohorts",
    highlight: false,
    features: [
      "Same curriculum and tutors as classroom",
      "Sessions recorded for later review",
      "Digital mock platform mirroring the real interface",
      "Group chat access to tutors between classes",
      "Ideal for candidates working full time",
    ],
  },
];

const curriculum = [
  {
    week: "Weeks 1–2",
    title: "Diagnostic & foundations",
    body: "Full mock under exam conditions, score analysis, and targeted work on the two weakest skills. You leave with a written target and a plan.",
  },
  {
    week: "Weeks 3–4",
    title: "Technique by section",
    body: "Question-type drills for each section. Reading strategies, listening note systems, writing structures and speaking frameworks — practised, not just explained.",
  },
  {
    week: "Weeks 5–6",
    title: "Timed performance",
    body: "Everything moves to exam timing. Weekly full mocks, marked writing, and recorded speaking with tutor feedback on the specific band descriptors.",
  },
  {
    week: "Weeks 7–8",
    title: "Polish & exam day",
    body: "Final mocks, error-pattern review, and a full walkthrough of centre rules, ID requirements and what happens on the day itself.",
  },
];

const includes = [
  "Diagnostic assessment and written target score",
  "Official-style practice materials for your exam",
  "Weekly full-length mock tests",
  "Individual writing feedback against band descriptors",
  "Recorded speaking reviews",
  "Progress report every two weeks",
  "WhatsApp access to your tutor between sessions",
  "Exam-day briefing and registration support",
];

const faqs = [
  {
    q: "How long before my exam should I start preparing?",
    a: "For most candidates six to eight weeks is realistic if you are within one band or a few points of your target. If the gap is wider, or you are starting from scratch, plan for ten to twelve weeks. We will tell you honestly after your diagnostic — and we would rather move your exam date than let you sit unprepared.",
  },
  {
    q: "Do I have to take classes to register through you?",
    a: "No. Registration and preparation are separate services. Plenty of candidates register with us and study independently. We will still brief you on centre rules and documentation.",
  },
  {
    q: "What if I do not reach my target score?",
    a: "We review the score report with you at no charge, identify what went wrong, and offer a discounted top-up block focused only on the weak section. We do not guarantee scores — no honest provider can — but we do stay with you until you get there.",
  },
  {
    q: "Can I switch between online and classroom?",
    a: "Yes. The curriculum is identical, so you can attend online during a busy week and return to the classroom afterwards. Just let your coordinator know.",
  },
  {
    q: "Do you help with university applications too?",
    a: "We help with score reporting to institutions and with application timelines so your scores arrive before deadlines. For full admissions consulting we can refer you to partners we trust.",
  },
  {
    q: "What does preparation cost?",
    a: "Fees depend on the exam, the track and the length of the programme. Contact us with your exam and target score and we will send a written quote — there are no hidden charges added later.",
  },
];

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="overflow-hidden rounded-2xl border border-navy-100 bg-white"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-5 px-7 py-5 text-left transition hover:bg-navy-50/60"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-navy-900">{faq.q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
            open ? "bg-brand-500 text-white" : "bg-navy-50 text-navy-600"
          }`}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <p className="px-7 pb-6 text-sm leading-relaxed text-navy-600">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Preparation() {
  return (
    <>
      <PageHero
        eyebrow={<><BookOpenCheck className="h-3.5 w-3.5" /> Preparatory services</>}
        title="Preparation designed backwards from the score you need"
        subtitle="Pick the track that fits your schedule. Every one of them starts with a diagnostic and ends with you sitting mocks at full exam timing."
        breadcrumb="Preparation"
      />

      {/* -------------------------------------------------------------- Tracks */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Choose your track"
          title="Three ways to prepare — same curriculum, different pace"
          subtitle="Not sure which fits? Book a free consultation and we will recommend one based on your deadline and starting level."
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {tracks.map((t) => (
            <RevealItem key={t.name}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-1.5 ${
                  t.highlight
                    ? "bg-gradient-to-br from-navy-900 to-navy-950 text-white shadow-2xl"
                    : "border border-navy-100 bg-white shadow-sm hover:shadow-xl hover:shadow-navy-900/5"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">
                    Most requested
                  </span>
                )}

                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    t.highlight ? "bg-brand-500/20 text-brand-400" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  <t.icon className="h-6 w-6" />
                </span>

                <h3
                  className={`mt-6 font-display text-2xl font-bold ${
                    t.highlight ? "text-white" : "text-navy-900"
                  }`}
                >
                  {t.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${t.highlight ? "text-brand-300" : "text-brand-600"}`}
                >
                  {t.tagline}
                </p>

                <div
                  className={`mt-6 flex gap-6 border-y py-4 text-sm ${
                    t.highlight ? "border-white/10" : "border-navy-100"
                  }`}
                >
                  <div>
                    <p className={`text-xs ${t.highlight ? "text-navy-400" : "text-navy-500"}`}>
                      Length
                    </p>
                    <p
                      className={`font-semibold ${t.highlight ? "text-white" : "text-navy-900"}`}
                    >
                      {t.duration}
                    </p>
                  </div>
                  <div>
                    <p className={`text-xs ${t.highlight ? "text-navy-400" : "text-navy-500"}`}>
                      Schedule
                    </p>
                    <p
                      className={`font-semibold ${t.highlight ? "text-white" : "text-navy-900"}`}
                    >
                      {t.sessions}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <BadgeCheck
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          t.highlight ? "text-brand-400" : "text-brand-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${t.highlight ? "text-navy-200" : "text-navy-600"}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/registration"
                  className={`mt-8 ${t.highlight ? "btn-primary" : "btn-dark"} w-full`}
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ---------------------------------------------------------- Curriculum */}
      <section className="mesh-dark relative overflow-hidden py-20 lg:py-28">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading
            dark
            eyebrow="Inside the programme"
            title="What an eight-week track actually looks like"
            subtitle="Structured, measured and adjusted as your mock scores move."
          />

          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2">
            {curriculum.map((c, i) => (
              <RevealItem key={c.week}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur transition duration-300 hover:border-brand-400/50 hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 font-display font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
                      {c.week}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-300">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ------------------------------------------------------------ Includes */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" /> Included in every track
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              One fee. Everything you need between today and results day.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-600">
              We do not charge separately for mock tests, marking or materials. What is quoted is
              what you pay.
            </p>

            <Link to="/contact" className="btn-dark mt-9">
              Request a written quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <RevealGroup className="grid gap-3 sm:grid-cols-2" stagger={0.06}>
            {includes.map((item) => (
              <RevealItem key={item}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/50 p-4 transition hover:border-brand-200 hover:bg-brand-50/40">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm text-navy-700">{item}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ----------------------------------------------------------------- FAQ */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Questions"
            title="The things candidates ask us most"
          />

          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 text-center">
            <p className="text-sm text-navy-600">
              Still unsure which track suits you?{" "}
              <Link to="/contact" className="font-semibold text-brand-600 hover:underline">
                Send us a message
              </Link>{" "}
              — we reply within one working day.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Book your free diagnostic test"
        subtitle="One full mock under exam conditions, a written score analysis, and an honest view of how far you are from your target. No obligation to enrol."
      />
    </>
  );
}
