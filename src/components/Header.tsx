import { useState } from 'react'

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
    <header className="site-header"
            onKeyDown={handleKeyDown}
    >
      <div className="container">
        <nav className="navbar">
          <a
            className="navbar__brand"
            href="#home"
            onClick={closeMenu}
          >
            Nickel Boyce
          </a>

          <button
            className={`navbar__toggle ${
              menuOpen ? 'navbar__toggle--open' : ''
            }`}
            type="button"
            aria-label="Toggle navigation"
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
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header