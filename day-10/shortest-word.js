//Simple, dada una cadena de palabras, devuelve la longitud de la(s) palabra(s) más corta(s).


const findShort = (str) =>{
    let array = str.split(" ")
    let arraylongitud = array.map((item) => item.length)
   let min = Math.min(...arraylongitud)
   let ind = arraylongitud.indexOf(min)
   return array[ind].length
}



console.log(findShort("bitcoin take over the world maybe who knows perhaps"))