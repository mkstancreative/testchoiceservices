// ---------------------------------------------------------------------------
// Single source of truth for brand + contact details.
// Change these values to rebrand the whole site.
// ---------------------------------------------------------------------------

export const site = {
  name: "Test Choice Services",
  shortName: "Test Choice",
  tagline: "Nigeria's trusted exam registration & preparation centre",
  legalName: "Test Choice Services Nigeria Ltd",
  phone: "+234 906 675 5226",
  phoneHref: "tel:+2348020000000",
  whatsapp: "+234 906 675 5226",
  whatsappHref: "https://wa.me/2348020000000",
  email: "choiceserviceslimitedtest@gmail.com",
  emailHref: "mailto:choiceserviceslimitedtest@gmail.com",
  address: {
    line1: "Block 49, L'arcade Shopping Complex, Okohia Layout Area L, World Bank, ",
    line2: "Owerri Municipal, Imo State",
  },
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "X (Twitter)", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  // Google Maps embed — replace the q= value with the real centre address.
  mapEmbed:
    "https://www.google.com/maps?q=TEST+CHOICE+SERVICES+LIMITED,+Area+L,+World+Bank,+Block+49,+L'arcade+Shopping+Complex,+Okohia+Layout,+Owerri,+Imo&output=embed",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Exams", to: "/exams" },
  { label: "Preparation", to: "/preparation" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: 11, suffix: "+", label: "Exams supported" },
  { value: 4500, suffix: "+", label: "Candidates registered" },
  { value: 96, suffix: "%", label: "First-attempt pass rate" },
  { value: 12, suffix: "yrs", label: "Combined tutor experience" },
];

export const partners = [
  "ETS",
  "Pearson VUE",
  "British Council",
  "IDP Education",
  "Duolingo",
  "Prometric",
  "College Board",
  "Paragon Testing",
];
