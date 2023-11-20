import { useState } from 'react'
export const ArrowLeft = () => {
  return <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-arrow-left'><line x1='19' y1='12' x2='5' y2='12' /><polyline points='12 19 5 12 12 5' /></svg>
}
export const ArrowRight = () => {
  return <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-arrow-right'><line x1='5' y1='12' x2='19' y2='12' /><polyline points='12 5 19 12 12 19' /></svg>
}
function ImageSlider ({ project }) {
  const [wordData, setWordData] = useState(project[0])
  const [val, setVal] = useState(0)

  const handleClick = (index) => {
    setVal(index)
    const wordSlider = project[index]
    setWordData(wordSlider)
  }
  const handleNext = () => {
    const index = val < project.length - 1 ? val + 1 : 0
    setVal(index)
    const wordSlider = project[index]
    setWordData(wordSlider)
  }
  const handlePrevious = () => {
    const index = val <= project.length - 1 && val > 0 ? val - 1 : project.length - 1
    setVal(index)
    const wordSlider = project[index]
    setWordData(wordSlider)
  }

  return (
    <div className='carousel-project flex flex-column align-center img'>
      <div className=' carousel-main-image flex'>
        <button className='btn' onClick={handlePrevious}><ArrowLeft /></button>
        <img src={wordData.url} height='500' width='800' className='main-image-carousel' />
        <button className='btn ' onClick={handleNext}><ArrowRight /></button>
      </div>
      <div className='carousel-images flex justify-center flex-wrap'>
        {project.map((project, i) =>
          <div className='thumbnail' key={i}>
            <img className={wordData.id === i ? 'clicked' : ''} src={project.url} onClick={() => handleClick(i)} height='70' width='100' />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageSlider
