import ProjectCard from './ProjectCard'
import { projects } from '../data/project'






function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Selected Work</p>

          <h2 className="section-heading__title">
            Projects built around real problems.
          </h2>

          <p className="section-heading__description">
            A selection of websites and applications focused on usability,
            design, and practical business outcomes.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              stack={project.stack}
              image={project.image}
              imageAlt={project.imageAlt}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects