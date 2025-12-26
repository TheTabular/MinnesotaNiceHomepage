export interface Source {
  url: string;
  title: string;
  source_type: string;
}

// Content block types for rich answer formatting
export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface TableBlock {
  type: "table";
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface CalloutBlock {
  type: "callout";
  style: "info" | "warning" | "tip" | "important";
  text: string;
}

export interface ListBlock {
  type: "list";
  style: "bullet" | "numbered";
  title?: string;
  items: string[];
}

export type ContentBlock = ParagraphBlock | TableBlock | CalloutBlock | ListBlock;

export interface QAItem {
  question: string;
  answer_summary: string;
  key_points: string[];
  content_blocks?: ContentBlock[];
  sources: Source[];
  error?: string;
}

export interface QuickLink {
  label: string;
  url: string;
  description: string;
}

export interface WebsiteContent {
  topic: string;
  site_title: string;
  site_description: string;
  last_updated: string;
  quick_links: QuickLink[];
  categories: {
    [key: string]: QAItem[];
  };
}

export interface CategoryInfo {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const categoryMeta: { [key: string]: CategoryInfo } = {
  "Eligibility & Income Limits": {
    slug: "eligibility",
    title: "Eligibility & Income Limits",
    description: "Who qualifies for Medicaid, MinnesotaCare, and subsidies.",
    icon: "clipboard-check",
    color: "lake",
  },
  "Enrollment Process & Deadlines": {
    slug: "enrollment",
    title: "Enrollment Process & Deadlines",
    description: "Key dates, how to apply, and required documents.",
    icon: "calendar",
    color: "lake",
  },
  "Coverage Types (MA, MinnesotaCare, Private)": {
    slug: "coverage-types",
    title: "Coverage Types",
    description: "Compare Medicaid, MinnesotaCare, and private plans.",
    icon: "shield-check",
    color: "lake",
  },
  "Costs, Premiums & Subsidies": {
    slug: "costs",
    title: "Costs, Premiums & Subsidies",
    description: "Tax credits, cost-sharing, and monthly estimates.",
    icon: "currency-dollar",
    color: "lake",
  },
  "Special Circumstances & Life Changes": {
    slug: "life-changes",
    title: "Life Changes & Special Enrollment",
    description: "Qualifying events and special enrollment periods.",
    icon: "refresh",
    color: "lake",
  },
  "Appeals & Complaints": {
    slug: "appeals",
    title: "Appeals & Complaints",
    description: "Appeal decisions and understand your rights.",
    icon: "scale",
    color: "lake",
  },
  "Dental & Vision Coverage": {
    slug: "dental-vision",
    title: "Dental & Vision Coverage",
    description: "Dental and vision services by program.",
    icon: "eye",
    color: "lake",
  },
  "Renewals & Annual Updates": {
    slug: "renewals",
    title: "Renewals & Annual Updates",
    description: "How to renew and what to expect each year.",
    icon: "document-text",
    color: "lake",
  },
};

export function getCategoryBySlug(slug: string): string | undefined {
  return Object.keys(categoryMeta).find(
    (key) => categoryMeta[key].slug === slug
  );
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
