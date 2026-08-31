export type Capability = {
  id: number
  number: string
  title: string
  description: string
}

export const capabilities: Capability[] = [
  {
    id: 1,
    number: '01',
    title: 'Product Engineering',
    description:
      'Full-stack software from architecture through interface — React and TypeScript on the front end, real backends and databases underneath.',
  },
  {
    id: 2,
    number: '02',
    title: 'Systems & Data',
    description:
      'Multi-tenant application architecture, relational and geospatial data modeling, and authorization enforced at the database layer.',
  },
  {
    id: 3,
    number: '03',
    title: 'Business-First Execution',
    description:
      'Building for the operations problem first — scheduling, time tracking, inspections, leads — not just the interface around it.',
  },
  {
    id: 4,
    number: '04',
    title: 'Ship & Iterate',
    description:
      'Git-disciplined delivery — feature branches, tests, build and lint gates, and production deployment — built to keep shipping.',
  },
]
