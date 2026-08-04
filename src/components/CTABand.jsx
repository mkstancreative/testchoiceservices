import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "../data/site";

export default function CTABand({
  title = "Ready to book your exam date?",
  subtitle = "Tell us the exam and the score you need. We will confirm availability, handle the registration and build a preparation plan around your deadline.",
}) {
  return (
    <section className="container-page py-20 lg:py-24">
      <Reveal>
        <div className="mesh-dark relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14 lg:py-20">
          <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
          <div
            className="animate-float absolute -left-16 top-4 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-200 sm:text-lg">{subtitle}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/registration" className="btn-primary">
                Start registration <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="btn-outline">
                <PhoneCall className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
