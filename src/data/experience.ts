export type ExperienceItem = {
  id: number
  period: string
  context: string
  company: string
  role: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    period: '2026 — Present',
    context: 'Client services',
    company: 'ACC Solutions',
    role: 'Founder & Developer',
    description:
      'Designing, building, and shipping responsive websites and practical digital solutions for small businesses, with attention to usability, performance, and business needs.',
  },
  {
    id: 2,
    period: '2026 — Present',
    context: 'Self-directed development',
    company: 'Independent Products',
    role: 'Product Engineer',
    description:
      'Designing and building full-stack software products end to end — multi-tenant architecture, PostgreSQL and PostGIS data modeling, and the React/TypeScript interfaces on top of them.',
  },
  {
    id: 3,
    period: 'Previous Experience',
    context: 'Transferable experience',
    company: 'Operations & Project Management',
    role: 'Technical and Operations Background',
    description:
      'Bringing years of hands-on technical, leadership, project management, and field experience into structured software delivery and practical digital problem solving.',
  },
]
