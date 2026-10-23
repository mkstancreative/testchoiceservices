import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Layers } from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import CTABand from "../components/CTABand";
import { comingSoon, exams } from "../data/exams";

export default function Exams() {
  return (
    <>
      <PageHero
        eyebrow={<><Layers className="h-3.5 w-3.5" /> Exam catalogue</>}
        title="Sit TOEFL iBT at a secure centre in Owerri."
        subtitle={`Book a seat on a date that suits your deadline. ${comingSoon.join(", ")} and others coming soon.`}
        breadcrumb="Exams"
      />

      {/* -------------------------------------------------- Detailed sections */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="In detail"
            title="What the exam involves, and how it runs at our centre"
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

                      {exam.variants && (
                        <>
                          <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-navy-900">
                            Which version do you need?
                          </h4>
                          <ul className="mt-4 space-y-3">
                            {exam.variants.map((v) => (
                              <li
                                key={v.name}
                                className="rounded-xl border border-navy-100 bg-navy-50/50 p-4"
                              >
                                <p className="font-display text-sm font-bold text-navy-900">
                                  {v.name}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-navy-600">
                                  {v.note}
                                </p>
                                <Link
                                  to="/book"
                                  state={{ exam: v.name }}
                                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 transition-all hover:gap-3 hover:text-brand-600"
                                >
                                  Book {v.name} <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-navy-900">
                        At our centre
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {exam.atCentre.map((h) => (
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
                          to="/book"
                          state={{ exam: exam.name }}
                          className="btn-primary"
                        >
                          Book {exam.name} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/test-day" className="btn-dark">
                          Test-day guide
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

      {/* --------------------------------------------------------- Coming soon */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Coming soon"
          title={`${comingSoon.join(", ")} and others coming soon`}
          subtitle="We are preparing to host more exams at our centre. Get in touch and we will let you know as soon as bookings open."
        />

        <RevealGroup className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {[...comingSoon, "and others"].map((name) => (
            <RevealItem key={name}>
              <span className="inline-block rounded-full border border-dashed border-navy-200 bg-white px-5 py-2.5 text-sm font-medium text-navy-500">
                {name}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link to="/contact" className="btn-dark">
            Ask to be notified <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <CTABand />
    </>
  );
}
