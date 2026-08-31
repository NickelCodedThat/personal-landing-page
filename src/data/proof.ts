export type ProofMeta = {
  label: string
  value: string
}

export type ProofState = {
  id: number
  eyebrow: string
  title: string
  text: string
  meta: ProofMeta[]
}

export const proofStates: ProofState[] = [
  {
    id: 1,
    eyebrow: 'Currently building',
    title: 'Crew Command — workforce operations.',
    text: 'A multi-tenant platform for scheduling crews, tracking time, and running inspections across physical job sites.',
    meta: [
      { label: 'Role', value: 'Founder & Engineer' },
      { label: 'Status', value: 'Live' },
    ],
  },
  {
    id: 2,
    eyebrow: 'Systems & data',
    title: 'Permit Pulse — GIS data pipeline.',
    text: 'A provenance-first ingestion pipeline turning public government data into a reliable, geospatial signal feed.',
    meta: [
      { label: 'Stack', value: 'Python · PostGIS' },
      { label: 'Status', value: 'In Development' },
    ],
  },
  {
    id: 3,
    eyebrow: 'Product engineering',
    title: 'New Spot — listing search.',
    text: 'A geospatial rental-listing search platform with deduplication, radius search, and saved-search alerts.',
    meta: [
      { label: 'Stack', value: 'FastAPI · React' },
      { label: 'Status', value: 'In Development' },
    ],
  },
]
