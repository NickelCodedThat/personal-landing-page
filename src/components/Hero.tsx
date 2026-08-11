function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__grid">

          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="hero__status-dot"></span>
              Available for opportunities
            </p>

            <h1 className="hero__title">
              I build digital experiences that turn ideas into products.
            </h1>

            <p className="hero__description">
              I’m Nickel Boyce, a developer and entrepreneur focused on
              building modern websites, interfaces, and practical software
              solutions.
            </p>

            <div className="hero__actions">
              <a
                className="button button--primary"
                href="#projects"
              >
                View Projects
              </a>

              <a
                className="button button--secondary"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero-card">
              <p className="hero-card__label">
                Current focus
              </p>

              <h2 className="hero-card__title">
                Building useful digital products.
              </h2>

              <p className="hero-card__text">
                React · TypeScript · CSS · UI Engineering
              </p>

              <div className="hero-card__meta">
                <div>
                  <span>Based in</span>
                  <strong>South Carolina</strong>
                </div>

                <div>
                  <span>Building</span>
                  <strong>Web + Software</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero