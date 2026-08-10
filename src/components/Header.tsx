function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <a className="navbar__brand" href="#home">
            Nickel Boyce
          </a>

          <div className="navbar__links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header