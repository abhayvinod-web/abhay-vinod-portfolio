import { FixMyItchProject, SkillCategory, AcademicDetails } from '../types';

export const PERSONAL_INFO = {
  name: "Abhay Vinod",
  role: "Software & UI Engineer",
  email: "abhayvinod544@gmail.com",
  phone: "+91 8867170017",
  location: "Bengaluru, India",
  headline: "Building high-performance, resilient, and accessible software & web interfaces.",
  shortBio: "Passionate engineer focused on building fluid, state-resilient user experiences using React, TypeScript, and modern system architecture. Proven ability to translate complex product problem statements into functional, interactive prototypes.",
  status: "Open to New Opportunities",
  github: "https://github.com/abhayvinod",
  linkedin: "https://linkedin.com/in/abhay-vinod",
  stats: [
    { label: "Working Prototypes", value: "6+" },
    { label: "Core Technologies", value: "10+" },
    { label: "Academic Journey", value: "2025–2029" },
    { label: "Commitment to Code Quality", value: "100%" }
  ]
};

export const ABOUT_DETAILS = {
  summary: "I am a Computer Science undergraduate with a deep focus on frontend engineering. I specialize in building reactive, accessible, and resilient web applications that solve real-world UX and product bottlenecks.",
  philosophy: [
    {
      title: "Resilient State Architecture",
      description: "Handling asynchronous payment states, optimistic UI updates, and intelligent network fallbacks without losing user context.",
      icon: "ShieldCheck"
    },
    {
      title: "Design System & Micro-Interactions",
      description: "Creating modular, reusable components with semantic HTML, Tailwind CSS, and polished motion feedback.",
      icon: "LayoutTemplate"
    },
    {
      title: "Performance & Accessibility",
      description: "Ensuring sub-second interactive speeds, responsive layouts across devices, and intuitive keyboard navigation.",
      icon: "Zap"
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "Core Frontend & Languages",
    iconName: "Code2",
    skills: [
      { name: "React (v18 & v19)", level: "Proficient", highlight: "Hooks, Context, Custom Hooks, Optimization" },
      { name: "TypeScript", level: "Proficient", highlight: "Strict typing, Generics, Component Props & State types" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: "Async/Await, Closures, Event Loop, DOM API" },
      { name: "HTML5 & Semantic Web", level: "Advanced", highlight: "Accessibility (a11y), SEO-friendly structure" }
    ]
  },
  {
    categoryName: "Styling & UI Systems",
    iconName: "Palette",
    skills: [
      { name: "Tailwind CSS", level: "Advanced", highlight: "Utility-first design, dark mode, responsive layouts" },
      { name: "CSS3 / Modern CSS", level: "Advanced", highlight: "Flexbox, Grid, Custom Properties, Animations" },
      { name: "Framer Motion / Motion", level: "Proficient", highlight: "Layout animations, page transitions, micro-interactions" },
      { name: "Responsive Design", level: "Advanced", highlight: "Mobile-first layouts, cross-browser compatibility" }
    ]
  },
  {
    categoryName: "Developer Tools & Workflow",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Proficient", highlight: "Version control, branching, PR workflows" },
      { name: "Vite & Build Tools", level: "Proficient", highlight: "Module bundling, modern dev environment configuration" },
      { name: "Browser DevTools", level: "Proficient", highlight: "Network throttling, performance auditing, debugging" },
      { name: "Component Architecture", level: "Advanced", highlight: "Atomic design, clean separation of concerns" }
    ]
  }
];

export const FIX_MY_ITCH_PROJECTS: FixMyItchProject[] = [
  {
    id: "checkout-recovery",
    prototypeId: "checkout-recovery",
    title: "Smart Checkout Downtime Resilience & One-Click Auto-Retry",
    tagline: "Preventing cart drop-offs during bank gateway outages with intelligent fallback routing.",
    category: "Payment UX & Resilience",
    sourceUrl: "https://razorpay.com/m/fix-my-itch/#all-problems",
    badge: "Razorpay Fix-My-Itch #1",
    impactMetric: "+28% Estimated Checkout Recovery",
    problemStatement: "During high-traffic checkout events, bank payment gateways frequently experience temporary server timeouts or OTP latency. Traditional checkout forms fail abruptly, clearing the user's payment state and forcing them to start the checkout from scratch, causing massive abandonment.",
    frictionPoints: [
      "No real-time visibility into whether a specific bank or UPI rail is degraded before initiating payment.",
      "Abrupt failure screens without retaining transaction payload or allowing immediate 1-click alternative method retry.",
      "Frustrating OTP input experience when SMS arrival is delayed or network is flaky."
    ],
    solutionOverview: "Engineered a state-resilient checkout interface equipped with live bank health telemetry, zero-reload idempotency preservation, one-click fallback method switching, and simulated auto-reading OTP countdown with smart error recovery.",
    keyFeatures: [
      "Live Gateway Health Telemetry displaying real-time bank uptime and dynamic recommendations.",
      "Smart Fallback Engine that preserves order state and switches payment instrument (UPI -> Cards -> NetBanking) in 1 click.",
      "Interactive Failure Simulator allowing recruiters to simulate bank outages, network timeouts, or OTP drops.",
      "Instant verified transaction receipt generation and status verification."
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Lucide Icons", "Web Audio Feedback"],
    architectureNotes: "Built using a finite-state machine (Idle -> HealthCheck -> Processing -> SimFailure -> FallbackSwitch -> RecoverySuccess) to ensure deterministic UI states with zero memory leaks."
  },
  {
    id: "instant-settlement",
    prototypeId: "instant-settlement",
    title: "Instant Settlement & Micro-Cashflow Predictor for D2C Merchants",
    tagline: "Empowering merchants with real-time settlement transparency and on-demand payout controls.",
    category: "Merchant Financial Dashboard",
    sourceUrl: "https://razorpay.com/m/fix-my-itch/#all-problems",
    badge: "Razorpay Fix-My-Itch #2",
    impactMetric: "< 5s Instant Payout Time",
    problemStatement: "Small business and D2C merchants face constant cash-flow uncertainty waiting for standard T+2 payment gateway settlements. Additionally, complex deduction fees (MDR, GST, refunds) are obscure, leading to reconciliation errors and manual support tickets.",
    frictionPoints: [
      "Lack of instant access to accumulated working capital during urgent inventory or supplier payments.",
      "Opaque fee breakdowns make it difficult to forecast net settlement amounts accurately.",
      "No granular audit trail to simulate and visualize the impact of instant payout fees before committing."
    ],
    solutionOverview: "Developed an interactive merchant settlement console featuring dynamic fee-split calculations, an on-demand slider for custom instant payout amounts with live net-amount previews, transaction search/filter table, and audit trail export.",
    keyFeatures: [
      "Interactive Instant Payout Slider with real-time dynamic fee calculation and net bank payout preview.",
      "Real-time Settlement Ledger with multi-criteria status filtering (Settled, Pending, Processing).",
      "Instant Disbursement simulation with animated bank transfer confirmation and celebratory feedback.",
      "Exportable CSV summary and breakdown of MDR and platform fee adjustments."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Canvas Confetti", "Client-side CSV generator"],
    architectureNotes: "State management handles real-time balance calculations, optimistic ledger updates, and deterministic payout fee tiers without server round-trip latency."
  },
  {
    id: "subscription-mandate",
    prototypeId: "subscription-mandate",
    title: "Recurring Mandate & Subscription Self-Service Management Portal",
    tagline: "Eliminating involuntary churn by giving subscribers full control over recurring auto-debits.",
    category: "Customer Self-Service & Mandates",
    sourceUrl: "https://razorpay.com/m/fix-my-itch/#all-problems",
    badge: "Razorpay Fix-My-Itch #3",
    impactMetric: "-35% Involuntary Churn Reduction",
    problemStatement: "Over 30% of subscription cancellations are accidental or involuntary, driven by expired cards, mandate limits, or lack of an easy way for customers to pause services temporarily rather than canceling permanently.",
    frictionPoints: [
      "Subscribers are forced to contact support or completely cancel recurring plans just to take a temporary break.",
      "Replacing an expired payment card requires creating a brand new subscription, resetting billing cycles.",
      "No transparent view of upcoming scheduled auto-debits or ability to set custom monthly spending limits."
    ],
    solutionOverview: "Designed an intuitive customer self-service mandate portal where users can pause/resume active plans in 1-click, adjust monthly spending ceilings, swap backup payment instruments seamlessly, and track automated debit histories.",
    keyFeatures: [
      "One-click Pause & Resume mandate state machine with dynamic billing cycle adjustment.",
      "Granular Spending Cap Slider allowing subscribers to protect against unexpected auto-charges.",
      "Instant Payment Instrument Switcher (UPI Autopay, Credit/Debit Card, e-Mandate) with input validation.",
      "Upcoming auto-debit countdown schedule and transaction ledger with instant status triggers."
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Lucide Icons"],
    architectureNotes: "Implements optimistic mandate state switching with simulated two-factor safety authorization modals and localized history logging."
  },
  {
    id: "cod-rto-risk",
    prototypeId: "cod-rto-risk",
    title: "COD Return-to-Origin (RTO) Predictor & Instant UPI Pre-Pay Engine",
    tagline: "Protecting D2C margins by predicting parcel refusal risks and incentivizing UPI conversions.",
    category: "E-Commerce Logistics & Fraud Prevention",
    sourceUrl: "https://razorpay.com/m/fix-my-itch/#all-problems",
    badge: "Razorpay Fix-My-Itch #4",
    impactMetric: "-34% Courier Freight Losses",
    problemStatement: "In Indian D2C commerce, 30% to 40% of Cash-on-Delivery (COD) orders bounce back as Return-to-Origin (RTO) due to buyer non-acceptance or bogus addresses, costing merchants ₹120–₹160 per failed shipment.",
    frictionPoints: [
      "No pre-dispatch intelligence to identify whether a COD order is high-risk before handing it over to logistics.",
      "Standard checkouts treat all COD shoppers equally, with zero incentive to convert to prepaid at checkout.",
      "Lack of real-time address validation results in parcels dispatched to unserviceable or vague locations."
    ],
    solutionOverview: "Engineered a live RTO risk telemetry engine calculating multi-factor scores (pincode tier, address quality, phone history) with dynamic checkout interventions, smart COD handling fees, and 1-click UPI pre-pay savings.",
    keyFeatures: [
      "Dynamic 0-100 RTO Risk Scoring engine evaluating pincode accessibility and NLP address completeness.",
      "Smart Checkout Interventions: Automatically applies ₹150 COD risk protection or suggests UPI savings.",
      "Interactive Courier Simulation: Compare doorstep delivery vs RTO rejection logistics costs in real-time.",
      "Prevented merchant loss analytics calculating accumulated freight savings."
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Canvas Confetti", "Lucide Icons"],
    architectureNotes: "Calculates dynamic risk weights deterministically in client state with real-time UI re-renders and zero-overhead conversion state handlers."
  },
  {
    id: "instant-refund-tracker",
    prototypeId: "instant-refund-tracker",
    title: "'Money Debited But Order Failed' Instant Refund & UTR Tracker",
    tagline: "Eliminating 5-7 day bank refund waits with real-time hop tracking and instant IMPS reversals.",
    category: "Payment UX & Gateway Reconciliation",
    sourceUrl: "https://razorpay.com/m/fix-my-itch/#all-problems",
    badge: "Razorpay Fix-My-Itch #5",
    impactMetric: "< 45s Instant Reversal Time",
    problemStatement: "When bank gateways experience network timeouts during UPI checkouts, user accounts are debited but merchant orders fail to generate. Customers wait 5–7 banking days for reconciliation, generating immense anxiety and support tickets.",
    frictionPoints: [
      "Zero visibility into whether money is stuck at the issuing bank, NPCI central switch, or merchant gateway.",
      "Frustrating standard advice to 'wait 5–7 working days' despite digital payments occurring in milliseconds.",
      "High ticket volumes for customer support teams handling panic over missing transaction funds."
    ],
    solutionOverview: "Developed an interactive transaction packet hop visualizer that tracks NPCI UTR status across bank switches and enables 1-click instant source refunds via IMPS from an automated reconciliation float.",
    keyFeatures: [
      "4-Hop Network Telemetry Visualizer: User Bank ➔ NPCI Switch ➔ Merchant Ingest ➔ Order Service.",
      "Instant IMPS Payout Engine: Bypasses standard T+7 batch clearing with sub-minute automated reversals.",
      "Real-time UTR query lookup tool with pre-loaded timeout and gateway error scenarios.",
      "Interactive side-by-side comparison between legacy banking reconciliation and instant reversal."
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide Icons", "Web Audio / Confetti"],
    architectureNotes: "Event-driven state machine simulating webhook timeout callbacks, NPCI reconciliation payloads, and optimistic refund confirmation."
  },
  {
    id: "b2b-dynamic-discounting",
    prototypeId: "b2b-dynamic-discounting",
    title: "B2B Early-Settlement & Dynamic Discounting Console for MSMEs",
    tagline: "Unlocking vendor liquidity and boosting corporate treasury yield via automated dynamic discounting.",
    category: "B2B Neobanking & Cashflow (RazorpayX)",
    sourceUrl: "https://razorpay.com/m/fix-my-itch/#all-problems",
    badge: "Razorpay Fix-My-Itch #6",
    impactMetric: "18+ Days Faster MSME Cashflow",
    problemStatement: "Small suppliers (MSMEs) face severe cashflow crunches waiting for 60–90 day payment cycles from enterprise clients, while enterprise CFOs hold idle current account balances earning low returns.",
    frictionPoints: [
      "Rigid Net-60 credit terms force suppliers to seek expensive informal loans to maintain operations.",
      "No transparent mechanism for suppliers to offer early-settlement discounts in exchange for rapid payment.",
      "Enterprise accounts payable teams suffer from manual invoice verification and slow executive approvals."
    ],
    solutionOverview: "Engineered a dynamic discounting calculator and 1-tap WhatsApp approval workflow connecting enterprise treasury liquidity with MSME invoices for mutually beneficial early payouts.",
    keyFeatures: [
      "Interactive Early-Payment Slider dynamically calculating vendor rebates and annualized buyer APR.",
      "Full statutory breakdown covering gross invoice, agreed rebate, 2% TDS deduction, and net disbursement.",
      "Simulated 1-Tap CFO WhatsApp Approval webhook for instant mobile payment authorization.",
      "Real-time RTGS transfer confirmation and ledger updating."
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Canvas Confetti", "Lucide Icons"],
    architectureNotes: "Client-side mathematical model for dynamic yield curves (APR vs Days Saved) combined with modal-driven mock conversational approvals."
  }
];

export const ACADEMIC_DATA: AcademicDetails = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science & Engineering",
  institution: "Undergraduate Engineering Program",
  timeline: "2025 - 2029",
  status: "Undergraduate Student (Pursuing)",
  coursework: [
    "Data Structures & Algorithms (Arrays, Trees, Graphs, Hash Maps)",
    "Object-Oriented Programming (TypeScript & Java)",
    "Web Technologies & Architecture (DOM, HTTP/HTTPS, Event-Driven Programming)",
    "Database Management Systems (Relational & NoSQL Concepts)",
    "Computer Networks & API Protocols (REST, WebSockets, JSON)"
  ],
  highlights: [
    "Deep personal passion for modern software engineering, web architectures, and developer tooling.",
    "Built multiple full-stack and frontend applications solving product and payment UX problems.",
    "Proactively learning modern web standards, UI engineering principles, and distributed component systems.",
    "Actively seeking opportunities to contribute high-impact work to production engineering codebases."
  ]
};
