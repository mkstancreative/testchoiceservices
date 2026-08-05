// ---------------------------------------------------------------------------
// Exam catalogue. Fees are intentionally left as "On request" because exam
// board pricing changes often — update `fee` per exam when you publish rates.
//
// `variants` is optional: use it when a board runs several versions of the same
// exam (PTE Academic / Core / Academic UKVI, IELTS Academic / General Training).
// Candidates pick the variant by name on the registration form.
// ---------------------------------------------------------------------------

export const categories = [
  { id: "all", label: "All exams" },
  { id: "english", label: "English proficiency" },
  { id: "academic", label: "Academic admissions" },
  { id: "professional", label: "Professional & migration" },
];

export const exams = [
  {
    id: "toefl",
    name: "TOEFL iBT",
    full: "Test of English as a Foreign Language",
    category: "english",
    board: "ETS",
    accent: "from-sky-500 to-blue-700",
    summary:
      "The most widely accepted academic English test for study in the United States, Canada and over 160 other countries.",
    duration: "About 2 hours",
    format: "Computer-based · Reading, Listening, Speaking, Writing",
    scoring: "0 – 120 (four sections of 30)",
    validity: "2 years",
    fee: "On request",
    acceptedBy: ["US universities", "Canadian institutions", "UK & EU schools"],
    highlights: [
      "Shortened 2-hour format with faster score release",
      "Section-by-section coaching from certified tutors",
      "Full-length mock tests scored against ETS rubrics",
    ],
  },
  {
    id: "ielts",
    name: "IELTS",
    full: "International English Language Testing System",
    category: "english",
    board: "British Council / IDP",
    accent: "from-rose-500 to-red-700",
    summary:
      "Academic and General Training modules for study, work and migration to the UK, Australia, Canada and New Zealand.",
    duration: "2 hours 45 minutes",
    format: "Paper or computer-delivered · Face-to-face Speaking",
    scoring: "Band 1 – 9",
    validity: "2 years",
    fee: "On request",
    acceptedBy: ["UKVI", "Australian immigration", "11,000+ institutions"],
    variants: [
      {
        name: "IELTS Academic",
        note: "For university admission and professional registration — the Reading and Writing tasks use academic material.",
      },
      {
        name: "IELTS General Training",
        note: "For migration to the UK, Australia, Canada and New Zealand, plus work and secondary education — everyday and workplace material.",
      },
    ],
    highlights: [
      "Academic and General Training pathways",
      "Live Speaking rehearsals with examiner-style feedback",
      "Band-9 model answers for Writing Task 1 and 2",
    ],
  },
  {
    id: "pte",
    name: "PTE",
    full: "Pearson Test of English",
    category: "english",
    board: "Pearson",
    accent: "from-violet-500 to-purple-700",
    summary:
      "A fully computer-scored English test with results typically available within 48 hours — ideal for tight application deadlines.",
    duration: "About 2 hours",
    format: "Computer-based · AI scored, no human examiner",
    scoring: "10 – 90 (Global Scale of English)",
    validity: "2 years",
    fee: "On request",
    acceptedBy: ["Australia", "New Zealand", "UK Visas & Immigration", "IRCC Canada"],
    variants: [
      {
        name: "PTE Academic",
        note: "For university admission and study visas — academic content, accepted by institutions in Australia, New Zealand, the UK, Canada and the US.",
      },
      {
        name: "PTE Core",
        note: "General rather than academic English, approved by IRCC for Canadian economic immigration and used for work and professional routes.",
      },
      {
        name: "PTE Academic UKVI",
        note: "The Home Office approved SELT version, taken at a UKVI-approved centre under secure identity conditions for UK visa applications.",
      },
    ],
    highlights: [
      "Rapid results — usually inside two days",
      "Guidance on choosing between Academic, Core and Academic UKVI",
      "Template-driven strategies for Speaking and Writing",
      "Unlimited scored practice on Pearson-style software",
    ],
  },
  {
    id: "selt",
    name: "SELT",
    full: "Secure English Language Test (UKVI)",
    category: "professional",
    board: "UKVI approved providers",
    accent: "from-indigo-500 to-navy-800",
    summary:
      "UK Home Office approved tests required for visa and settlement applications, delivered under secure identity conditions.",
    duration: "Varies by CEFR level",
    format: "Secure centre delivery · Speaking, Listening (+ Reading/Writing)",
    scoring: "CEFR A1 – C2",
    validity: "2 years",
    fee: "On request",
    acceptedBy: ["UK Visas & Immigration", "UK settlement routes"],
    highlights: [
      "Guidance on the correct CEFR level for your visa route",
      "Identity and documentation checks handled end-to-end",
      "Interview-style Speaking practice under exam conditions",
    ],
  },
  {
    id: "oet",
    name: "OET",
    full: "Occupational English Test",
    category: "professional",
    board: "Cambridge Boxhill",
    accent: "from-teal-500 to-emerald-700",
    summary:
      "Healthcare-specific English for nurses, doctors, pharmacists and allied professionals seeking registration abroad.",
    duration: "About 3 hours",
    format: "Profession-specific tasks across all four skills",
    scoring: "Grade A – E (0 – 500)",
    validity: "2 years",
    fee: "On request",
    acceptedBy: ["NMC UK", "AHPRA Australia", "Irish & NZ boards"],
    highlights: [
      "Clinical role-plays for 12 healthcare professions",
      "Referral letter and case-note writing clinics",
      "Tutors experienced with NMC and AHPRA requirements",
    ],
  },
  {
    id: "duolingo",
    name: "Duolingo English Test",
    full: "Duolingo English Test (DET)",
    category: "english",
    board: "Duolingo",
    accent: "from-lime-500 to-green-700",
    summary:
      "An affordable, at-home adaptive English test accepted by thousands of universities, with results in about two days.",
    duration: "About 1 hour",
    format: "Online, on-demand · Adaptive with video interview",
    scoring: "10 – 160",
    validity: "2 years",
    fee: "On request",
    acceptedBy: ["5,000+ universities worldwide"],
    highlights: [
      "Set up and rehearse under real proctoring conditions",
      "Drills for every adaptive question type",
      "Video interview and writing sample coaching",
    ],
  },
  {
    id: "sat",
    name: "SAT",
    full: "Scholastic Assessment Test",
    category: "academic",
    board: "College Board",
    accent: "from-amber-500 to-orange-700",
    summary:
      "The digital SAT for undergraduate admission and scholarship consideration at US and international universities.",
    duration: "2 hours 14 minutes",
    format: "Digital adaptive · Reading & Writing, Math",
    scoring: "400 – 1600",
    validity: "5 years",
    fee: "On request",
    acceptedBy: ["US colleges", "Scholarship boards", "Global universities"],
    highlights: [
      "Bluebook-style adaptive practice tests",
      "Desmos calculator and Math module strategy",
      "Scholarship-focused score targeting",
    ],
  },
  {
    id: "act",
    name: "ACT",
    full: "American College Testing",
    category: "academic",
    board: "ACT Inc.",
    accent: "from-orange-500 to-red-700",
    summary:
      "A curriculum-based US admissions test covering English, Maths, Reading and Science, with an optional Writing section.",
    duration: "About 3 hours",
    format: "Multiple choice · Optional essay",
    scoring: "1 – 36 composite",
    validity: "5 years",
    fee: "On request",
    acceptedBy: ["All US universities", "Selected global institutions"],
    highlights: [
      "Science reasoning technique — the section most candidates fear",
      "Pacing drills built for the ACT's tight timing",
      "SAT vs ACT diagnostic before you commit",
    ],
  },
  {
    id: "gre",
    name: "GRE General",
    full: "Graduate Record Examinations",
    category: "academic",
    board: "ETS",
    accent: "from-cyan-500 to-sky-700",
    summary:
      "Required for master's and doctoral admission across a wide range of graduate programmes worldwide.",
    duration: "1 hour 58 minutes",
    format: "Computer adaptive · Verbal, Quant, Analytical Writing",
    scoring: "260 – 340 plus 0 – 6 writing",
    validity: "5 years",
    fee: "On request",
    acceptedBy: ["Graduate schools", "Business schools", "Law schools"],
    highlights: [
      "High-frequency vocabulary system, not endless word lists",
      "Quant refresher from fundamentals upward",
      "Issue and Argument essay frameworks",
    ],
  },
  {
    id: "gmat",
    name: "GMAT Focus",
    full: "Graduate Management Admission Test",
    category: "academic",
    board: "GMAC",
    accent: "from-blue-600 to-indigo-800",
    summary:
      "The business school standard, now in the shorter GMAT Focus Edition with Data Insights replacing the essay.",
    duration: "2 hours 15 minutes",
    format: "Adaptive · Quant, Verbal, Data Insights",
    scoring: "205 – 805",
    validity: "5 years",
    fee: "On request",
    acceptedBy: ["MBA programmes", "Masters in Management", "Finance schools"],
    highlights: [
      "Full coverage of the new Data Insights section",
      "Critical Reasoning and Data Sufficiency mastery",
      "Question review and section-order strategy",
    ],
  },
  {
    id: "celpip",
    name: "CELPIP",
    full: "Canadian English Language Proficiency Index Program",
    category: "professional",
    board: "Paragon Testing",
    accent: "from-red-500 to-rose-700",
    summary:
      "Canada's fully computer-delivered English test for permanent residence, citizenship and professional designation.",
    duration: "About 3 hours",
    format: "Fully computer-delivered · Canadian English",
    scoring: "CELPIP level 1 – 12",
    validity: "2 years",
    fee: "On request",
    acceptedBy: ["IRCC Canada", "Canadian professional bodies"],
    highlights: [
      "Everyday Canadian English scenarios and accents",
      "Timed typing practice for the Writing tasks",
      "CLB level mapping for Express Entry points",
    ],
  },
];

export const otherExams = [
  "NCLEX-RN",
  "PMP",
  "CFA",
  "ACCA",
  "ISACA (CISA / CISM)",
  "AWS Certification",
  "CompTIA",
  "LSAT",
  "MCAT",
  "USMLE",
];
