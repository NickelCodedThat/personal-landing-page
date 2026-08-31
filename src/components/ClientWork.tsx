import ClientCard from './ClientCard'
import { clientProjects } from '../data/clients'

function ClientWork() {
  return (
    <section
      className="client-work"
      id="client-work"
      aria-labelledby="client-work-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Client Work</p>

          <h2 className="section-heading__title" id="client-work-title">
            Delivered for real businesses.
          </h2>

          <p className="section-heading__description">
            Production websites for real clients — business understanding,
            visual execution, and delivery, not just code.
          </p>
        </div>

        <div className="client-work__grid">
          {clientProjects.map((client) => (
            <ClientCard key={client.id} {...client} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientWork
