import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App