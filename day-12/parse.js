//Escriba un programa que devuelva la edad de la niña (0-9) como un número entero.


const parse = (string) =>{
   let remove = string.replace(/[a-z]/g,"")
   return Number(remove)
}


console.log(parse("4 years old"))


//return parseInt(inputString)