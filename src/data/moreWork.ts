import type { ProjectStatus, ResponsiveImage } from './types'

import weatherAvif720 from '../assets/projects/weather-app-720.avif'
import weatherAvif1200 from '../assets/projects/weather-app-1200.avif'
import weatherWebp720 from '../assets/projects/weather-app-720.webp'
import weatherWebp1200 from '../assets/projects/weather-app-1200.webp'
import scv2Avif720 from '../assets/more-work/scv2-storm-center-720.avif'
import scv2Avif1200 from '../assets/more-work/scv2-storm-center-1200.avif'
import scv2Webp720 from '../assets/more-work/scv2-storm-center-720.webp'
import scv2Webp1200 from '../assets/more-work/scv2-storm-center-1200.webp'

export type MoreWorkItem = {
  id: number
  name: string
  description: string
  tech: string[]
  status: ProjectStatus
  liveUrl?: string
  image?: ResponsiveImage
}

export const moreWork: MoreWorkItem[] = [
  {
    id: 1,
    name: 'Storm Chaser',
    description:
      'A lightweight weather widget — live current conditions, a detailed metrics grid, and quick-access saved locations, in a static, no-build vanilla JavaScript app.',
    tech: ['JavaScript', 'CSS', 'Weather API'],
    status: 'live',
    liveUrl: 'https://storm-chaser-weather-app.vercel.app',
    image: {
      avif: [weatherAvif720, weatherAvif1200],
      webp: [weatherWebp720, weatherWebp1200],
      width: 1200,
      height: 698,
      alt: 'Storm Chaser weather widget showing current conditions and forecast information',
    },
  },
  {
    id: 2,
    name: 'SCV-2',
    description:
      'The ground-up rebuild of Storm Chaser: a full weather dashboard, a Storm Center with live NOAA/NWS alerts and radar on an interactive map, and Live Earth — a global feed of earthquakes, wildfires, floods, and tropical cyclones from USGS, NASA, and GDACS.',
    tech: ['JavaScript', 'MapLibre GL JS', 'NOAA/NWS', 'Open-Meteo'],
    status: 'live',
    liveUrl: 'https://scv-2-roan.vercel.app',
    image: {
      avif: [scv2Avif720, scv2Avif1200],
      webp: [scv2Webp720, scv2Webp1200],
      width: 1200,
      height: 800,
      alt: 'SCV-2 Storm Center showing live NOAA/NWS severe weather alerts on an interactive U.S. map',
    },
  },
  {
    id: 3,
    name: 'Sift',
    description:
      '"Know what matters next." A React Native / Expo productivity app built around a fast-capture inbox workflow with offline-durable local storage.',
    tech: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    status: 'in-development',
  },
]
