export const site = {
  name: 'Rishabh Singh',
  title: 'Technical Product Manager',
  tagline: 'I build AI products and the systems that make them work.',
  role: 'Assistant Product Manager at Amkette (EvoFox)',
  bio: 'I sit at the intersection of product strategy and engineering execution — owning discovery, spec authoring, cross-functional delivery, and instrumentation. Currently at Amkette (EvoFox), I lead CRO strategy, internal CX platform development, and AI automation systems.',
  education: 'B.Tech CSE (Data Science) at SIET · graduating 2027',
  email: 'pro.rishabhsingh@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/rishabbh',
    x: 'https://x.com/rixabhh',
    github: 'https://github.com/rixabhh',
  },
} as const;

export const metrics = [
  {
    value: '40%',
    label: 'L1 support queries automated',
    detail: 'WhatsApp Sales Discovery Bot',
  },
  {
    value: '30%',
    label: 'Engineering rework reduced',
    detail: 'Structured technical spec authoring',
  },
  {
    value: '95%',
    label: 'CRM data accuracy restored',
    detail: 'Identity resolution layer',
  },
  {
    value: '+25%',
    label: 'Lead capture uplift',
    detail: 'Eshopbox Plus Kiosk Flow',
  },
] as const;

export const workItems = [
  {
    slug: 'whatsapp-sales-bot',
    company: 'EshopBox',
    title: 'WhatsApp Sales Discovery Bot',
    summary:
      'End-to-end conversational sales bot on Meta Graph API with Cloudflare Workers and Zoho CRM — automating L1 discovery and routing qualified leads.',
    impact: '40% of L1 support queries automated',
    tags: ['Meta Graph API', 'Cloudflare Workers', 'Zoho CRM', 'Automation'],
  },
  {
    slug: 'identity-resolution',
    company: 'EshopBox',
    title: 'Identity Resolution Layer',
    summary:
      'Event schema and identity stitching across touchpoints to fix fragmented CRM records and restore data trust for sales and ops teams.',
    impact: 'CRM accuracy restored to 95%',
    tags: ['Data Engineering', 'Event Schema', 'CRM', 'ETL'],
  },
  {
    slug: 'llm-lead-scoring',
    company: 'EshopBox',
    title: 'Multi-Provider LLM Lead Scoring',
    summary:
      'Lead qualification pipeline using multi-LLM chains with prompt engineering and fallback routing for reliable scoring at scale.',
    impact: 'Higher-quality pipeline for sales follow-up',
    tags: ['LLM', 'Prompt Engineering', 'Lead Scoring', 'APIs'],
  },
  {
    slug: 'cx-platform',
    company: 'Amkette (EvoFox)',
    title: 'Internal CX Platform',
    summary:
      'Product ownership for an internal customer experience platform — specs, sprint planning, and instrumentation for support and success workflows.',
    impact: 'Unified CX tooling across teams',
    tags: ['Product Strategy', 'CX', 'Specs', 'Instrumentation'],
  },
  {
    slug: 'cro-automation',
    company: 'Amkette (EvoFox)',
    title: 'CRO & Agentic Automation',
    summary:
      'Conversion rate optimization strategy paired with agentic automation systems to reduce manual ops and improve funnel performance.',
    impact: 'Ongoing CRO and automation initiatives',
    tags: ['CRO', 'Agentic Workflows', 'Automation', 'Analytics'],
  },
  {
    slug: 'kiosk-flow',
    company: 'EshopBox',
    title: 'Eshopbox Plus Kiosk Flow',
    summary:
      'Designed and shipped an in-store kiosk lead capture flow — from UX spec through launch and post-launch measurement.',
    impact: '+25% lead capture uplift',
    tags: ['Product Design', 'Lead Capture', 'Launch', 'A/B Testing'],
  },
] as const;

export const projects = [
  {
    slug: 'thealgorithm',
    title: 'TheAlgorithm',
    summary:
      'Solo-built project from zero to production — 126 commits with CI/CD on GitHub Actions, covering architecture, implementation, and deployment.',
    tags: ['GitHub Actions', 'CI/CD', 'Solo Build'],
    href: 'https://github.com/rixabhh',
  },
  {
    slug: 'spec-authoring',
    title: 'Technical Spec System',
    summary:
      'Structured spec authoring process across 70+ sprint items — reducing engineering rework and aligning product, design, and engineering on scope.',
    tags: ['PRDs', 'Specs', 'Jira', 'Process'],
    href: '/work',
  },
] as const;

export const usesCategories = [
  {
    title: 'Product & Strategy',
    items: [
      'Roadmapping & prioritization',
      'PRD & technical spec authoring',
      'Jira & GitHub Projects',
      'Notion',
      'A/B testing & experimentation',
    ],
  },
  {
    title: 'AI, LLM & Automation',
    items: [
      'Multi-LLM chains',
      'Prompt engineering',
      'Agentic workflows',
      'RAG pipelines',
      'Webhook & state machine design',
    ],
  },
  {
    title: 'Engineering',
    items: [
      'Python & SQL',
      'Cloudflare Workers',
      'Docker',
      'GitHub Actions',
      'REST APIs',
      'Meta Graph API',
      'Zoho Deluge',
    ],
  },
  {
    title: 'Data & Instrumentation',
    items: [
      'Power BI',
      'Metabase',
      'Google Analytics',
      'ETL pipelines',
      'Attribution modeling',
    ],
  },
] as const;
