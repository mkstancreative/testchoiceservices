import { partners } from "../data/site";

/** Infinite logo strip. Duplicated once so the -50% keyframe loops seamlessly. */
export default function PartnerMarquee() {
  const row = [...partners, ...partners];

  return (
    <div className="marquee relative overflow-hidden border-y border-navy-100 bg-navy-50/60 py-8">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-50 to-transparent"
        aria-hidden="true"
      />

      <div className="marquee-track flex w-max items-center gap-14 px-7">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-lg font-semibold text-navy-400 transition-colors duration-300 hover:text-brand-600 sm:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
