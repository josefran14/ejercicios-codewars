// Dada una cadena de palabras (x), debe devolver una matriz de palabras, ordenadas alfabéticamente por el carácter final de cada una.

// Si dos palabras tienen la misma última letra, la matriz devuelta debería mostrarlas en el orden en que aparecieron en la cadena dada.



const sortByLastChar = (str) =>{
   return str.split(" ").sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1) )
}



console.log(sortByLastChar('man i need a taxi up to ubud'))