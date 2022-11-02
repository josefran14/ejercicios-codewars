// Necesitas escribir una función que invierta las palabras en una cadena dada.
//  Una palabra también puede caber en una cadena vacía. Si esto no es lo suficientemente claro, 
//  aquí hay algunos ejemplos:

// Como la entrada puede tener espacios finales, también deberá ignorar los espacios en 
// blanco innecesarios.

// Ejemplo ( Entrada --> Salida )

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"


const reverse =(string)=>{
    //return string.replace(/ /g,",").split(",").reverse().join().replace(/,/g," ")
    return string.split(' ').reverse().join(' ')
  }



  console.log(reverse('I am an expert at this'))