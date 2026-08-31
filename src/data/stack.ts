export type StackGroup = {
  id: number
  eyebrow: string
  category: string
  description: string
  items: string[]
}

export const stack: StackGroup[] = [
  {
    id: 1,
    eyebrow: 'Product engineering',
    category: 'Languages & Frameworks',
    description: 'The core languages and frameworks used to build interfaces and applications.',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    id: 2,
    eyebrow: 'Data & systems',
    category: 'Backend & Data',
    description: 'What powers the systems underneath the interface — databases, APIs, and geospatial data.',
    items: ['PostgreSQL', 'PostGIS', 'Supabase', 'Python', 'SQLAlchemy', 'FastAPI'],
  },
  {
    id: 3,
    eyebrow: 'Engineering workflow',
    category: 'Delivery & Tooling',
    description: 'How the work actually gets shipped — version control, testing, and deployment.',
    items: ['Git', 'GitHub', 'Vite', 'Playwright', 'Vercel', 'VS Code'],
  },
  {
    id: 4,
    eyebrow: 'How I build',
    category: 'Product Practices',
    description: 'The principles that keep systems maintainable and interfaces genuinely usable.',
    items: [
      'Multi-tenant architecture',
      'Data modeling',
      'Responsive design',
      'Accessibility',
      'Performance',
      'Role-based authorization',
    ],
  },
]
