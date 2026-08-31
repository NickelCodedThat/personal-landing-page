import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { flagshipProducts } from '../data/products'
import { statusLabel } from '../data/types'
import ResponsiveImage from './ResponsiveImage'

function BackArrow() {
  return (
    <svg aria-hidden="true" className="external-arrow" viewBox="0 0 16 16">
      <path d="M13 8H3M7 4 3 8l4 4" />
    </svg>
  )
}

function ExternalArrow() {
  return (
    <svg aria-hidden="true" className="external-arrow" viewBox="0 0 16 16">
      <path d="M5 3h8v8M13 3 3 13" />
    </svg>
  )
}

function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const product = flagshipProducts.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product || !product.caseStudy) {
    return <Navigate to="/" replace />
  }

  const { caseStudy } = product

  return (
    <main id="main-content" tabIndex={-1} className="case-study">
      <div className="container case-study__header">
        <Link className="case-study__back" to="/#products">
          <BackArrow />
          Back to portfolio
        </Link>

        <p className="case-study__eyebrow">Case Study</p>

        <div className="case-study__heading">
          <h1 className="case-study__title">{product.name}</h1>
          <p
            className={`case-study__status case-study__status--${product.status}`}
          >
            <span aria-hidden="true"></span>
            {statusLabel[product.status]}
          </p>
        </div>

        <p className="case-study__tagline">{product.tagline}</p>
        <p className="case-study__overview">{caseStudy.overview}</p>

        <div className="case-study__meta-row">
          <div>
            <span>Role</span>
            <strong>{product.role}</strong>
          </div>

          <ul className="case-study__tech" aria-label={`${product.name} technologies`}>
            {product.tech.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="case-study__actions">
          {product.liveUrl && (
            <a
              className="button button--primary"
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View live site
              <ExternalArrow />
            </a>
          )}
        </div>
      </div>

      {product.images.length > 0 && (
        <div className="case-study__gallery">
          {product.images.map((image) => (
            <figure className="case-study__gallery-item" key={image.alt}>
              <ResponsiveImage image={image} sizes="(max-width: 900px) 92vw, 900px" />
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      )}

      <div className="container case-study__body">
        {caseStudy.sections.map((section) => (
          <section className="case-study__section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="case-study__section case-study__whats-next">
          <h2>What&apos;s next</h2>
          <p>{caseStudy.whatsNext}</p>
        </section>
      </div>
    </main>
  )
}

export default CaseStudy
