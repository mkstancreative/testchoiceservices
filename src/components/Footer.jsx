import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "../data/site";
import { exams } from "../data/exams";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mesh-dark relative overflow-hidden text-navy-200">
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-page relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="font-display text-lg font-bold text-white">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              Registration and preparatory services for the world's leading English proficiency and
              admissions exams — delivered from Nigeria, recognised everywhere.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-navy-200 transition hover:border-brand-400 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-brand-300">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/registration" className="transition hover:text-brand-300">
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Exams</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {exams.map((e) => (
                <li key={e.id}>
                  <Link to={`/exams#${e.id}`} className="transition hover:text-brand-300">
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Reach us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={site.phoneHref} className="transition hover:text-brand-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={site.emailHref} className="break-all transition hover:text-brand-300">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Exam names and logos are trademarks of their respective owners. {site.shortName} is an
            independent registration and preparation provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
