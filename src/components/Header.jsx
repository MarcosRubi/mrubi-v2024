import ToggleTheme from './header/ToggleTheme'
import SettingTheme from './header/SettingTheme'
import Nav from './header/Nav'
import { useState } from 'react'

function Header () {
  let timeout
  const [sticky, setSticky] = useState('')
  window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(function () {
        window.scrollY > 0 ? setSticky('sticky') : setSticky('')
      }, 100)
    }
  })

  return (
    <header className={`menu fixed w-100 ${sticky}`}>
      <div className='container flex align-center justify-between'>
        <a href='/' className='logo' aria-label='Ir a la página de inicio'>
          <img src='/logo.svg' alt='Logo de Marcos Rubí - Gema Ruby' loading='eager' width='40px' height='40px' />
        </a>
        <Nav />
        <ToggleTheme />
        <SettingTheme />
      </div>
    </header>
  )
}

export default Header
