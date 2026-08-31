import { moreWork } from '../data/moreWork'
import { statusLabel } from '../data/types'
import ResponsiveImage from './ResponsiveImage'

function ExternalArrow() {
  return (
    <svg aria-hidden="true" className="external-arrow" viewBox="0 0 16 16">
      <path d="M5 3h8v8M13 3 3 13" />
    </svg>
  )
}

function MoreWork() {
  return (
    <section
      className="more-work"
      id="more-work"
      aria-labelledby="more-work-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">More Work</p>

          <h2 className="section-heading__title" id="more-work-title">
            Smaller builds, still shipped.
          </h2>
        </div>

        <div className="more-work__grid">
          {moreWork.map((item) => (
            <article className="more-work-card" key={item.id}>
              <div className="more-work-card__visual">
                {item.image ? (
                  <ResponsiveImage
                    image={item.image}
                    sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1080px) calc(50vw - 32px), 360px"
                  />
                ) : (
                  <div className="more-work-card__placeholder">
                    <p className="more-work-card__placeholder-quote">
                      &ldquo;Know what matters next.&rdquo;
                    </p>
                  </div>
                )}
              </div>

              <div className="more-work-card__content">
                <div className="more-work-card__meta">
                  <h3 className="more-work-card__title">{item.name}</h3>
                  <p className={`more-work-card__status more-work-card__status--${item.status}`}>
                    <span aria-hidden="true"></span>
                    {statusLabel[item.status]}
                  </p>
                </div>

                <p className="more-work-card__description">{item.description}</p>

                <ul className="more-work-card__stack" aria-label={`${item.name} technologies`}>
                  {item.tech.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                {item.liveUrl && (
                  <a
                    className="more-work-card__link"
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site
                    <ExternalArrow />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreWork
