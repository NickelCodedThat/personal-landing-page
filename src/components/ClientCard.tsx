import type { ClientProject } from '../data/clients'
import { statusLabel } from '../data/types'
import ResponsiveImage from './ResponsiveImage'

const IMAGE_SIZES =
  '(max-width: 680px) calc(100vw - 40px), (max-width: 1248px) calc(50vw - 36px), 564px'

function ExternalArrow() {
  return (
    <svg aria-hidden="true" className="external-arrow" viewBox="0 0 16 16">
      <path d="M5 3h8v8M13 3 3 13" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
    </svg>
  )
}

function ClientCard({
  name,
  type,
  description,
  focus,
  tech,
  image,
  liveUrl,
  status,
  protected: isProtected,
}: ClientProject) {
  const publicLiveSite = !isProtected ? liveUrl : undefined

  const media = image ? (
    <ResponsiveImage image={image} sizes={IMAGE_SIZES} />
  ) : (
    <div className="client-card__visual-empty" aria-hidden="true" />
  )

  return (
    <article className={`client-card ${publicLiveSite ? 'client-card--interactive' : ''}`}>
      {publicLiveSite ? (
        <a
          className="client-card__visual client-card__visual-link"
          href={publicLiveSite}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} live site (opens in a new tab)`}
        >
          {media}
        </a>
      ) : (
        <div className="client-card__visual">{media}</div>
      )}

      <div className="client-card__content">
        <div className="client-card__meta">
          <p className="client-card__type">{type}</p>
          <p className={`client-card__status client-card__status--${status}`}>
            <span aria-hidden="true"></span>
            {statusLabel[status]}
          </p>
        </div>

        <h3 className="client-card__title">{name}</h3>
        <p className="client-card__description">{description}</p>

        <p className="client-card__focus">{focus}</p>

        <ul className="client-card__stack" aria-label={`${name} technologies`}>
          {tech.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="client-card__actions">
          {publicLiveSite && (
            <a href={publicLiveSite} target="_blank" rel="noopener noreferrer">
              View live site
              <ExternalArrow />
            </a>
          )}

          {isProtected && (
            <p className="client-card__restricted">
              <LockIcon />
              Protected client preview
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export default ClientCard
