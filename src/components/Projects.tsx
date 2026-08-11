import ProjectCard from './ProjectCard'
import { projects } from '../data/project'

function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Selected Work</p>

          <h2 className="section-heading__title" id="projects-title">
            Projects built around real problems.
          </h2>

          <p className="section-heading__description">
            A selection of websites and applications focused on usability,
            design, and practical business needs.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(({ id, ...project }) => (
            <ProjectCard key={id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
