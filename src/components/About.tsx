import { capabilities } from '../data/capabilities'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__intro">
            <p className="section-heading__eyebrow">About</p>

            <h2 className="about__title">
              I bring more than code to the problem.
            </h2>

            <p className="about__description">
              My background spans development, business, operations, project
              management, and hands-on technical work. That experience shapes
              how I build: understand the problem first, then create something
              useful, clear, and dependable.
            </p>

            <p className="about__description">
              I&apos;m currently focused on modern front-end development while
              continuing to build real-world websites, products, and business
              solutions.
            </p>
          </div>

          <div className="about__capabilities">
            {capabilities.map((capability) => (
              <article
                className="capability"
                key={capability.id}
              >
                <p className="capability__number">
                  {capability.number}
                </p>

                <div>
                  <h3 className="capability__title">
                    {capability.title}
                  </h3>

                  <p className="capability__description">
                    {capability.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About