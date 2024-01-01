import { useState, useRef, useEffect, useCallback } from 'react'
export const IconInstagram = () => {
  return <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z' /></svg>
}
export const IconLinkedin = () => {
  return <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z' /></svg>
}
export const IconFacebook = () => {
  return <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M581.76 80.496c3.808 0 5.999.16 5.999.16h83.568l-.431 96h-83.008c-45.68 0-44.624 39.007-44.624 39.007v152.192h161.632l-22.56 95.872h-139.6v479.776h-95.904l-.064-479.776H319.36l-.256-95.872h127.712V218.671C446.83 88.591 554.864 80.495 581.76 80.495zm89.567.159h.16-.16zm-89.567-64.16c-23.008 0-67.97 3.809-110.562 29.473-40.32 24.256-88.368 73.935-88.368 172.688v85.183h-63.712c-17.008 0-33.312 6.784-45.344 18.817a64.003 64.003 0 0 0-18.655 45.408l.256 95.872c.128 35.248 28.752 63.776 64 63.776h63.408l.064 415.776c0 35.344 28.657 64 64 64h95.905c35.343 0 64-28.656 64-64V527.712h75.6c28.4 0 53.407-18.72 61.407-45.967l22.56-95.873c5.68-19.343 1.903-40.255-10.192-56.368a63.912 63.912 0 0 0-51.217-25.664h-97.632v-63.152l63.632-.032c35.216 0 63.84-28.464 64-63.712l.431-92.752a64.3 64.3 0 0 0 .097-3.536c0-35.344-28.592-64-63.935-64h-81.936c-1.84-.096-4.496-.16-7.807-.161z' /></svg>
}
export const IconTwitter = () => {
  return <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path d='M684.4 158.688c52.88 0 100.621 21.636 134.253 56.372 41.84-8.096 81.28-22.848 116.721-43.28-13.712 41.633-42.88 76.56-80.815 98.656 37.12-4.368 72.656-13.904 105.632-28.16-24.72 35.744-55.84 67.216-91.776 92.368.336 7.632.529 15.344.529 23.023 0 235.728-185.008 507.615-523.312 507.615-103.84 0-200.56-29.631-281.903-80.223a377.607 377.607 0 0 0 43.84 2.527c86.16 0 165.503-28.496 228.463-76.4-80.528-1.376-148.496-53.008-171.808-123.84a188.078 188.078 0 0 0 34.624 3.216c16.72 0 33.008-2.16 48.4-6.256-84.128-16.336-147.536-88.448-147.536-174.93v-2.287c24.816 13.376 53.152 21.408 83.344 22.336-49.376-32.033-81.84-86.56-81.84-148.465 0-32.72 9.089-63.376 24.913-89.632C216.817 299.2 352.337 370.24 505.217 377.712c-3.153-13.025-4.784-26.784-4.784-40.624 0-98.544 82.351-178.4 183.967-178.4zm275.789 83.621h.16-.16zM684.397 94.692c-125.664 0-229.773 91.809-245.806 210.433-102.816-20.656-196.32-75.088-263.504-154.944a63.993 63.993 0 0 0-48.977-22.815 66.23 66.23 0 0 0-5.023.192 64.115 64.115 0 0 0-49.776 30.784 237.575 237.575 0 0 0-34.097 122.656c0 28.848 5.183 56.944 15.008 83.216-10.464 11.632-16.496 26.848-16.496 42.912v2.288c0 62.689 24.784 120.864 65.936 164.464-2.368 10.976-1.84 22.464 1.776 33.472 14.193 43.183 40.033 80.4 73.537 108.75-22.497 5.009-45.712 7.537-69.409 7.537-12.528 0-24.72-.688-36.256-2.097-2.56-.32-5.088-.432-7.632-.432-26.88 0-51.28 16.944-60.336 42.784-9.936 28.32 1.089 59.712 26.56 75.568 94.529 58.817 203.712 89.872 315.712 89.872 364.032 0 583.008-284.976 587.264-563.344a429.584 429.584 0 0 0 78.448-85.152 63.392 63.392 0 0 0 12.96-38.496c0-21.776-10.895-41.024-27.487-52.593 7.184-24.624-1.009-51.28-21.009-67.568-11.68-9.504-26-14.336-40.4-14.336a63.75 63.75 0 0 0-31.968 8.56c-21.152 12.193-43.776 21.841-67.6 28.786-43.105-32.432-96.545-50.496-151.425-50.497z' /></svg>
}

