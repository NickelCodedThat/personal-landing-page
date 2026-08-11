import { useState } from 'react'

const githubUrl = 'https://github.com/NickelCodedThat'

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="external-arrow"
      viewBox="0 0 16 16"
    >
      <path d="M5 3h8v8M13 3 3 13" />
    </svg>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((currentState) => !currentState)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape') {
      closeMenu()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="container">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="navbar__brand" href="#home" onClick={closeMenu}>
            Nickel Boyce
          </a>

          <button
            className={`navbar__toggle ${
              menuOpen ? 'navbar__toggle--open' : ''
            }`}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </button>

          <div
            className={`navbar__links ${
              menuOpen ? 'navbar__links--open' : ''
            }`}
            id="primary-navigation"
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a
              className="navbar__external"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              aria-label="GitHub profile (opens in a new tab)"
            >
              GitHub
              <ExternalArrow />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
