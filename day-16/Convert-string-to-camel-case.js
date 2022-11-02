// Complete el método/función para que convierta las palabras delimitadas por guiones/guiones bajos en mayúsculas y minúsculas.La primera palabra dentro de la salida debe estar en mayúsculas solo si la palabra original estaba en mayúsculas (conocido como Upper Camel Case, también conocido como caso Pascal).

// Ejemplos
// "the-stealth-warrior"se convierte en "theStealthWarrior"
// "The_Stealth_Warrior"se convierte en"TheStealthWarrior"
//PENDIENTE

const camelize = (str) =>{
   return str.replace(/\W+(.)/g, function(coincidencia, caracter){
     return caracter.toUpperCase()
   })
}


console.log(camelize("the-stealth-warrior"))