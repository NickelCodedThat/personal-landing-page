import type { Project } from '../data/project'

type ProjectCardProps = Omit<Project, 'id'>

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      className="external-arrow"
      viewBox="0 0 16 16"
    >
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

function ProjectImage({ image }: Pick<Project, 'image'>) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`${image.avif[0]} 720w, ${image.avif[1]} 1200w`}
        sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1248px) calc(50vw - 36px), 564px"
      />
      <img
        src={image.webp[1]}
        srcSet={`${image.webp[0]} 720w, ${image.webp[1]} 1200w`}
        sizes="(max-width: 680px) calc(100vw - 40px), (max-width: 1248px) calc(50vw - 36px), 564px"
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

function ProjectCard({
  title,
  type,
  description,
  focus,
  technologies,
  image,
  liveUrl,
  codeUrl,
  availability,
}: ProjectCardProps) {
  const publicLiveSite = availability === 'public' ? liveUrl : undefined
  const opensInNewTab = `${title} live site (opens in a new tab)`

  return (
    <article
      className={`project-card ${
        publicLiveSite ? 'project-card--interactive' : ''
      }`}
    >
      {publicLiveSite ? (
        <a
          className="project-card__visual project-card__visual-link"
          href={publicLiveSite}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={opensInNewTab}
        >
          <ProjectImage image={image} />
        </a>
      ) : (
        <div className="project-card__visual">
          <ProjectImage image={image} />
        </div>
      )}

      <div className="project-card__content">
        <div className="project-card__meta">
          <p className="project-card__type">{type}</p>
          <p
            className={`project-card__status project-card__status--${availability}`}
          >
            <span aria-hidden="true"></span>
            {availability === 'public' ? 'Live' : 'Client preview'}
          </p>
        </div>

        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

        <dl className="project-card__focus">
          <dt>Project focus</dt>
          <dd>{focus}</dd>
        </dl>

        <ul
          className="project-card__stack"
          aria-label={`${title} technologies and scope`}
        >
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {publicLiveSite && (
            <a
              href={publicLiveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              View live site
              <ExternalArrow />
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View code
              <ExternalArrow />
            </a>
          )}

          {availability === 'protected' && (
            <p className="project-card__restricted">
              <LockIcon />
              Protected client preview
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
