import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
<>
  <a className="skip-link" href="#main-content">
    Skip to main content
  </a>

  <Header />

  <main id="main-content" tabIndex={-1}>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <TechStack />
    <Contact />
  </main>

  <Footer />
</>
  )
}

export default App