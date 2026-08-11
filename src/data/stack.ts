export type StackGroup = {
  id: number
  category: string
  technologies: string[]
}

export const stack: StackGroup[] = [
  {
    id: 1,
    category: 'Languages',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    id: 2,
    category: 'Front End',
    technologies: ['React', 'Responsive Design', 'Component Architecture'],
  },
  {
    id: 3,
    category: 'Workflow',
    technologies: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
  {
    id: 4,
    category: 'Delivery',
    technologies: ['Vercel', 'SEO Fundamentals', 'Performance', 'Accessibility'],
  },
]