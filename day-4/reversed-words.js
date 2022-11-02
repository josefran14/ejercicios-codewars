//Complete la solución para que invierta todas las palabras dentro de la cadena pasada.
//pendiente

const reversed = (str) =>{
    return str.replace(/ /g,",").split(",").reverse().join().replace(/,/g," ")
}


console.log(reversed("yoda doesn't speak like this"))