export type ProjectStatus =
  | 'live'
  | 'beta'
  | 'in-development'
  | 'research'
  | 'prototype'
  | 'client-production'
  | 'private-preview'

export const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  'in-development': 'In Development',
  research: 'Research',
  prototype: 'Prototype',
  'client-production': 'Client Production',
  'private-preview': 'Private Preview',
}

export type ResponsiveImage = {
  avif: [string, string]
  webp: [string, string]
  width: number
  height: number
  alt: string
}
