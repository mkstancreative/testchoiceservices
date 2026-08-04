import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Compass,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import Counter from "../components/Counter";
import CTABand from "../components/CTABand";
import PartnerMarquee from "../components/PartnerMarquee";
import { site, stats } from "../data/site";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity first",
    body: "We register candidates only through official exam board channels. If someone promises you a score without a test, they are selling you a problem — not a result.",
  },
  {
    icon: Compass,
    title: "Honest advice",
    body: "Sometimes the right answer is a cheaper exam, a later date, or no exam at all. We will tell you that even when it costs us the booking.",
  },
  {
    icon: Award,
    title: "Measured outcomes",
    body: "Every candidate has a target score on file and a diagnostic to measure against. Progress is reported, not promised.",
  },
  {
    icon: HeartHandshake,
    title: "People, not files",
    body: "Behind every registration is a scholarship, a job offer or a family reunion. We treat the deadline as if it were ours.",
  },
];

const team = [
  {
    name: "Adaeze Nwosu",
    role: "Centre Director",
    bio: "Fifteen years in international education advising, previously with a British Council partner network.",
    initials: "AN",
    accent: "from-brand-500 to-emerald-700",
  },
  {
    name: "Tunde Bakare",
    role: "Head of Preparation",
    bio: "Cambridge CELTA qualified. Has coached over 1,200 candidates through IELTS, TOEFL and PTE.",
    initials: "TB",
    accent: "from-blue-500 to-navy-800",
  },
  {
    name: "Fatima Yusuf",
    role: "Registrations Manager",
    bio: "Manages bookings across every board we work with and owns the candidate documentation process.",
    initials: "FY",
    accent: "from-amber-500 to-orange-700",
  },
  {
    name: "Emeka Obi",
    role: "Quantitative Lead",
    bio: "Actuarial background. Teaches GRE and GMAT quant, plus SAT and ACT mathematics.",
    initials: "EO",
    accent: "from-violet-500 to-purple-800",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Doors open in Lagos",
    body: "Started as a two-room IELTS preparation class with eleven candidates in the first cohort.",
  },
  {
    year: "2020",
    title: "Online delivery",
    body: "Moved the full curriculum online during lockdown and kept every candidate on schedule for their exam dates.",
  },
  {
    year: "2022",
    title: "Full exam coverage",
    body: "Extended registration support to SAT, ACT, GRE, GMAT and the professional English tests including OET and CELPIP.",
  },
  {
    year: "2024",
    title: "Migration pathways",
    body: "Added SELT and CELPIP tracks as UK and Canadian routes became the fastest-growing request from candidates.",
  },
  {
    year: "Today",
    title: "4,500+ candidates",
    body: "A team of tutors and coordinators supporting candidates across Nigeria and the diaspora.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={<><Sparkles className="h-3.5 w-3.5" /> About us</>}
        title="Built by people who have sat these exams — and coached thousands through them"
        subtitle={`${site.name} exists for one reason: to make sure a Nigerian candidate is never held back by a test they were never properly prepared for.`}
        breadcrumb="About"
      />

      {/* ---------------------------------------------------------- Our story */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <Reveal direction="right" className="lg:col-span-7">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              We started because too many good candidates were failing for the wrong reasons
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-600">
              <p>
                Nigeria sends tens of thousands of students, nurses, engineers and families abroad
                every year. Almost all of them must first pass a standardised English or admissions
                test. Too many of them lose money, time and confidence on failed attempts — not
                because they lack ability, but because nobody explained how the test is actually
                scored.
              </p>
              <p>
                {site.name} was founded to close that gap. We register candidates through official
                channels, we teach the exam as it is really marked, and we stay involved until the
                score report lands. When a candidate is not ready, we say so and we move the date.
              </p>
              <p>
                Today we support eleven major exams from our centre in {site.address.line2}, with
                online classes reaching candidates across the country and beyond.
              </p>
            </div>

            <Link to="/contact" className="btn-dark mt-9">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal direction="left" delay={0.12} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-6 ${
                    i % 3 === 0
                      ? "bg-navy-900 text-white"
                      : "border border-navy-100 bg-navy-50/60 text-navy-900"
                  }`}
                >
                  <p className="font-display text-3xl font-bold">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p
                    className={`mt-1.5 text-xs font-medium ${
                      i % 3 === 0 ? "text-navy-300" : "text-navy-500"
                    }`}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-brand-200 bg-brand-50 p-6">
              <Users className="h-8 w-8 text-brand-600" />
              <p className="mt-4 text-sm leading-relaxed text-navy-700">
                Class sizes are capped at <strong className="font-semibold">twelve candidates</strong>{" "}
                so every person gets their speaking heard and their writing marked in every session.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PartnerMarquee />

      {/* ------------------------------------------------- Mission and vision */}
      <section className="container-page py-20 lg:py-28">
        <RevealGroup className="grid gap-6 lg:grid-cols-2">
          <RevealItem>
            <div className="h-full rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-9 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
                <Compass className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">Our mission</h3>
              <p className="mt-4 leading-relaxed text-navy-200">
                To give every Nigerian candidate a fair, well-prepared shot at the exam standing
                between them and their next chapter — through honest registration, rigorous teaching
                and support that does not stop at the centre door.
              </p>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="h-full rounded-3xl border border-navy-100 bg-navy-50/60 p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">Our vision</h3>
              <p className="mt-4 leading-relaxed text-navy-600">
                To become West Africa's most trusted testing partner — the centre institutions
                recommend by name, and the one candidates return to for every exam in their career.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* ------------------------------------------------------------- Values */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Four commitments we do not negotiate"
          />

          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="card h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600">{v.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------------------------------------------------- Timeline */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="Our journey"
          title="From eleven candidates to thousands"
          subtitle="A short history of how the centre grew, and what we added along the way."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[15px] top-2 h-full w-px bg-gradient-to-b from-brand-400 via-navy-200 to-transparent md:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
              >
                <span
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-brand-500 shadow-lg md:left-auto ${
                    i % 2 === 0 ? "md:-right-4" : "md:-left-4"
                  }`}
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>

                <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-600">
                  {m.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Team */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="The team"
            title="The people you will actually work with"
            subtitle="Tutors and coordinators who know these exams from the inside."
          />

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <RevealItem key={m.name}>
                <div className="group h-full overflow-hidden rounded-2xl border border-navy-100 bg-white text-center transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/5">
                  <div
                    className={`flex h-40 items-center justify-center bg-gradient-to-br ${m.accent}`}
                  >
                    <span className="font-display text-4xl font-bold text-white/90 transition-transform duration-300 group-hover:scale-110">
                      {m.initials}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-navy-900">{m.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {m.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">{m.bio}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="text-sm text-navy-500">
              Team names and photographs are placeholders — replace them in{" "}
              <code className="rounded bg-navy-100 px-1.5 py-0.5 text-xs">src/pages/About.jsx</code>.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Come and see the centre"
        subtitle="Book a free consultation, take a diagnostic test and meet the tutor who would be coaching you."
      />
    </>
  );
}
