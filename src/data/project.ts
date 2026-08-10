import weatherImage from '../assets/projects/weather-app.png'
import barberImage from '../assets/projects/barbershop-site.png'
import landscapingImage from '../assets/projects/landscaping-site.png'
import accImage from '../assets/projects/acc-solutions.png'

export type Project = {
  id: number
  title: string
  description: string
  stack: string
  image?: string
  imageAlt?: string
  liveUrl?: string
  codeUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Weather Application',
    description:
      'A responsive weather experience focused on clear forecasts, useful environmental data, and an approachable interface.',
    stack: 'JavaScript · CSS · Weather API',
    image: weatherImage,
    imageAlt:
    'Weather application dashboard showing current conditions and forecast information',
    liveUrl: 'https://storm-chaser-weather-app.vercel.app'
  },
  {
    id: 2,
    title: 'Barbershop Website',
    description:
      'A modern service website designed around mobile usability, clear service information, and simple booking.',
    stack: 'HTML · CSS · JavaScript',
    image: barberImage,
    imageAlt: 
    'Barbershop website showing services, branding, and booking focused interface',
    liveUrl: 'https://taper-clinic-site-78rwxk9c4-nickel-coded-that.vercel.app'
  },
  {
    id: 3,
    title: 'Landscaping Website',
    description:
      'A service-focused business website built to showcase work, communicate services, and generate customer inquiries.',
    stack: 'HTML · CSS · JavaScript',
    image: landscapingImage,
    imageAlt:
    'Landscaping company website showing services and business branding',
    liveUrl: 'https://southern-edge-site.vercel.app'
  },
  {
    id: 4,
    title: 'ACC solutions',
    description:
    'A modern digital agency website designed to present services, establish credibility, and convert business visitors into potential clients.',
    stack: 'Web Design • Development • Responsive UI',
    image: accImage,
    imageAlt:
    'ACC solutions business website showing digital services and agency branding',
    liveUrl: 'https://accsolutions.dev',
  }
]