import ToggleTheme from './header/ToggleTheme'
import SettingTheme from './header/SettingTheme'
import Nav from './header/Nav'
import { useState, useRef, useEffect } from 'react'

function Header () {
  let timeout
  const [sticky, setSticky] = useState('')
  const menuBackdropRef = useRef(null)
  const [menuStyle, setMenuStyle] = useState({
    transform: 'translate(0, 0)',
    opacity: 0,
    visibility: 'hidden'
  })

  const handleScroll = () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(getScroll, 100)
  }

  const getScroll = () => {
    window.scrollY > 0 ? setSticky('sticky') : setSticky('')
  }

  useEffect(() => {
    handleScroll() // Llama a handleScroll para configurar el estado inicial
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`menu fixed w-100 ${sticky}`}>
      <div className='container flex align-center justify-between relative'>
        <a href='/' className='logo' aria-label='Ir a la página de inicio'>
          <img src='/logo.webp' alt='Logo de Marcos Rubí - Gema Ruby' loading='eager' width='40px' height='40px' />
        </a>
        <Nav menuStyle={menuStyle} setMenuStyle={setMenuStyle} />
        <div className='flex align-center'>
          <ToggleTheme />
          <SettingTheme />
        </div>
      </div>
      <div
        id='menu-backdrop'
        style={{
          transform: menuStyle.transform,
          opacity: menuStyle.opacity,
          visibility: menuStyle.visibility,
          width: menuStyle.width,
          height: menuStyle.height
        }}
        ref={menuBackdropRef}
      />
    </header>
  )
}

export default Header
