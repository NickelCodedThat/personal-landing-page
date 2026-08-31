import type { ArchitectureStage } from '../data/products'

type ArchitectureDiagramProps = {
  stages: ArchitectureStage[]
}

function ArchitectureDiagram({ stages }: ArchitectureDiagramProps) {
  return (
    <div className="architecture-diagram">
      {stages.map((stage, index) => (
        <div className="architecture-diagram__stage" key={stage.label}>
          <div className="architecture-diagram__row">
            <span
              className={`architecture-diagram__marker ${
                stage.built
                  ? 'architecture-diagram__marker--built'
                  : 'architecture-diagram__marker--planned'
              }`}
            >
              {stage.built ? 'Built' : 'Planned'}
            </span>
            <p className="architecture-diagram__label">{stage.label}</p>
          </div>
          <p className="architecture-diagram__detail">{stage.detail}</p>
          {index < stages.length - 1 && (
            <span className="architecture-diagram__connector" aria-hidden="true"></span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ArchitectureDiagram
