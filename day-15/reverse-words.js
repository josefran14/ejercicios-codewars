// Complete la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. 
// Deben conservarse todos los espacios en la cadena.


const reversedWords = (str) =>{
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}


console.log(reversedWords("double  spaces"))