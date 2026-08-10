type ProjectCardProps = {
  title: string
  description: string
  stack: string
  image?: string
  imageAlt?: string
  liveUrl?: string
  codeUrl?: string
}

function ProjectCard({
  title,
  description,
  stack,
  image,
  imageAlt,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__visual">
        {image ? (
            <img src={image} 
            alt={imageAlt ?? ''}
            loading="lazy"
            decoding="async"
        />    
        ) : (    
            <span>Project Preview</span>
        )}    
      </div>

      <div className="project-card__content">
        <p className="project-card__stack">{stack}</p>

        <h3 className="project-card__title">
          {title}
        </h3>

        <p className="project-card__description">
          {description}
        </p>
        {(liveUrl || codeUrl) && (
  <div className="project-card__actions">
    {liveUrl && (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Site ↗
      </a>
    )}

    {codeUrl && (
      <a
        href={codeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Code ↗
      </a>
    )}
  </div>
)}
      </div>
    </article>
  )
}

export default ProjectCard