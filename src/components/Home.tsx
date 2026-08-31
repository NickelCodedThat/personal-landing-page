import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './Hero'
import FlagshipProducts from './FlagshipProducts'
import About from './About'
import ClientWork from './ClientWork'
import EngineeringProcess from './EngineeringProcess'
import Experience from './Experience'
import TechStack from './TechStack'
import MoreWork from './MoreWork'
import Contact from './Contact'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const target = document.querySelector(location.hash)
    target?.scrollIntoView()
  }, [location.hash])

  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <FlagshipProducts />
      <About />
      <ClientWork />
      <EngineeringProcess />
      <Experience />
      <TechStack />
      <MoreWork />
      <Contact />
    </main>
  )
}

export default Home
