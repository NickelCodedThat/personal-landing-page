import { experience } from '../data/experience'

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Experience</p>

          <h2 className="section-heading__title">
            Technical thinking backed by real-world experience.
          </h2>

          <p className="section-heading__description">
            A background spanning development, business, project management,
            and hands-on technical work shapes how I approach solving problems.
          </p>
        </div>

        <div className="experience__timeline">
          {experience.map((item) => (
            <article className="experience-item" key={item.id}>
              <p className="experience-item__period">
                {item.period}
              </p>

              <div className="experience-item__marker">
                <span className="experience-item__dot"></span>
              </div>

              <div className="experience-item__content">
                <h3 className="experience-item__company">
                  {item.company}
                </h3>

                <p className="experience-item__role">
                  {item.role}
                </p>

                <p className="experience-item__description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience