import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../components/Reveal";
import { site } from "../data/site";

// Set this to your form handler URL to receive messages.
const FORM_ENDPOINT = null;

const channels = [
  {
    icon: Phone,
    title: "Call us",
    lines: [site.phone],
    href: site.phoneHref,
    cta: "Ring the centre",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    lines: [site.whatsapp],
    href: site.whatsappHref,
    cta: "Start a chat",
    external: true,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [site.email],
    href: site.emailHref,
    cta: "Send an email",
  },
  {
    icon: MapPin,
    title: "Visit",
    lines: [site.address.line1, site.address.line2],
    cta: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "A little more detail helps us reply well.";

    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus("done");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow={<><MessageSquare className="h-3.5 w-3.5" /> Contact</>}
        title="Talk to a coordinator — not a chatbot"
        subtitle="Tell us the exam, the score you need and your deadline. We reply within one working day, usually much sooner."
        breadcrumb="Contact"
      />

      {/* ------------------------------------------------------------ Channels */}
      <section className="container-page py-16 lg:py-20">
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <RevealItem key={c.title}>
              <div className="card flex h-full flex-col">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{c.title}</h3>
                <div className="mt-2 flex-1 space-y-0.5">
                  {c.lines.map((l) => (
                    <p key={l} className="break-words text-sm text-navy-600">
                      {l}
                    </p>
                  ))}
                </div>
                {c.cta && (
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="mt-5 text-sm font-semibold text-brand-600 transition hover:underline"
                  >
                    {c.cta} →
                  </a>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* -------------------------------------------------------- Form + hours */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal direction="right" className="lg:col-span-7">
            <div className="rounded-3xl border border-navy-100 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-2xl font-bold text-navy-900">Send us a message</h2>
              <p className="mt-2 text-sm text-navy-600">
                For exam bookings, the{" "}
                <Link to="/registration" className="font-semibold text-brand-600 hover:underline">
                  registration form
                </Link>{" "}
                gets you a faster answer.
              </p>

              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 rounded-2xl border border-brand-200 bg-brand-50/60 p-8 text-center"
                  >
                    <motion.span
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                    >
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.span>
                    <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                      Message sent
                    </h3>
                    <p className="mt-2 text-sm text-navy-600">
                      We will reply within one working day. Need it faster? Call {site.phone}.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="btn-dark mt-6"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="c-name">
                          Your name
                        </label>
                        <input
                          id="c-name"
                          className="field"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Full name"
                        />
                        <FieldError message={errors.name} />
                      </div>
                      <div>
                        <label className="label" htmlFor="c-email">
                          Email address
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          className="field"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@example.com"
                        />
                        <FieldError message={errors.email} />
                      </div>
                    </div>

                    <div>
                      <label className="label" htmlFor="c-subject">
                        Subject <span className="font-normal text-navy-400">(optional)</span>
                      </label>
                      <input
                        id="c-subject"
                        className="field"
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        placeholder="IELTS preparation enquiry"
                      />
                    </div>

                    <div>
                      <label className="label" htmlFor="c-message">
                        Message
                      </label>
                      <textarea
                        id="c-message"
                        rows={6}
                        className="field resize-none"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Which exam, the score you need, and your deadline."
                      />
                      <FieldError message={errors.message} />
                    </div>

                    {status === "error" && (
                      <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                        Your message did not send. Please try again or email {site.email}.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send message <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.12} className="lg:col-span-5">
            <div className="space-y-5">
              <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white">
                <Clock className="h-9 w-9 text-brand-400" />
                <h3 className="mt-5 font-display text-xl font-bold">Opening hours</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-navy-300">{h.day}</span>
                      <span className="font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs leading-relaxed text-navy-400">
                  Exam and mock sessions sometimes run outside these hours — your coordinator will
                  confirm your specific schedule.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white">
                <iframe
                  title={`Map showing ${site.name}`}
                  src={site.mapEmbed}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy-900">Find the centre</h3>
                  <p className="mt-2 text-sm text-navy-600">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Before you write"
          title="Quick answers to the most common enquiries"
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              q: "How soon can I sit an exam?",
              a: "It depends on the board and your city. Duolingo and PTE can often be arranged within days; IELTS and TOEFL usually need one to three weeks. Tell us your deadline and we will find the earliest workable date.",
            },
            {
              q: "Do you accept walk-ins?",
              a: "Yes, during opening hours. If you want to sit a diagnostic mock on the same visit, call ahead so we can reserve a station for you.",
            },
            {
              q: "Can you help candidates outside Lagos?",
              a: "Absolutely. Registration is handled remotely and our live online classes run evening and weekend cohorts for candidates anywhere in Nigeria or abroad.",
            },
          ].map((f) => (
            <RevealItem key={f.q}>
              <div className="card h-full">
                <h3 className="font-display text-base font-bold text-navy-900">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{f.a}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}

function FieldError({ message }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          key={message}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 overflow-hidden text-xs font-medium text-red-600"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
