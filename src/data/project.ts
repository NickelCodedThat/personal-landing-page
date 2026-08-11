import weatherAvif720 from '../assets/projects/weather-app-720.avif'
import weatherAvif1200 from '../assets/projects/weather-app-1200.avif'
import weatherWebp720 from '../assets/projects/weather-app-720.webp'
import weatherWebp1200 from '../assets/projects/weather-app-1200.webp'
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

export type ProjectImage = {
  avif: [string, string]
  webp: [string, string]
  width: number
  height: number
  alt: string
}

export type Project = {
  id: number
  title: string
  type: string
  description: string
  focus: string
  technologies: string[]
  image: ProjectImage
  liveUrl?: string
  codeUrl?: string
  availability: 'public' | 'protected'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Weather Application',
    type: 'Web application',
    description:
      'A responsive weather interface that turns API data into clear current conditions, forecasts, and environmental detail.',
    focus: 'Data clarity · Responsive UI',
    technologies: ['JavaScript', 'CSS', 'Weather API'],
    image: {
      avif: [weatherAvif720, weatherAvif1200],
      webp: [weatherWebp720, weatherWebp1200],
      width: 1200,
      height: 698,
      alt: 'Weather application dashboard showing current conditions and forecast information',
    },
    liveUrl: 'https://storm-chaser-weather-app.vercel.app',
    availability: 'public',
  },
  {
    id: 2,
    title: 'Barbershop Website',
    type: 'Client service website',
    description:
      'A mobile-first service site that organizes brand messaging, service information, and a clear path to booking.',
    focus: 'Mobile usability · Booking flow',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: {
      avif: [barberAvif720, barberAvif1200],
      webp: [barberWebp720, barberWebp1200],
      width: 1200,
      height: 698,
      alt: 'Barbershop website showing services, branding, and booking-focused interface',
    },
    availability: 'protected',
  },
  {
    id: 3,
    title: 'Landscaping Website',
    type: 'Business service website',
    description:
      'A service-focused business site that showcases landscaping work, explains services, and creates a direct path to customer inquiries.',
    focus: 'Service clarity · Inquiry flow',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: {
      avif: [landscapingAvif720, landscapingAvif1200],
      webp: [landscapingWebp720, landscapingWebp1200],
      width: 1200,
      height: 691,
      alt: 'Landscaping company website showing services and business branding',
    },
    liveUrl: 'https://southern-edge-site.vercel.app',
    availability: 'public',
  },
  {
    id: 4,
    title: 'ACC Solutions',
    type: 'Agency website',
    description:
      'An agency website that clarifies digital services, establishes credibility, and guides small-business visitors toward a project conversation.',
    focus: 'Positioning · Lead generation',
    technologies: ['Web Design', 'Development', 'Responsive UI'],
    image: {
      avif: [accAvif720, accAvif1200],
      webp: [accWebp720, accWebp1200],
      width: 1200,
      height: 696,
      alt: 'ACC Solutions business website showing digital services and agency branding',
    },
    liveUrl: 'https://accsolutions.dev',
    availability: 'public',
  },
]
