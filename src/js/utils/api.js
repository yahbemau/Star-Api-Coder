


function getData(url, callback) {
  $.ajax({
    url: url,
    method: "GET"
  })
   .done(function( data ) {
    console.log( 'Respuesta: ',data )
    callback(data)
  })
   .fail(function( error ) {
    console.log( 'Error: ' , error )
  })

}




export default getData
