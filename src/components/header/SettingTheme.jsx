import { useColorSelectStore } from '../../store/themeStore'

export const IconSetting = () => {
  return <svg stroke='currentColor' fill='none' strokeWidth='2' viewBox='0 0 24 24' strokeLinecap='round' strokeLinejoin='round' height='1em' width='1em'><circle cx='12' cy='12' r='3' /><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' /></svg>
}
function SettingTheme () {
  const handleOnClick = () => {
    document.querySelector('.menu__preset-colors').classList.toggle('show')
  }

  const { changeColor } = useColorSelectStore(state => state)

  return (
    <div className='menu__setting relative'>
      <button className='btn' onClick={handleOnClick}>
        <IconSetting />
      </button>
      <div className='menu__preset-colors absolute w-100'>
        <p>Seleccione el tema</p>
        <ul>
          <li className='w-100'>
            <div onClick={() => { changeColor('default') }}>
              <span className='theme-color' style={{ background: '#78A6C8' }} />
              <span className='theme-color' style={{ background: '#E65C4F' }} />
            </div>
          </li>
          <li className='w-100'>
            <div onClick={() => { changeColor('purple') }}>
              <span className='theme-color' style={{ background: '#9A9CEA' }} />
              <span className='theme-color' style={{ background: '#A2DCEE' }} />
            </div>
          </li>
          <li className='w-100'>

            <div onClick={() => { changeColor('blue') }}>
              <span className='theme-color' style={{ background: '#3959a2' }} />
              <span className='theme-color' style={{ background: '#a8dbd2' }} />
            </div>
          </li>
          <li className='w-100'>
            <div onClick={() => { changeColor('green') }}>
              <span className='theme-color' style={{ background: '#53D2B2' }} />
              <span className='theme-color' style={{ background: '#FFE3B3' }} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SettingTheme
