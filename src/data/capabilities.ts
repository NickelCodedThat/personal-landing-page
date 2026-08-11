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
    title: 'Web Development',
    description:
      'Building responsive, modern websites with clean structure, reusable components, and thoughtful user experiences.',
  },
  {
    id: 2,
    number: '02',
    title: 'UI Engineering',
    description:
      'Turning layouts and ideas into polished interfaces with strong typography, spacing, interaction states, and responsive behavior.',
  },
  {
    id: 3,
    number: '03',
    title: 'Business-Focused Solutions',
    description:
      'Approaching digital products with the business problem in mind, not just the code required to build them.',
  },
  {
    id: 4,
    number: '04',
    title: 'Deployment & Delivery',
    description:
      'Taking projects from local development through Git, GitHub, deployment, testing, and a finished live product.',
  },
]