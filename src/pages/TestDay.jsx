import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Armchair,
  ArrowRight,
  BadgeCheck,
  Ban,
  CalendarClock,
  ClipboardCheck,
  Fingerprint,
  IdCard,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  Timer,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import CTABand from "../components/CTABand";

const timeline = [
  {
    icon: CalendarClock,
    when: "Before test day",
    title: "Confirm and prepare your documents",
    body: "You receive a booking confirmation with your exam, date, session and arrival time. Check that the name on your ID matches your booking exactly.",
  },
  {
    icon: IdCard,
    when: "Arrival · 30–45 min before",
    title: "Check-in at reception",
    body: "Present your valid, original ID. Staff verify your booking and identity, and some exams require a photo or biometric capture.",
  },
  {
    icon: Lock,
    when: "Before entering",
    title: "Store your belongings",
    body: "Phones, bags, notes, watches and other personal items go into a secure locker. Only items permitted by your exam board enter the testing room.",
  },
  {
    icon: Armchair,
    when: "Seating",
    title: "Your assigned station",
    body: "An invigilator seats you at a partitioned workstation, checks your headset and gives the rules briefing before the exam launches.",
  },
  {
    icon: Timer,
    when: "The test",
    title: "Sit the exam",
    body: "You test under supervision in a quiet room. If you have a technical problem, raise your hand — the invigilator logs it and restores your session.",
  },
  {
    icon: ClipboardCheck,
    when: "After the test",
    title: "Sign out and results",
    body: "You sign out at reception. Scores are released by the exam board on its own schedule; we cannot see or change them.",
  },
];

const bring = [
  "Valid original photo ID — the same one you booked with",
  "Your booking confirmation (printed or on your phone before you store it)",
  "Any exam-board admission letter or ticket, where your exam issues one",
  "Light clothing layers — the room can be cool",
];

const prohibited = [
  "Phones, smartwatches, earbuds and cameras in the testing room",
  "Bags, books, notes, paper and pens unless your exam provides them",
  "Food and drink at the station (water may be allowed in some sessions)",
  "Talking, sharing answers or leaving your seat without permission",
  "Any attempt to record, copy or share exam content",
];

const policies = [
  {
    icon: ShieldCheck,
    title: "Integrity & security",
    body: "Test content is confidential. Misconduct is reported to the exam board, which may cancel scores and bar future bookings.",
  },
  {
    icon: Fingerprint,
    title: "Identity",
    body: "We cannot seat you without acceptable ID. Name, photo and expiry must be valid on the day. No ID means no test.",
  },
  {
    icon: CalendarClock,
    title: "Rescheduling & cancelling",
    body: "Changes are governed by the exam board's deadlines and fees. Tell us as early as you can — contact the centre and we will explain what applies to your exam.",
  },
  {
    icon: Ban,
    title: "Late arrival",
    body: "Sessions start on schedule. Candidates who arrive after check-in closes may not be admitted, and the exam board may treat the booking as used.",
  },
];

const faqs = [
  {
    q: "How early should I arrive?",
    a: "Plan for 30 to 45 minutes before your start time, unless your confirmation says otherwise. Check-in, ID verification and locker storage all happen before you enter.",
  },
  {
    q: "Which IDs are accepted?",
    a: "Each exam board sets its own ID rules; an original, valid international passport is the safest choice for most exams. Ask us before booking if you only have another ID.",
  },
  {
    q: "Can I take a break during the exam?",
    a: "Only where your exam includes scheduled breaks, and under the board's rules. Leaving the room outside a break may count against your session.",
  },
  {
    q: "What if the computer or power fails?",
    a: "Our stations run on backup power with stable connectivity. If something does go wrong, the invigilator logs the incident and the exam board decides how your session is restored.",
  },
  {
    q: "I need a testing accommodation.",
    a: "Tell us when you book. Many accommodations — extra time, assistive technology, an accessible station — must be approved by the exam board before test day, so start early.",
  },
  {
    q: "When do I get my results?",
    a: "The exam board releases results and sends them to you directly — timing depends on the exam, from about two days to a few weeks. The centre does not mark or alter scores.",
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

export default function TestDay() {
  return (
    <>
      <PageHero
        eyebrow={<><ClipboardCheck className="h-3.5 w-3.5" /> Test day guide</>}
        title="Know exactly what happens on the day you test"
        subtitle="From the moment you arrive to the moment you sign out — what to bring, what to leave behind and what the rules are."
        breadcrumb="Test day"
      />

      {/* ------------------------------------------------------------ Timeline */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Your test day"
          title="Six stages, no surprises"
          subtitle="The flow is the same for every candidate and every exam, so there is nothing to guess."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((t, i) => (
            <RevealItem key={t.title}>
              <div className="card h-full">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <t.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-bold text-navy-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-brand-600">
                  {t.when}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-900">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{t.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ---------------------------------------------------- Bring / Leave out */}
      <section className="mesh-dark relative overflow-hidden py-20 lg:py-28">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading
            dark
            eyebrow="Checklist"
            title="What to bring — and what stays outside"
            subtitle="Exam boards set the final rules for each test; this is the standard for our centre."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal direction="right">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
                <h3 className="font-display text-xl font-bold text-white">Bring</h3>
                <ul className="mt-6 space-y-4">
                  {bring.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                      <span className="text-sm text-navy-200">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
                <h3 className="font-display text-xl font-bold text-white">Not allowed in the room</h3>
                <ul className="mt-6 space-y-4">
                  {prohibited.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Ban className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                      <span className="text-sm text-navy-200">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Policies */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Centre policies"
          title="The rules that keep every result credible"
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {policies.map((p) => (
            <RevealItem key={p.title}>
              <div className="card h-full">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* ----------------------------------------------------------------- FAQ */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="Questions" title="What candidates ask before test day" />

          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 text-center">
            <p className="text-sm text-navy-600">
              Something not covered?{" "}
              <Link to="/contact" className="font-semibold text-brand-600 hover:underline">
                Ask the front desk
              </Link>{" "}
              <ArrowRight className="inline h-3.5 w-3.5" />
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Ready to reserve your seat?"
        subtitle="Pick your exam and a preferred date. We confirm availability and send your check-in instructions."
      />
    </>
  );
}