function Nav ({ menuStyle, setMenuStyle }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const navElementsRef = useRef(null)
  const toggleMenu = useCallback((event) => {
    setIsMenuVisible((prev) => !prev)
    const target = event.target
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
      event.preventDefault()
      const hash = target.getAttribute('href')
      const targetElement = document.querySelector(hash)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
        toggleMenu()
      }
    }
  }, [])

  const handleMouseEnter = useCallback((element) => () => {
    const { left, top, width, height } = element.getBoundingClientRect()

    setMenuStyle({
      transform: `translate(${left}px, ${top}px)`,
      width: `${width}px`,
      height: `${height}px`,
      opacity: 1,
      visibility: 'visible'
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMenuStyle((prevStyle) => ({
      ...prevStyle,
      opacity: 0,
      visibility: 'hidden'
    }))
  }, [])

  useEffect(() => {
    const navElements = navElementsRef.current.querySelectorAll('li')

    navElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter(element))
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      navElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [handleMouseEnter, handleMouseLeave])

  return (
    <>
      <div className='menu__hamburguer flex align-center'>
        <div className='lines flex flex-column w-100' onClick={toggleMenu}>
          <span className='line w-100' />
          <span className='line w-100' />
          <span className='line w-100' />
        </div>
      </div>
      <div className={`menu__content fixed flex flex-column justify-between ${isMenuVisible ? 'show-menu' : ''}`}>
        <div className='menu__header container flex align-center justify-between'>
          <div className='logo flex align-center'>
            <img
              className='flex'
              src='/logo.svg'
              alt='Logo de Marcos Rubí - Gema Ruby'
              width='40px' height='40px'
              loading='lazy'
            />
            <span>Marcos Rubí</span>
          </div>
          <div className='icon-close flex flex-column justify-center' onClick={() => { toggleMenu() }}>
            <span className='line w-100' />
            <span className='line w-100' />
          </div>
        </div>
        <nav className='container'>
          <ul className='flex align-center flex-column-sm text-center' ref={navElementsRef}>
            <li className='w-100'><a href='/#about-me' className='w-100 inline-block' onClick={(event) => { toggleMenu(event) }}>Sobre Mí</a></li>
            <li className='w-100'><a href='/#projects' className='w-100 inline-block' onClick={(event) => { toggleMenu(event) }}>Proyectos</a></li>
            <li className='w-100'><a href='/#experience' className='w-100 inline-block' onClick={(event) => { toggleMenu(event) }}>Experiencia</a></li>
            <li className='w-100'><a href='/#my-process' className='w-100 inline-block' onClick={(event) => { toggleMenu(event) }}>Mi Proceso</a></li>
            <li className='w-100'><a href='/#contact' className='w-100 inline-block' onClick={(event) => { toggleMenu(event) }}>Contactar</a></li>
          </ul>
        </nav>
        <div className='menu__footer'>
          <div className='container flex align-center justify-between'>
            <a href='mailto:danielhernandez9980%40gmail.com' className='btn btn-secondary' onClick={() => { toggleMenu() }}><span>Enviar Correo </span></a>
            <ul className='flex align-center social-list'>
              <li>
                <a href='https://www.linkedin.com/in/marcos-rubi/' target='_blank' rel='noreferrer' aria-label='Ir al Linkedin de Marcos Rubí'><IconLinkedin /></a>
              </li>
              <li>
                <a href='https://www.instagram.com/mrubi__07/' target='_blank' rel='noreferrer' aria-label='Ir al instagram de Marcos Rubí'><IconInstagram /></a>
              </li>
              <li>
                <a href='https://www.facebook.com/MarcosRubi07' target='_blank' rel='noreferrer' aria-label='Ir al facebook de Marcos Rubí'><IconFacebook /></a>
              </li>
              <li>
                <a href='https://twitter.com/Fuhrer_RD' target='_blank' rel='noreferrer' aria-label='Ir al twitter de Marcos Rubí'><IconTwitter /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
