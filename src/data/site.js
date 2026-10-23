// ---------------------------------------------------------------------------
// Single source of truth for brand + contact details.
// Change these values to rebrand the whole site.
// ---------------------------------------------------------------------------

export const site = {
  name: "Test Choice Services",
  shortName: "Test Choice",
  tagline: "Secure computer-based test centre · Owerri, Imo State",
  legalName: "Test Choice Services Nigeria Ltd",
  phone: "+234 906 675 5226",
  phoneHref: "tel:+2349066755226",
  whatsapp: "+234 906 675 5226",
  whatsappHref: "https://wa.me/2349066755226",
  email: "choiceserviceslimitedtest@gmail.com",
  emailHref: "mailto:choiceserviceslimitedtest@gmail.com",
  email2: "info@testchoiceservices.com",
  email2Href: "mailto:info@testchoiceservices.com",
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
  { label: "Test day", to: "/test-day" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: 11, suffix: "+", label: "Exams hosted" },
  { value: 4500, suffix: "+", label: "Candidates tested" },
  { value: 6, suffix: " days", label: "Test days per week" },
  { value: 100, suffix: "%", label: "Candidates ID-verified at check-in" },
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
