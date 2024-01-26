function ButtonGoBack () {
  const goBackHandler = () => {
    window.history.back()
  }

  return (
    <button
      className='btn btn-secondary'
      onClick={goBackHandler}
    >
      <span>Ir a proyectos</span>
    </button>
  )
}

export default ButtonGoBack
