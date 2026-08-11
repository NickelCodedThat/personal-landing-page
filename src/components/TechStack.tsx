import { stack } from '../data/stack'

function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Toolkit</p>

          <h2 className="section-heading__title">
            The tools behind the work.
          </h2>

          <p className="section-heading__description">
            A growing front-end toolkit focused on building, shipping, and
            improving modern web experiences.
          </p>
        </div>

        <div className="tech-stack__grid">
          {stack.map((group) => (
            <article
              className="stack-group"
              key={group.id}
            >
              <h3 className="stack-group__title">
                {group.category}
              </h3>

              <div className="stack-group__items">
                {group.technologies.map((technology) => (
                  <span
                    className="stack-chip"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack