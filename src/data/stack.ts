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
    eyebrow: 'What I use',
    category: 'Languages & Tools',
    description:
      'The core technologies and workflow tools used to build and ship the work.',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Git',
      'GitHub',
      'Vite',
      'VS Code',
      'Vercel',
    ],
  },
  {
    id: 2,
    eyebrow: 'How I build',
    category: 'Engineering Practices',
    description:
      'The principles used to keep interfaces useful, maintainable, and ready to ship.',
    items: [
      'Responsive Design',
      'Component Architecture',
      'API Integration',
      'Accessibility',
      'Performance',
      'SEO Fundamentals',
      'Deployment Workflows',
    ],
  },
]
