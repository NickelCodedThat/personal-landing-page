import ProductRow from './ProductRow'
import { flagshipProducts } from '../data/products'

function FlagshipProducts() {
  return (
    <section
      className="flagship"
      id="products"
      aria-labelledby="flagship-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Flagship Products</p>

          <h2 className="section-heading__title" id="flagship-title">
            Software I design, build, and run.
          </h2>

          <p className="section-heading__description">
            Full-stack products — not client sites — built end to end:
            architecture, data model, and interface.
          </p>
        </div>
      </div>

      <div className="flagship__rows">
        {flagshipProducts.map((product, index) => (
          <ProductRow key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}

export default FlagshipProducts
