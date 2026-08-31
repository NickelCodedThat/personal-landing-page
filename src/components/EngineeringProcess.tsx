import { processSteps } from '../data/process'

function EngineeringProcess() {
  return (
    <section
      className="process"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">How I Build</p>

          <h2 className="section-heading__title" id="process-title">
            AI-augmented product engineering.
          </h2>

          <p className="section-heading__description">
            Modern tooling handles scaffolding and grunt work. Every
            architectural decision, every review, and every merge is mine.
          </p>
        </div>

        <ol className="process__steps">
          {processSteps.map((step) => (
            <li className="process-step" key={step.id}>
              <p className="process-step__number">{step.number}</p>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default EngineeringProcess
