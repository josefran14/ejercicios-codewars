//se le proporciona una cadena que contiene una secuencia de secuencias de caracteres 
//separadas por comas.

//Escriba una función que devuelva una nueva cadena que contenga las mismas secuencias de caracteres, 
//excepto el primero y el último, pero esta vez separados por espacios.

//Si la cadena de entrada está vacía o si la eliminación del primer y último elemento haría
//que la cadena resultante estuviera vacía, devuelva un valor vacío (representado 
//como un valor genérico NULL

const remove = (arr) =>{
    return arr.split(",").slice(1,-1).join(" ") || null
}


console.log(remove('1 3'))