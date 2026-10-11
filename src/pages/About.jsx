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
    body: "Every candidate sits the same exam under the same rules. We verify identity, supervise every session and report irregularities to the exam board — without exception.",
  },
  {
    icon: Compass,
    title: "Clear, honest information",
    body: "We tell you what to bring, what the rules are and what we can and cannot do — before test day, not on it.",
  },
  {
    icon: Award,
    title: "Reliable facilities",
    body: "Backup power, stable connectivity and tested equipment, because a technical failure should never decide someone's score.",
  },
  {
    icon: HeartHandshake,
    title: "Respect for every candidate",
    body: "Behind every booking is a scholarship, a job offer or a family reunion. We keep the process calm, courteous and on time.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Doors open",
    body: "Opened with a small testing room and a handful of candidates in the first month.",
  },
  {
    year: "2020",
    title: "Safer, spaced testing",
    body: "Reworked seating, scheduling and sanitation so candidates could keep their exam dates through lockdown.",
  },
  {
    year: "2022",
    title: "More exams hosted",
    body: "Expanded to SAT, ACT, GRE, GMAT and the professional English tests including OET and CELPIP.",
  },
  {
    year: "2024",
    title: "Migration tests",
    body: "Added SELT and CELPIP sittings as UK and Canadian routes became the most common requests.",
  },
  {
    year: "Today",
    title: "4,500+ candidates tested",
    body: "A trained team of invigilators and front-desk staff serving candidates across Imo State and the South-East.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={<><Sparkles className="h-3.5 w-3.5" /> About us</>}
        title="A secure, fair place to sit the exam that matters"
        subtitle={`${site.name} exists so candidates in Imo State and the South-East can sit international exams close to home, in a room built for the job.`}
        breadcrumb="About"
      />

      {/* ---------------------------------------------------------- Our story */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <Reveal direction="right" className="lg:col-span-7">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">
              We started because candidates were travelling hours — and paying heavily — just to sit a test
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-600">
              <p>
                Nigeria sends tens of thousands of students, nurses, engineers and families abroad
                every year. Almost all of them must first pass a standardised English or admissions
                test — and for many, the nearest test centre meant a long journey, a hotel and an
                anxious morning in an unfamiliar place.
              </p>
              <p>
                {site.name} exists to change that. We provide a secure, supervised, comfortable
                computer-based test room, check every candidate in carefully, and make sure the
                equipment, power and connection do exactly what they should.
              </p>
              <p>
                Today we host eleven major exams from our centre in {site.address.line2}. We do not
                write, mark or score any exam — that is always the exam board's job. Ours is to make
                test day run smoothly.
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
                Every candidate tests at their own{" "}
                <strong className="font-semibold">partitioned workstation</strong> with a tested
                headset, under the eye of a trained invigilator.
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
                To give every candidate a fair, secure and comfortable place to sit the exam standing
                between them and their next chapter — with careful check-in, reliable facilities and
                clear communication from booking to sign-out.
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
                To become the South-East's most trusted test centre — the one exam boards rely on to
                run sessions properly, and the one candidates choose for every exam in their career.
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
          title="From a small testing room to thousands of sittings"
          subtitle="A short history of how the centre grew, and the exams we added along the way."
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
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-brand-500  md:left-auto ${
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

      <CTABand
        title="Come and see the centre"
        subtitle="Walk-in visits are welcome during opening hours. See the testing room and meet the team before you book."
      />
    </>
  );
}
