function ButtonGoBack () {
  const goBackHandler = () => {
    window.history.back()
  }

  const goToInicioHandler = () => {
    window.location.href = 'https://mrubi.dev/'
  }

  if (document.referrer.includes(window.location.origin)) {
    return (
      <button
        className='btn btn-secondary'
        onClick={goBackHandler}
      >
        <span>Ir a proyectos</span>
      </button>
    )
  } else {
    return (
      <button
        className='btn btn-secondary'
        onClick={goToInicioHandler}
      >
        <span>Ir a inicio</span>
      </button>
    )
  }
}

export default ButtonGoBack
