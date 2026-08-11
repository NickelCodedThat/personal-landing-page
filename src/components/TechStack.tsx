import { stack } from '../data/stack'

function TechStack() {
  return (
    <section
      className="tech-stack"
      id="toolkit"
      aria-labelledby="toolkit-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Toolkit</p>

          <h2 className="section-heading__title" id="toolkit-title">
            Tools for building. Practices for shipping.
          </h2>

          <p className="section-heading__description">
            A focused front-end toolkit, organized by what I use and how I
            approach reliable, responsive delivery.
          </p>
        </div>

        <div className="tech-stack__grid">
          {stack.map((group) => (
            <article className="stack-group" key={group.id}>
              <p className="stack-group__eyebrow">{group.eyebrow}</p>
              <h3 className="stack-group__title">{group.category}</h3>
              <p className="stack-group__description">{group.description}</p>

              <ul className="stack-group__items">
                {group.items.map((item) => (
                  <li className="stack-chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
