import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="not-found">
      <div className="container">
        <p className="section-heading__eyebrow">404</p>
        <h1 className="not-found__title">Page not found.</h1>
        <p className="not-found__description">
          That page doesn&apos;t exist. Head back to the portfolio.
        </p>
        <Link className="button button--primary" to="/">
          Back to home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
