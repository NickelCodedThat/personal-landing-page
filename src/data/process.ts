export type ProcessStep = {
  id: number
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Product direction',
    description: 'Start from the real operational problem, not the feature list — who’s using this, and what breaks today.',
  },
  {
    id: 2,
    number: '02',
    title: 'Architecture',
    description: 'Data model, tenancy boundaries, and authorization decided before UI work starts, not discovered halfway through.',
  },
  {
    id: 3,
    number: '03',
    title: 'Implementation',
    description: 'Frontend and backend work in parallel where it makes sense, with AI-augmented tooling handling scaffolding so review time goes to decisions that matter.',
  },
  {
    id: 4,
    number: '04',
    title: 'Review & QA',
    description: 'Every change is reviewed against the architecture before it merges — including changes drafted with AI assistance.',
  },
  {
    id: 5,
    number: '05',
    title: 'Git & CI gates',
    description: 'Feature branches, isolated worktrees for parallel work, and build/lint gates that have to pass before anything ships.',
  },
  {
    id: 6,
    number: '06',
    title: 'Production',
    description: 'Deployed, verified against the live environment, and iterated on — not considered done at merge.',
  },
]
