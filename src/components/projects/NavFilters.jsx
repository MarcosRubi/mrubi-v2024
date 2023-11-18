import { useOptionActive, useOrderProjects, useSelectedLanguages } from '../../store/projects'

export const IconArrowDown = () => {
  return <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z' /></svg>
}

function NavFilters () {
  const { optionActive, setOptionActive } = useOptionActive(state => state)
  const { orderSelected, setOrderSelected } = useOrderProjects(state => state)
  const { selectedLanguages, setSelectedLanguages } = useSelectedLanguages(state => state)

  const handleOnClickFilter = (optionSelected) => {
    if (optionActive === optionSelected) {
      setOptionActive(null)
      return
    }
    setOptionActive(optionSelected)
  }

  return (
    <div className='filters flex jcustify-center align-center relative'>
      <button
        className={`filter flex justify-center align-center btn btn-secondary ${optionActive === 'date' ? 'active' : ''
          }`}
        onClick={() => {
          handleOnClickFilter('date')
        }}
      >
        <span>Ordenar por</span>
        <IconArrowDown />
      </button>
      <button
        className={`filter flex justify-center align-center btn btn-secondary ${optionActive === 'lang' ? 'active' : ''
      }`}
        onClick={() => {
          handleOnClickFilter('lang')
        }}
      >
        <span>Filtrar por</span>
        <IconArrowDown />
      </button>
      <div
        className={`options w-100 absolute ${optionActive === 'date' ? 'show' : ''
      }`}
      >
        <div className=' flex flex-column'>
          <button
            className={`btn ${orderSelected === 'new' ? 'selected' : ''}`}
            onClick={() => { setOrderSelected('new') }}
          >
            <span>Más recientes</span>
          </button>
          <button
            className={`btn ${orderSelected === 'old' ? 'selected' : ''}`}
            onClick={() => { setOrderSelected('old') }}
          >
            <span>Más antiguos</span>
          </button>
        </div>
      </div>
      <div
        className={`options w-100 absolute languages ${optionActive === 'lang' ? 'show' : ''
      }`}
      >
        <div className='flex flex-column'>
          <p>lenguajes:</p>
          <label htmlFor='js' className='flex align-center language'>
            <span>JavaScript</span>
            <input
              type='checkbox'
              name='js'
              id='js'
              onChange={() => setSelectedLanguages('JavaScript')}
              checked={selectedLanguages.includes('JavaScript')}
            />
          </label>
          <label htmlFor='php' className='flex align-center language'>
            <span>PHP</span>
            <input
              type='checkbox'
              name='php'
              id='php'
              onChange={() => setSelectedLanguages('PHP')}
              checked={selectedLanguages.includes('PHP')}
            />
          </label>
          <label htmlFor='sql' className='flex align-center language'>
            <span>MySQL</span>
            <input
              type='checkbox'
              name='sql'
              id='sql'
              onChange={() => setSelectedLanguages('MySQL')}
              checked={selectedLanguages.includes('MySQL')}
            />
          </label>
        </div>
        <div className='flex flex-column'>
          <p>herramientas:</p>
          <label htmlFor='react' className='flex align-center language'>
            <span>React</span>
            <input
              type='checkbox'
              name='react'
              id='react'
              onChange={() => setSelectedLanguages('React')}
              checked={selectedLanguages.includes('React')}
            />
          </label>
          <label htmlFor='astro' className='flex align-center language'>
            <span>Astro</span>
            <input
              type='checkbox'
              name='astro'
              id='astro'
              onChange={() => setSelectedLanguages('Astro')}
              checked={selectedLanguages.includes('Astro')}
            />
          </label>
          <label htmlFor='api' className='flex align-center language'>
            <span>API</span>
            <input
              type='checkbox'
              name='api'
              id='api'
              onChange={() => setSelectedLanguages('API')}
              checked={selectedLanguages.includes('API')}
            />
          </label>
          <label htmlFor='pug' className='flex align-center language'>
            <span>PUG</span>
            <input
              type='checkbox'
              name='pug'
              id='pug'
              onChange={() => setSelectedLanguages('PUG')}
              checked={selectedLanguages.includes('PUG')}
            />
          </label>
          <label htmlFor='scss' className='flex align-center language'>
            <span>SCSS</span>
            <input
              type='checkbox'
              name='scss'
              id='scss'
              onChange={() => setSelectedLanguages('SCSS')}
              checked={selectedLanguages.includes('SCSS')}
            />
          </label>
        </div>
        <div className='flex flex-column'>
          <p>Metodologías:</p>
          <label htmlFor='poo' className='flex align-center language'>
            <span>POO</span>
            <input
              type='checkbox'
              name='poo'
              id='poo'
              onChange={() => setSelectedLanguages('POO')}
              checked={selectedLanguages.includes('POO')}
            />
          </label>
          <label htmlFor='ajax' className='flex align-center language last'>
            <span>AJAX</span>
            <input
              type='checkbox'
              name='ajax'
              id='ajax'
              onChange={() => setSelectedLanguages('AJAX')}
              checked={selectedLanguages.includes('AJAX')}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default NavFilters
