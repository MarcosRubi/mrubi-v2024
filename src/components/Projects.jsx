import Card from '../components/projects/Card'
import NotResults from './projects/NotResults'
import NavFilters from './projects/NavFilters'
import dataProjects from '../data/projects.json'
import { useOrderProjects, useSelectedLanguages, useVisibleProjects } from '../store/projects'
import { useEffect, useState } from 'react'

function Projects () {
  const { visibleProjects, setVisibleProjects } = useVisibleProjects(state => state)
  const { orderSelected } = useOrderProjects(state => state)
  const { selectedLanguages } = useSelectedLanguages(state => state)
  const [projects, setProjects] = useState(dataProjects)

  useEffect(() => {
    const filteredProjects = dataProjects.filter(project =>
      selectedLanguages.every(language => project.technologies.includes(language))
    )

    const sortedProjects = [...filteredProjects].sort((a, b) => {
      const dateA = new Date(a.endDate)
      const dateB = new Date(b.endDate)
      return orderSelected === 'old' ? dateA - dateB : dateB - dateA
    })

    setProjects(sortedProjects)
  }, [selectedLanguages, orderSelected])

  const handleProjectsButtonClick = (e, val) => {
    setVisibleProjects(val)
    e.target.classList.contains('show-more')
      ? e.target.scrollIntoView(true)
      : setTimeout(() => {
        e.target.scrollIntoView(false)
      }, 10)
  }

  return (
    <section className='projects'>
      <div className='container' id='projects'>
        <h2 className='text-center'>Proyectos</h2>
        <div>
          <p>De los más de 50 proyectos, he seleccionado los más relevantes.</p>
          <p>No son realizados con tutoriales, descargas web ni trabajos universitarios.</p>
        </div>

        <NavFilters />

        {projects.length === 0 && <NotResults />}
        <div className='projects__container'>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </div>
        <div className='flex-wrap btn-updates flex justify-center align-center '>
          <button
            className={`btn btn-primary show-more ${visibleProjects >= projects.length ? 'hide' : ''}`}
            onClick={(e) => handleProjectsButtonClick(e, 3)}
          >
            <span>Ver más</span>
          </button>
          <button
            className={`btn btn-secondary show-less ${projects.length <= 6 || visibleProjects <= 6 ? 'hide' : ''}`}
            onClick={(e) => handleProjectsButtonClick(e, -3)}
          >
            <span>Ver menos</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
