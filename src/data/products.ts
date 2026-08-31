import type { ProjectStatus, ResponsiveImage } from './types'

import ccDashboard720 from '../assets/products/crewcommand-dashboard-720.avif'
import ccDashboard1200 from '../assets/products/crewcommand-dashboard-1200.avif'
import ccDashboard720Webp from '../assets/products/crewcommand-dashboard-720.webp'
import ccDashboard1200Webp from '../assets/products/crewcommand-dashboard-1200.webp'
import ccProperties720 from '../assets/products/crewcommand-properties-720.avif'
import ccProperties1200 from '../assets/products/crewcommand-properties-1200.avif'
import ccProperties720Webp from '../assets/products/crewcommand-properties-720.webp'
import ccProperties1200Webp from '../assets/products/crewcommand-properties-1200.webp'
import ccPropertyDetail720 from '../assets/products/crewcommand-property-detail-720.avif'
import ccPropertyDetail1200 from '../assets/products/crewcommand-property-detail-1200.avif'
import ccPropertyDetail720Webp from '../assets/products/crewcommand-property-detail-720.webp'
import ccPropertyDetail1200Webp from '../assets/products/crewcommand-property-detail-1200.webp'
import ccOnboarding720 from '../assets/products/crewcommand-onboarding-720.avif'
import ccOnboarding1200 from '../assets/products/crewcommand-onboarding-1200.avif'
import ccOnboarding720Webp from '../assets/products/crewcommand-onboarding-720.webp'
import ccOnboarding1200Webp from '../assets/products/crewcommand-onboarding-1200.webp'
import ccMobile480 from '../assets/products/crewcommand-dashboard-mobile-480.avif'
import ccMobile480Webp from '../assets/products/crewcommand-dashboard-mobile-480.webp'

export type ProductHighlight = {
  title: string
  description: string
}

export type CaseStudySection = {
  heading: string
  body: string[]
}

export type ArchitectureStage = {
  label: string
  detail: string
  built: boolean
}

export type FlagshipProduct = {
  id: number
  slug: string
  name: string
  tagline: string
  status: ProjectStatus
  problem: string
  system: string
  role: string
  tech: string[]
  highlights: ProductHighlight[]
  heroImage?: ResponsiveImage
  images: ResponsiveImage[]
  architecture?: ArchitectureStage[]
  liveUrl?: string
  hasCaseStudy: boolean
  caseStudy?: {
    overview: string
    sections: CaseStudySection[]
    whatsNext: string
  }
}

