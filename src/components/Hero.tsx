import HeroProofPanel from './HeroProofPanel'

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">

          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="hero__status-dot"></span>
              Available for opportunities
            </p>

            <h1 className="hero__title" id="hero-title">
              I build software systems that businesses run on.
            </h1>

            <p className="hero__description">
              I’m Nickel Boyce, a product engineer and technical founder.
              I design and build operations software, data systems, and
              digital businesses — from architecture through production.
            </p>

            <div className="hero__actions">
              <a
                className="button button--primary"
                href="#products"
              >
                View Products
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
            <HeroProofPanel />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
