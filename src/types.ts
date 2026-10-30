export interface FixMyItchProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  sourceUrl: string;
  badge: string;
  impactMetric: string;
  problemStatement: string;
  frictionPoints: string[];
  solutionOverview: string;
  keyFeatures: string[];
  techStack: string[];
  architectureNotes: string;
  prototypeId: 'checkout-recovery' | 'instant-settlement' | 'subscription-mandate' | 'cod-rto-risk' | 'instant-refund-tracker' | 'b2b-dynamic-discounting';
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Practical"
    highlight?: string;
  }[];
}

export interface AcademicDetails {
  degree: string;
  field: string;
  institution: string;
  timeline: string; // "2025 - 2029"
  status: string;
  coursework: string[];
  highlights: string[];
}
