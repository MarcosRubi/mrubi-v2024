import Date from './FormatedDate'
import Technologies from './Technologies'

function Card ({ project }) {
  return (
    <article className='project__card'>
      <a
        href={`/proyecto/${project.slug}`}
        className='project__img block'
      >
        <img
          src={project.routeImages[0].url}
          alt={`Foto del proyecto ${project.title}`}
          className='flex'
          loading='lazy'
          width='475'
          height='348'
        />
      </a>
      <div className='project__content'>
        <a href={`/proyecto/${project.slug}`}>
          <h3>{project.title}</h3>
        </a>
        <header className='flex align-center justify-between flex-wrap'>
          <Technologies technologies={project.technologies} />
          <Date date={project.endDate} />
        </header>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
    </article>
  )
}

export default Card
