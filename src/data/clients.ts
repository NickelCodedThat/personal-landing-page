import type { ProjectStatus, ResponsiveImage } from './types'

import barberAvif720 from '../assets/projects/barbershop-site-720.avif'
import barberAvif1200 from '../assets/projects/barbershop-site-1200.avif'
import barberWebp720 from '../assets/projects/barbershop-site-720.webp'
import barberWebp1200 from '../assets/projects/barbershop-site-1200.webp'
import landscapingAvif720 from '../assets/projects/landscaping-site-720.avif'
import landscapingAvif1200 from '../assets/projects/landscaping-site-1200.avif'
import landscapingWebp720 from '../assets/projects/landscaping-site-720.webp'
import landscapingWebp1200 from '../assets/projects/landscaping-site-1200.webp'
import accAvif720 from '../assets/projects/acc-solutions-720.avif'
import accAvif1200 from '../assets/projects/acc-solutions-1200.avif'
import accWebp720 from '../assets/projects/acc-solutions-720.webp'
import accWebp1200 from '../assets/projects/acc-solutions-1200.webp'
import coastalAvif720 from '../assets/clients/coastal-property-services-720.avif'
import coastalAvif1200 from '../assets/clients/coastal-property-services-1200.avif'
import coastalWebp720 from '../assets/clients/coastal-property-services-720.webp'
import coastalWebp1200 from '../assets/clients/coastal-property-services-1200.webp'

export type ClientProject = {
  id: number
  name: string
  business: string
  type: string
  description: string
  focus: string
  tech: string[]
  image?: ResponsiveImage
  liveUrl?: string
  status: ProjectStatus
  protected: boolean
}

export const clientProjects: ClientProject[] = [
  {
    id: 1,
    name: 'Southern Edge Landscaping',
    business: 'Southern Edge Landscaping',
    type: 'Business service website',
    description:
      'A service-focused business site that showcases landscaping work, explains services, and creates a direct path to customer inquiries.',
    focus: 'Service clarity · Inquiry flow',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: {
      avif: [landscapingAvif720, landscapingAvif1200],
      webp: [landscapingWebp720, landscapingWebp1200],
      width: 1200,
      height: 691,
      alt: 'Southern Edge Landscaping website showing services and business branding',
    },
    liveUrl: 'https://southern-edge-site.vercel.app',
    status: 'client-production',
    protected: false,
  },
  {
    id: 2,
    name: 'ACC Solutions',
    business: 'ACC Solutions (own agency)',
    type: 'Agency website',
    description:
      'The site for my own web development agency — clarifies services, establishes credibility, and guides small-business visitors toward a project conversation.',
    focus: 'Positioning · Lead generation',
    tech: ['Web Design', 'Development', 'Responsive UI'],
    image: {
      avif: [accAvif720, accAvif1200],
      webp: [accWebp720, accWebp1200],
      width: 1200,
      height: 696,
      alt: 'ACC Solutions business website showing digital services and agency branding',
    },
    liveUrl: 'https://accsolutions.dev',
    status: 'live',
    protected: false,
  },
  {
    id: 3,
    name: 'Coastal Property Services',
    business: 'Coastal Property Services & Landscaping, Inc.',
    type: 'Business website redesign',
    description:
      'A ground-up rebuild of a property management company’s site, covering pool maintenance, grounds, building upkeep, and cleaning services for HOAs and commercial properties in Myrtle Beach.',
    focus: 'Content migration · SEO continuity',
    tech: ['Astro', 'TypeScript'],
    image: {
      avif: [coastalAvif720, coastalAvif1200],
      webp: [coastalWebp720, coastalWebp1200],
      width: 1200,
      height: 800,
      alt: 'Aerial view of a pool and courtyard at a property managed by Coastal Property Services',
    },
    status: 'in-development',
    protected: false,
  },
  {
    id: 4,
    name: 'The Taper Clinic',
    business: 'The Taper Clinic (barbershop)',
    type: 'Client service website',
    description:
      'A mobile-first service site that organizes brand messaging, service information, and a clear path to booking.',
    focus: 'Mobile usability · Booking flow',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: {
      avif: [barberAvif720, barberAvif1200],
      webp: [barberWebp720, barberWebp1200],
      width: 1200,
      height: 698,
      alt: 'The Taper Clinic barbershop website showing services, branding, and booking-focused interface',
    },
    status: 'private-preview',
    protected: true,
  },
  {
    id: 5,
    name: 'Green Bros',
    business: 'Green Bros (commercial facilities & cleaning)',
    type: 'Business website',
    description:
      'A positioning-focused marketing site for a commercial facilities-services company, built to read as established and credible to property owners and managers.',
    focus: 'Positioning · Lead generation',
    tech: ['Astro', 'TypeScript'],
    status: 'in-development',
    protected: false,
  },
]
