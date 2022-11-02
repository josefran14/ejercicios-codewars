// ONDA DE VAPOR. una oración VAPORWAVE convierte todas las letras en mayúsculas y 
// agrega 2 espacios entre cada letra (o carácter especial) para crear este efecto VAPORWAVE.

// Tenga en cuenta que los espacios deben ignorarse en este caso.


const vaporcode = (string) =>{
   return string.replace(/ /g,"").split("").join("  ").toUpperCase()
}


console.log(vaporcode("Lets go to the movies"))