//Función de escritura RemoveExclamationMarks que elimina todos los signos
 //de exclamación de una cadena determinada.


 const removeExclamationMarks = (s)=> {
    return s.replace(/!/g,"")
  }


console.log(removeExclamationMarks("Hello! word!"))