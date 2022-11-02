//Dado un número aleatorio no negativo, debe devolver los dígitos de este número 
//dentro de una matriz en orden inverso.


const digitize = (n) =>{
   let str = n.toString()
   return Array.from(str).reverse().map(Number)

}

console.log(digitize(35231))

//return String(n).split('').map(Number).reverse()