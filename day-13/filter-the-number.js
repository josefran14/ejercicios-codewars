// ¡Oh, no! El número se ha confundido con el texto. Su objetivo es recuperar el número del texto, 
// ¿puede devolver el número a su estado original?

// Tarea
// Su tarea es devolver un número de una cadena.


const filter = (value) =>{
    let filter = value.replace(/[a-z]/g,"")
    return Number(filter)
}


console.log(filter("123"))