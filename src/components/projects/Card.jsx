import Date from './FormatedDate'
import Technologies from './Technologies'

function Card ({ project }) {
  return (
    <div className='project__card'>
      <a
        href={`/proyecto/${project.slug}`}
        className='project__img block'
      >
        <img
          src={project.routeImages.preview}
          alt={`Foto del proyecto ${project.title}`}
          className='flex'
        />
      </a>
      <div className='project__content'>
        <a href={`/proyecto/${project.slug}`}>
          <h3>{project.title}</h3>
        </a>
        <div className='flex align-center justify-between flex-wrap'>
          <Technologies technologies={project.technologies} />
          <Date date={project.endDate} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
    </div>
  )
}

export default Card
