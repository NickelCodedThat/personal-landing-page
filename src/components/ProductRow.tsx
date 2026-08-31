import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { FlagshipProduct } from '../data/products'
import { statusLabel } from '../data/types'
import ArchitectureDiagram from './ArchitectureDiagram'
import ResponsiveImage from './ResponsiveImage'

type ProductRowProps = {
  product: FlagshipProduct
  index: number
}

function ExternalArrow() {
  return (
    <svg aria-hidden="true" className="external-arrow" viewBox="0 0 16 16">
      <path d="M5 3h8v8M13 3 3 13" />
    </svg>
  )
}

function InlineArrow() {
  return (
    <svg aria-hidden="true" className="external-arrow" viewBox="0 0 16 16">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function ProductVisual({ product }: { product: FlagshipProduct }) {
  if (product.heroImage) {
    return (
      <div className="product-row__frame">
        <div className="product-row__frame-bar" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ResponsiveImage image={product.heroImage} sizes="(max-width: 900px) 92vw, 640px" />
      </div>
    )
  }

  if (product.architecture) {
    return <ArchitectureDiagram stages={product.architecture} />
  }

  return (
    <div className="product-row__tech-panel">
      <p className="product-row__tech-panel-label">Built with</p>
      <ul className="product-row__tech-panel-list">
        {product.tech.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  )
}

function ProductRow({ product, index }: ProductRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const reversed = index % 2 === 1

  useEffect(() => {
    const row = rowRef.current
    if (!row) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(row)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      className={`product-row ${reversed ? 'product-row--reversed' : ''} ${
        isRevealed ? 'product-row--revealed' : ''
      }`}
      ref={rowRef}
    >
      <div className="container product-row__grid">
        <div className="product-row__visual">
          <ProductVisual product={product} />
        </div>

        <div className="product-row__content">
          <p className="product-row__index">{String(index + 1).padStart(2, '0')}</p>

          <div className="product-row__heading">
            <h3 className="product-row__name">{product.name}</h3>
            <p
              className={`product-row__status product-row__status--${product.status}`}
            >
              <span aria-hidden="true"></span>
              {statusLabel[product.status]}
            </p>
          </div>

          <p className="product-row__tagline">{product.tagline}</p>
          <p className="product-row__problem">{product.problem}</p>

          <ul className="product-row__highlights">
            {product.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight.title}>
                <strong>{highlight.title}</strong>
                <span>{highlight.description}</span>
              </li>
            ))}
          </ul>

          <ul className="product-row__tags" aria-label={`${product.name} technologies`}>
            {product.tech.slice(0, 5).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className="product-row__actions">
            {product.hasCaseStudy && (
              <Link to={`/work/${product.slug}`}>
                Read case study
                <InlineArrow />
              </Link>
            )}

            {product.liveUrl && (
              <a href={product.liveUrl} target="_blank" rel="noopener noreferrer">
                View live site
                <ExternalArrow />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductRow
