import { Chrono } from 'react-chrono'
import data from '../data/timeline.json'
function Timeline () {
  return (
    <section className='timeline'>
      <div className='container'>
        <h2 className='text-center'>Mi proceso</h2>
        <Chrono
          items={data.map(item => item)}
          mode='VERTICAL_ALTERNATING'
          hideControls
          activeItemIndex={0}
          useReadMore={false}
          theme={{ primary: 'var(--color-link)', secondary: 'var(--color-link)', cardBgColor: 'var(--bg-footer)', titleColor: 'var(--text-color)', titleColorActive: 'var(--bg-color)' }}
          buttonTexts={{ first: 'Ir al principio', last: 'Ir al final', next: 'Siguiente', previous: 'Anterior' }}
        />

      </div>
    </section>
  )
}
export default Timeline
