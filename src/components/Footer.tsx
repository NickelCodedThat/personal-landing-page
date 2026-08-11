function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <div className="site-footer__identity">
            <p>© 2026 Nickel Boyce</p>
            <p>Designed and built with React + TypeScript.</p>
          </div>

          <a
            className="site-footer__link"
            href="https://github.com/NickelCodedThat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
