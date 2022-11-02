//Dada una matriz de enteros como cadenas y números, devuelva la suma de los
//valores de la matriz como si todos fueran números.

//Devuelve tu respuesta como un número.


const sumMix = (x)=>{
   return x.map(Number).reduce((prev,act) => prev + act)
}

console.log(sumMix([9, 3, '7', '3']))