import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import data from '../data/timeline.json'

function Timeline () {
  const options = {
    type: 'loop',
    focus: 'center',
    autoHeight: true
  }
  return (
    <section className='timeline'>
      <div className='container' id='my-process'>
        <h2 className='text-center'>Mi proceso</h2>
        <Splide aria-label='Mi proceso de aprendizaje' options={options}>
          {
            data.map((timeline, id) => {
              return (
                <SplideSlide key={id}>
                  <div className='flex items-center flex-column'>
                    <div className='img'>
                      <img src={timeline.url} alt='Image 1' />
                    </div>
                    <div className='content'>
                      <span className=' block'>{timeline.date}</span>
                      <h3>{timeline.cardTitle}</h3>
                      {timeline.cardDetailedText.map((text, index) => (
                        <p key={index}>{text}</p>
                      ))}
                    </div>
                  </div>
                </SplideSlide>
              )
            })
          }
        </Splide>
      </div>
    </section>
  )
}

export default Timeline
