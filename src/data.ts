export const EMAIL = 'CortexxaAI@gmail.com'
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61595550157907'
export const TIKTOK_URL = 'https://www.tiktok.com/@cortexxa.ai'
export const INSTAGRAM_URL = '#'
export const LINKEDIN_URL = '#'

export type Service = { icon: string; title: string; body: string; points: string[] }

export const SERVICES: Service[] = [
  {
    icon: '🤖',
    title: 'AI Virtual Assistants',
    body: 'Dedicated remote assistants supported by AI workflows for fast, accurate day-to-day execution.',
    points: ['Trained on your process', 'Async check-ins', 'Accurate, repeatable output'],
  },
  {
    icon: '⚙️',
    title: 'Business Automation',
    body: 'Connect your tools and automate repetitive tasks so your team focuses on what matters.',
    points: ['Workflow automation', 'Tool integrations', 'Fewer manual steps'],
  },
  {
    icon: '🗂️',
    title: 'Administrative Support',
    body: 'Data entry, scheduling, file management and structured checklists handled with care.',
    points: ['Data entry & migration', 'Scheduling & inbox', 'File naming & folders'],
  },
  {
    icon: '📣',
    title: 'Content & Marketing',
    body: 'Consistent brand voice, social content and campaigns aligned to your standards.',
    points: ['Brand voice guide', 'Social content', 'Campaign support'],
  },
  {
    icon: '🔎',
    title: 'Research & Analysis',
    body: 'Sourced briefs and structured summaries with clear confidence notes on every claim.',
    points: ['Sourced briefs', 'Confidence labels', 'Executive summaries'],
  },
  {
    icon: '🧩',
    title: 'Custom AI Agents',
    body: 'Tailored, skill-based agents built around your operations and approval rules.',
    points: ['Skill-based agents', 'Approval checkpoints', 'Audit logging'],
  },
]

export const VALUES = [
  { n: '01', t: 'Clarity', d: 'Plain language, defined scope, no surprises.' },
  { n: '02', t: 'Respect', d: 'Dignified, person-first communication.' },
  { n: '03', t: 'Accountability', d: 'Ownership of every task and result.' },
  { n: '04', t: 'Repeatable process', d: 'Documented steps you can rely on.' },
]

export type Social = { label: string; href: string; cls: string }

export const SOCIALS: Social[] = [
  { label: 'Facebook', href: FACEBOOK_URL, cls: 'soc--fb' },
  { label: 'Instagram', href: INSTAGRAM_URL, cls: 'soc--ig' },
  { label: 'TikTok', href: TIKTOK_URL, cls: 'soc--tt' },
  { label: 'LinkedIn', href: LINKEDIN_URL, cls: 'soc--li' },
]

export const STEPS = [
  { n: '01', t: 'Discover', d: 'We map the tasks, tools and outcomes you care about.' },
  { n: '02', t: 'Design', d: 'We define the assistant, automation and agent mix.' },
  { n: '03', t: 'Deploy', d: 'We set it up, connect your tools and test with you.' },
  { n: '04', t: 'Improve', d: 'We refine based on real results and feedback.' },
]
