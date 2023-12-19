function FormatedDate ({ date }) {
  function formatDate (date) {
    // Dividir la cadena de fecha en año, mes y día
    const [ano, mes, dia] = date.split('-')

    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]

    // Formatear la fecha como "07/Julio/2023"
    return `${dia}/${meses[parseInt(mes, 10) - 1]}/${ano}`
  }
  return (
    <time className='date'>{formatDate(date)} </time>
  )
}

export default FormatedDate
