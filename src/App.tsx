import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CaseStudy from './components/CaseStudy'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
