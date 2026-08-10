export type ExperienceItem = {
  id: number
  period: string
  company: string
  role: string
  description: string
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    period: '2026 — Present',
    company: 'ACC Solutions',
    role: 'Founder & Developer',
    description:
      'Designing and building responsive websites and digital solutions for small businesses with a focus on usability, performance, and business results.',
  },
  {
    id: 2,
    period: '2026 — Present',
    company: 'Independent Projects',
    role: 'Front-End Developer',
    description:
      'Building real-world web projects while developing deeper experience with React, TypeScript, responsive UI development, APIs, and modern deployment workflows.',
  },
  {
    id: 3,
    period: 'Previous Experience',
    company: 'Operations & Project Management',
    role: 'Technical and Operations Background',
    description:
      'Bringing years of hands-on technical, leadership, project management, and field experience into software development and digital problem solving.',
  },
]