export const flagshipProducts: FlagshipProduct[] = [
  {
    id: 1,
    slug: 'crew-command',
    name: 'Crew Command',
    tagline: 'Workforce & property operations platform',
    status: 'live',
    problem:
      'Property and field-service businesses coordinate crews across dozens of physical sites — shift scheduling, time tracking, inspections, and maintenance — mostly through texts, paper, and spreadsheets, with no shared source of truth and no audit trail.',
    system:
      'A multi-tenant Next.js and TypeScript platform on Supabase Postgres, with authorization enforced at the database layer through Row-Level Security rather than application logic alone. Every user belongs to an organization; every record is scoped to it.',
    role: 'Sole product designer & full-stack engineer',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Row-Level Security',
      'Zod',
      'Playwright',
    ],
    highlights: [
      {
        title: 'Scheduling & open-shift pickup',
        description:
          'Owners assign shifts across properties; employees can pick up or release open shifts under server-authoritative eligibility rules.',
      },
      {
        title: 'Time tracking with management review',
        description:
          'Minute-level clock in/out, owner corrections, and a dedicated review queue for hours before they close out a pay period.',
      },
      {
        title: 'Inspections & maintenance',
        description:
          'Versioned checklist templates for recurring property inspections, plus threaded maintenance issue tracking with comment history.',
      },
      {
        title: 'Field-first mobile flow',
        description:
          'A phone-first Today / Schedule / Profile flow built for employees working from a job site, not a desk.',
      },
      {
        title: 'Owner audit trail',
        description:
          'Every schedule change, correction, and admin action is logged to an activity feed — nothing happens silently.',
      },
    ],
    heroImage: {
      avif: [ccDashboard720, ccDashboard1200],
      webp: [ccDashboard720Webp, ccDashboard1200Webp],
      width: 1200,
      height: 750,
      alt: 'Crew Command dashboard showing active properties, crew members on shift, and today’s operations',
    },
    images: [
      {
        avif: [ccDashboard720, ccDashboard1200],
        webp: [ccDashboard720Webp, ccDashboard1200Webp],
        width: 1200,
        height: 750,
        alt: 'Crew Command dashboard showing active properties, crew members on shift, and today’s operations',
      },
      {
        avif: [ccOnboarding720, ccOnboarding1200],
        webp: [ccOnboarding720Webp, ccOnboarding1200Webp],
        width: 1200,
        height: 750,
        alt: 'Crew Command organization onboarding screen, "Build your operations command center"',
      },
      {
        avif: [ccProperties720, ccProperties1200],
        webp: [ccProperties720Webp, ccProperties1200Webp],
        width: 1200,
        height: 750,
        alt: 'Crew Command properties list with search and filter',
      },
      {
        avif: [ccPropertyDetail720, ccPropertyDetail1200],
        webp: [ccPropertyDetail720Webp, ccPropertyDetail1200Webp],
        width: 1200,
        height: 750,
        alt: 'Crew Command property detail view showing job sites',
      },
      {
        avif: [ccMobile480, ccMobile480],
        webp: [ccMobile480Webp, ccMobile480Webp],
        width: 480,
        height: 1039,
        alt: 'Crew Command mobile dashboard for field employees',
      },
    ],
    liveUrl: 'https://crewcommand-ten.vercel.app',
    hasCaseStudy: true,
    caseStudy: {
      overview:
        'Crew Command is a multi-tenant workforce and property-operations platform for businesses that schedule crews across physical job sites. It replaces the spreadsheet-and-text-message coordination most field-service and property-management businesses still run on with one shared, auditable system.',
      sections: [
        {
          heading: 'The problem',
          body: [
            'Property and facilities businesses run on crews moving between sites — pools, grounds, buildings, common areas. Scheduling, time tracking, and inspection records for that kind of work usually live across group texts, paper checklists, and disconnected spreadsheets.',
            'That works until something goes wrong: a shift nobody covered, hours nobody can verify, an inspection nobody can prove happened. There is no shared source of truth and no audit trail.',
          ],
        },
        {
          heading: 'Users & roles',
          body: [
            'Crew Command models six roles: owner/admin, manager, supervisor (read-only oversight), employee, and client (deliberately excluded from the operational workspace). Every permission is enforced by Postgres Row-Level Security, not just UI conditionals — so the authorization boundary holds even if a request bypasses the app entirely.',
          ],
        },
        {
          heading: 'System design',
          body: [
            'The platform is multi-tenant from the schema up: every user belongs to an organization through a membership record, and every operational table is scoped to that organization. Scheduling, time entries, inspections, and maintenance records all inherit that boundary automatically.',
            'A dedicated field-operations flow (Today / Schedule / Profile) was built phone-first for employees working from a job site rather than a desk — including open-shift pickup and drop, gated by server-authoritative eligibility checks so two people can’t claim the same shift.',
          ],
        },
        {
          heading: 'Key features',
          body: [
            'Property and job-site management, crew and team assignment, shift scheduling with open-shift pickup, minute-level time tracking with an owner correction and review workflow, versioned inspection checklist templates, threaded maintenance issue tracking, an owner/admin activity log, and reporting.',
          ],
        },
        {
          heading: 'Verification & testing',
          body: [
            'The authorization model was tested directly against the deployed database: confirmed read access for the right roles, confirmed 403s for the wrong ones, and confirmed role-escalation attempts are blocked at the RLS layer — not just hidden in the UI. The application layer is covered by an end-to-end Playwright suite organized by build phase, alongside a pgTAP suite exercising the database policies themselves.',
          ],
        },
      ],
      whatsNext:
        'Crew Command is live as a public, read-only supervisor demo. Planned next steps include invitations and client-portal auth, both explicitly deferred in the current production build.',
    },
  },
  {
    id: 2,
    slug: 'permit-pulse',
    name: 'Permit Pulse',
    tagline: 'Provenance-first data infrastructure for public development signals',
    status: 'in-development',
    problem:
      'Early signals of commercial development — rezoning cases, annexations, planning activity — sit in siloed county and municipal GIS systems, each with its own schema and quirks. Turning that into a reliable, trustworthy feed means treating data provenance as a first-class problem, not an afterthought.',
    system:
      'A Python data-engineering foundation built around one rule: never lose the original record. Every fetch is captured immutably before any transformation, changes are detected by content hash, and every canonical record traces back to exactly the raw source it came from.',
    role: 'Solo backend & data engineer',
    tech: [
      'Python',
      'SQLAlchemy 2.0',
      'PostgreSQL',
      'PostGIS',
      'GeoAlchemy2',
      'Alembic',
      'Pydantic v2',
      'pytest',
    ],
    highlights: [
      {
        title: 'Provenance-first ingestion',
        description:
          'Every raw record is captured immutably before normalization, so any canonical record can be traced back to exactly what the source returned.',
      },
      {
        title: 'Hash-based change detection',
        description:
          'Incoming records are classified as new, updated, unchanged, or removed by content hash — not by re-processing everything on every run.',
      },
      {
        title: 'Geospatial schema on PostGIS',
        description:
          'Parcels, addresses, and planning cases carry GiST-indexed geometry (SRID 4326) for real spatial queries, not just lat/lng columns.',
      },
      {
        title: 'Tested against a real database',
        description:
          '23 passing tests run against a live PostgreSQL + PostGIS instance in Docker — the pipeline logic is verified, not just designed.',
      },
      {
        title: 'Sources confirmed, not assumed',
        description:
          'Horry County and City of Myrtle Beach ArcGIS REST endpoints were probed and confirmed reachable before any adapter was built against them.',
      },
    ],
    images: [],
    architecture: [
      {
        label: 'Public sources',
        detail: 'Horry County & Myrtle Beach ArcGIS REST endpoints — confirmed reachable via recon probes',
        built: false,
      },
      {
        label: 'Ingestion',
        detail: 'Immutable raw capture, per-source adapters behind a shared contract',
        built: true,
      },
      {
        label: 'Change detection',
        detail: 'Hash-based NEW / UPDATED / UNCHANGED / REMOVED classification',
        built: true,
      },
      {
        label: 'Normalization',
        detail: 'Schema-drift validation, canonical record upsert',
        built: true,
      },
      {
        label: 'Geospatial layer',
        detail: 'PostgreSQL + PostGIS, GiST-indexed parcel & address geometry',
        built: true,
      },
      {
        label: 'Signal & scoring product',
        detail: 'Business-development intelligence output — designed, not yet built',
        built: false,
      },
    ],
    hasCaseStudy: true,
    caseStudy: {
      overview:
        'Permit Pulse is a data-engineering foundation for turning public government development records into a reliable signal feed. This is an honest in-progress case study: the ingestion and data-provenance layer is real, tested code — the adapters for live government data and the product layer on top of it are the next phase.',
      sections: [
        {
          heading: 'The problem',
          body: [
            'Rezoning cases, annexations, and planning activity are early, public signals of commercial development — but they live in disconnected county and municipal GIS systems, each with different schemas, update cadences, and reliability.',
            'Before any of that data can be turned into a useful product, it has to be ingested in a way that can be trusted: reproducible, auditable, and resilient to source systems changing underneath it.',
          ],
        },
        {
          heading: 'Constraints',
          body: [
            'Government GIS endpoints are not designed for reliable third-party ingestion — schemas drift, endpoints move, and there is no guarantee a record fetched today will look the same tomorrow. The system had to assume that from the start, rather than discover it in production.',
          ],
        },
        {
          heading: 'What’s actually built',
          body: [
            'A 9-table schema (jurisdiction, source, source record, raw record, ingestion run, parcel, address, planning case, event) with PostGIS geometry on parcels, addresses, and planning cases.',
            'A pipeline that fetches, immutably captures the raw response, classifies it by content hash against what’s already stored, validates it against schema drift, normalizes it, and upserts the canonical record — joined deterministically to its parcel.',
            'All of this is exercised by 23 tests running against a real PostgreSQL + PostGIS instance, not mocks.',
          ],
        },
        {
          heading: 'What’s deliberately not built yet',
          body: [
            'There is no adapter for real Horry County or Myrtle Beach data yet — only a fixture-based test adapter. Two real ArcGIS endpoints were identified and confirmed reachable through disposable recon probes, ranked as MVP candidates, but nothing has ingested live government data.',
            'There is also no UI, no scoring model, and no entity-resolution beyond exact parcel-ID matching — all explicitly deferred so the foundation could be built correctly first.',
          ],
        },
      ],
      whatsNext:
        'Build the first real adapter against the Horry County ArcGIS endpoint, then the City of Myrtle Beach endpoint, and start turning normalized planning-case records into an actual signal feed.',
    },
  },
  {
    id: 3,
    slug: 'new-spot',
    name: 'New Spot',
    tagline: 'Rental & apartment listing search platform',
    status: 'in-development',
    problem:
      'Apartment and rental listings are scattered across sources with inconsistent data quality, duplicate postings, and weak location search — making it hard to search by real geography (a radius, a drawn area) instead of just a city name.',
    system:
      'A FastAPI and PostgreSQL/PostGIS backend handling listing ingestion, deduplication, and geospatial search, paired with a React and TypeScript frontend. Built in partnership, with a co-owner handling deployment and release operations.',
    role: 'Full-stack engineer, in partnership',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'PostGIS', 'React', 'TypeScript', 'Vite'],
    highlights: [
      {
        title: 'Listing deduplication engine',
        description:
          'Identifies duplicate and near-duplicate listings across sources before they reach search results.',
      },
      {
        title: 'Geospatial search API',
        description:
          'Search by radius or a drawn polygon, not just a city name — backed by PostGIS spatial queries.',
      },
      {
        title: 'Saved searches & alerts',
        description: 'Accounts can save a search and get notified when new matching listings appear.',
      },
    ],
    images: [],
    hasCaseStudy: false,
  },
]
