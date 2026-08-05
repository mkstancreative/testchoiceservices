import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Loader2,
  Send,
  ShieldCheck,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { exams } from "../data/exams";
import { site } from "../data/site";

// Point this at your form handler (Formspree, Getform, or your own API) to
// receive submissions. While it is null the form simulates a successful send.
const FORM_ENDPOINT = null;

const steps = [
  { id: 0, label: "Your details" },
  { id: 1, label: "Exam" },
  { id: 2, label: "Preparation" },
];

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  exam: "",
  targetScore: "",
  preferredDate: "",
  satBefore: "no",
  track: "classroom",
  purpose: "",
  message: "",
  consent: false,
};

// The exam name handed over from another page may be a parent exam ("PTE")
// rather than one of the selectable variants. Map it onto the matching option
// so the select does not open on a blank value.
function resolveExamOption(name) {
  if (!name) return "";
  const parent = exams.find((e) => e.variants && e.name === name);
  return parent ? `${parent.name} (version to be confirmed)` : name;
}

export default function Registration() {
  const location = useLocation();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    ...emptyForm,
    exam: resolveExamOption(location.state?.exam),
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const validateStep = (index) => {
    const next = {};

    if (index === 0) {
      if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
      if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
      if (form.phone.replace(/\D/g, "").length < 10)
        next.phone = "Enter a reachable phone number.";
      if (!form.city.trim()) next.city = "Which city are you in?";
    }

    if (index === 1) {
      if (!form.exam) next.exam = "Select the exam you want to sit.";
      if (!form.purpose.trim()) next.purpose = "Tell us what the score is for.";
    }

    if (index === 2) {
      if (!form.consent) next.consent = "Please confirm before submitting.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateStep(2)) return;

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
        // No endpoint configured yet — simulate the round trip.
        await new Promise((resolve) => setTimeout(resolve, 900));
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <>
        <PageHero
          eyebrow={<><ClipboardList className="h-3.5 w-3.5" /> Registration</>}
          title="Request received"
          subtitle="Thank you — your registration request is with our coordinators."
          breadcrumb="Registration"
        />

        <section className="container-page py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
            className="mx-auto max-w-2xl rounded-3xl border border-brand-200 bg-brand-50/60 p-10 text-center"
          >
            <motion.span
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-500 text-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
            >
              <CheckCircle2 className="h-10 w-10" />
            </motion.span>

            <h2 className="mt-7 font-display text-3xl font-bold text-navy-900">
              We will be in touch within one working day
            </h2>
            <p className="mt-4 leading-relaxed text-navy-600">
              A coordinator will confirm availability for{" "}
              <strong className="font-semibold text-navy-900">{form.exam || "your exam"}</strong>,
              send the fee breakdown, and recommend a preparation track based on your target score.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
                Need it sooner?
              </p>
              <p className="mt-2 text-sm text-navy-700">
                Call{" "}
                <a href={site.phoneHref} className="font-semibold text-brand-600 hover:underline">
                  {site.phone}
                </a>{" "}
                or message us on WhatsApp and quote your name — we can usually confirm a date the
                same day.
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/preparation" className="btn-dark">
                See preparation tracks <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setForm(emptyForm);
                  setStep(0);
                  setStatus("idle");
                }}
                className="btn border border-navy-200 text-navy-800 hover:border-brand-400 hover:text-brand-600"
              >
                Register someone else
              </button>
            </div>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={<><ClipboardList className="h-3.5 w-3.5" /> Registration</>}
        title="Register for your exam"
        subtitle="Three short steps. We will confirm availability, send the fee breakdown and recommend a preparation plan built around your deadline."
        breadcrumb="Registration"
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* --------------------------------------------------------- Form */}
          <Reveal className="lg:col-span-8">
            {/* Progress */}
            <ol className="flex items-center gap-2" aria-label="Progress">
              {steps.map((s, i) => (
                <li key={s.id} className="flex flex-1 items-center gap-2">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="h-1.5 overflow-hidden rounded-full bg-navy-100">
                      <motion.div
                        className="h-full rounded-full bg-brand-500"
                        initial={false}
                        animate={{ width: i <= step ? "100%" : "0%" }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      />
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        i <= step ? "text-brand-600" : "text-navy-400"
                      }`}
                    >
                      {i + 1}. {s.label}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-3xl border border-navy-100 bg-white p-7 shadow-sm sm:p-9"
              noValidate
            >
              <AnimatePresence mode="wait">
                {/* ------------------------------------------- Step 1 */}
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <h2 className="font-display text-xl font-bold text-navy-900">Your details</h2>

                    <div>
                      <label className="label" htmlFor="fullName">
                        Full name (as on your passport)
                      </label>
                      <input
                        id="fullName"
                        className="field"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Chinelo Adaeze Okafor"
                      />
                      <FieldError message={errors.fullName} />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="email">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="field"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@example.com"
                        />
                        <FieldError message={errors.email} />
                      </div>

                      <div>
                        <label className="label" htmlFor="phone">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="field"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+234 800 000 0000"
                        />
                        <FieldError message={errors.phone} />
                      </div>
                    </div>

                    <div>
                      <label className="label" htmlFor="city">
                        City
                      </label>
                      <input
                        id="city"
                        className="field"
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        placeholder="Lagos"
                      />
                      <FieldError message={errors.city} />
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------------------- Step 2 */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <h2 className="font-display text-xl font-bold text-navy-900">
                      Which exam do you need?
                    </h2>

                    <div>
                      <label className="label" htmlFor="exam">
                        Exam
                      </label>
                      <select
                        id="exam"
                        className="field"
                        value={form.exam}
                        onChange={(e) => update("exam", e.target.value)}
                      >
                        <option value="">Select an exam…</option>
                        {exams.map((e) =>
                          e.variants ? (
                            <optgroup key={e.id} label={`${e.name} — ${e.full}`}>
                              {e.variants.map((v) => (
                                <option key={v.name} value={v.name}>
                                  {v.name}
                                </option>
                              ))}
                              <option value={`${e.name} (version to be confirmed)`}>
                                Not sure which version — advise me
                              </option>
                            </optgroup>
                          ) : (
                            <option key={e.id} value={e.name}>
                              {e.name} — {e.full}
                            </option>
                          )
                        )}
                        <option value="Other">Other / not listed</option>
                      </select>
                      <FieldError message={errors.exam} />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="targetScore">
                          Target score or band{" "}
                          <span className="font-normal text-navy-400">(optional)</span>
                        </label>
                        <input
                          id="targetScore"
                          className="field"
                          value={form.targetScore}
                          onChange={(e) => update("targetScore", e.target.value)}
                          placeholder="e.g. Band 7.5 / 320 / CLB 9"
                        />
                      </div>

                      <div>
                        <label className="label" htmlFor="preferredDate">
                          Preferred exam date{" "}
                          <span className="font-normal text-navy-400">(optional)</span>
                        </label>
                        <input
                          id="preferredDate"
                          type="date"
                          className="field"
                          value={form.preferredDate}
                          onChange={(e) => update("preferredDate", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label" htmlFor="purpose">
                        What do you need the score for?
                      </label>
                      <input
                        id="purpose"
                        className="field"
                        value={form.purpose}
                        onChange={(e) => update("purpose", e.target.value)}
                        placeholder="Master's admission in the UK / Canadian PR / NMC registration"
                      />
                      <FieldError message={errors.purpose} />
                    </div>

                    <fieldset>
                      <legend className="label">Have you sat this exam before?</legend>
                      <div className="flex gap-3">
                        {[
                          { value: "no", label: "No, first attempt" },
                          { value: "yes", label: "Yes, retaking" },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition ${
                              form.satBefore === opt.value
                                ? "border-brand-500 bg-brand-50 text-brand-700"
                                : "border-navy-200 text-navy-600 hover:border-navy-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="satBefore"
                              value={opt.value}
                              checked={form.satBefore === opt.value}
                              onChange={(e) => update("satBefore", e.target.value)}
                              className="sr-only"
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </motion.div>
                )}

                {/* ------------------------------------------- Step 3 */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <h2 className="font-display text-xl font-bold text-navy-900">
                      Preparation &amp; anything else
                    </h2>

                    <fieldset>
                      <legend className="label">Preparation track you are interested in</legend>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          { value: "classroom", label: "Classroom group" },
                          { value: "one-to-one", label: "One-to-one intensive" },
                          { value: "online", label: "Live online" },
                          { value: "none", label: "Registration only" },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className={`cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition ${
                              form.track === opt.value
                                ? "border-brand-500 bg-brand-50 text-brand-700"
                                : "border-navy-200 text-navy-600 hover:border-navy-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="track"
                              value={opt.value}
                              checked={form.track === opt.value}
                              onChange={(e) => update("track", e.target.value)}
                              className="sr-only"
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label className="label" htmlFor="message">
                        Anything we should know?{" "}
                        <span className="font-normal text-navy-400">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="field resize-none"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Deadlines, previous scores, accessibility requirements…"
                      />
                    </div>

                    {/* Summary */}
                    <div className="rounded-2xl bg-navy-50/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-navy-500">
                        Summary
                      </p>
                      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                        {[
                          ["Name", form.fullName],
                          ["Email", form.email],
                          ["Phone", form.phone],
                          ["City", form.city],
                          ["Exam", form.exam],
                          ["Target", form.targetScore || "—"],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <dt className="text-xs text-navy-500">{k}</dt>
                            <dd className="font-medium text-navy-900">{v || "—"}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-navy-300 text-brand-600 focus:ring-brand-500"
                      />
                      <span className="text-sm text-navy-600">
                        I confirm these details are correct and consent to {site.name} contacting me
                        about this registration.
                      </span>
                    </label>
                    <FieldError message={errors.consent} />

                    {status === "error" && (
                      <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                        Something went wrong sending your request. Please try again, or call{" "}
                        {site.phone}.
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-9 flex items-center justify-between gap-4 border-t border-navy-100 pt-7">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className="btn text-navy-600 disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:text-brand-600"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>

                {step < steps.length - 1 ? (
                  <button type="button" onClick={goNext} className="btn-primary">
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Submit registration <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </Reveal>

          {/* ------------------------------------------------------- Sidebar */}
          <Reveal delay={0.15} direction="left" className="lg:col-span-4">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 p-7 text-white">
                <ShieldCheck className="h-9 w-9 text-brand-400" />
                <h3 className="mt-5 font-display text-lg font-bold">
                  How registration works here
                </h3>
                <ul className="mt-5 space-y-4 text-sm text-navy-200">
                  {[
                    "We confirm slot availability with the exam board before you pay anything.",
                    "You receive a written fee breakdown — no charges added afterwards.",
                    "We check your ID documents against the board's requirements.",
                    "Your confirmation and centre briefing are sent by email and WhatsApp.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-7">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Rather speak to someone?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  Our coordinators can walk you through the options and check dates while you are on
                  the call.
                </p>
                <a href={site.phoneHref} className="btn-dark mt-5 w-full">
                  Call {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn mt-3 w-full border border-navy-200 text-navy-800 hover:border-brand-400 hover:text-brand-600"
                >
                  Message on WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-gold-400/40 bg-gold-400/10 p-6">
                <p className="text-sm leading-relaxed text-navy-700">
                  <strong className="font-semibold">Note:</strong> exam board fees are set by the
                  board and paid at official rates. We charge separately for preparation services
                  only.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
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
