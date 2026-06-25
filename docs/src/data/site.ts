export const site = {
  name: 'Rishabh Singh',
  title: 'AI and Technical PM',
  tagline: 'I build AI products and the systems that make them work.',
  role: 'Assistant Product Manager at Amkette (EvoFox)',
  bio: 'I sit at the intersection of product strategy and engineering execution, owning discovery, spec authoring, cross-functional delivery, and instrumentation. Currently at Amkette (EvoFox), I lead CRO strategy, internal CX platform development, and AI automation systems.',
  education: 'B.Tech CSE (Data Science) at SIET, graduating 2027',
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
    value: '95%',
    label: 'CRM data accuracy restored',
    detail: 'Identity resolution layer',
  },
  {
    value: '+25%',
    label: 'Lead capture uplift',
    detail: 'Eshopbox Plus Kiosk Flow',
  },
  {
    value: 'v1.0',
    label: 'Shipped to production',
    detail: 'Flick AI Desktop Tool',
  },
] as const;

export const workItems = [
  {
    slug: 'whatsapp-sales-bot',
    company: 'EshopBox',
    title: 'WhatsApp Sales Discovery Bot',
    summary: '40% of L1 support queries automated before any human involvement.',
    impact: '40% of L1 support queries automated',
    tags: ['AI Automation', 'EshopBox', 'Shipped'],
  },
  {
    slug: 'identity-resolution',
    company: 'EshopBox',
    title: 'Identity Resolution Layer',
    summary: 'CRM data accuracy restored to 95% across all customer touchpoints.',
    impact: 'CRM accuracy restored to 95%',
    tags: ['Data Engineering', 'EshopBox', 'Shipped'],
  },
  {
    slug: 'llm-lead-scoring',
    company: 'EshopBox',
    title: 'Multi-Provider LLM Lead Scoring',
    summary: 'Higher-quality sales pipeline through automated lead qualification at scale.',
    impact: 'Higher-quality pipeline for sales follow-up',
    tags: ['AI', 'Lead Ops', 'EshopBox', 'Shipped'],
  },
  {
    slug: 'kiosk-flow',
    company: 'EshopBox',
    title: 'Eshopbox Plus Kiosk Flow',
    summary: '+25% lead capture uplift from in-store physical touchpoints.',
    impact: '+25% lead capture uplift',
    tags: ['Product Design', 'Lead Capture', 'EshopBox', 'Shipped'],
  },
  {
    slug: 'cx-platform',
    company: 'Amkette (EvoFox)',
    title: 'Internal CX Platform',
    summary: 'Built the product layer between a CX team and an external dev shop - from zero requirements to alpha handoff in one build cycle.',
    impact: 'Unified CX tooling across teams',
    tags: ['Internal Product', 'B2B SaaS', 'Amkette (EvoFox)', 'Active Alpha'],
  },
  {
    slug: 'flick',
    company: 'Solo Build',
    title: 'Flick',
    summary: 'A system-level AI writing assistant for people who think faster than they type.',
    impact: 'v1.0.0 shipped',
    tags: ['AI Desktop Tool', 'Solo Build', 'Shipped'],
  }
] as const;

export const projects = [
  {
    slug: 'toolzi',
    title: 'Toolzi',
    summary:
      '40+ browser-based utility tools, local-first, PWA, TypeScript + React + Vite + Cloudflare Pages, CI/CD via Wrangler.',
    tags: ['React', 'TypeScript', 'Cloudflare Pages'],
    href: 'https://github.com/rixabhh/Toolzi',
  },
  {
    slug: 'flick',
    title: 'Flick',
    summary:
      'A Rust + Tauri v2 desktop app with OS-level keyboard interception for in-place AI text transformation, BYOK via OS keychain, Hindi/Hinglish awareness.',
    tags: ['Rust', 'Tauri', 'AI Desktop'],
    href: 'https://github.com/rixabhh/flick',
  },
  {
    slug: 'portfolio',
    title: 'Portfolio Site',
    summary:
      'This website. Built with Astro, TypeScript, and native CSS. Designed to be performant, accessible, and structured.',
    tags: ['Astro', 'TypeScript', 'CSS'],
    href: 'https://github.com/rixabhh/rixabhh.github.io',
  },
  {
    slug: 'github-profile',
    title: 'GitHub Profile',
    summary:
      'My public GitHub profile containing open source contributions, configurations, and personal builds.',
    tags: ['Open Source', 'GitHub'],
    href: 'https://github.com/rixabhh/rixabhh',
  },
] as const;

export const usesCategories = [
  {
    title: 'Product and Strategy',
    items: [
      'Roadmapping and prioritization',
      'PRD and technical spec authoring',
      'Jira and GitHub Projects',
      'Notion',
      'A/B testing and experimentation',
    ],
  },
  {
    title: 'AI, LLM and Automation',
    items: [
      'Multi-LLM chains',
      'Prompt engineering',
      'Agentic workflows',
      'RAG pipelines',
      'Webhook and state machine design',
    ],
  },
  {
    title: 'Engineering',
    items: [
      'Python and SQL',
      'Cloudflare Workers',
      'Docker',
      'GitHub Actions',
      'REST APIs',
      'Meta Graph API',
      'Zoho Deluge',
    ],
  },
  {
    title: 'Data and Instrumentation',
    items: [
      'Power BI',
      'Metabase',
      'Google Analytics',
      'ETL pipelines',
      'Attribution modeling',
    ],
  },
] as const;
