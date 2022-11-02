//dado un conjunto de números, devuelve el inverso aditivo de cada uno. Cada positivo se vuelve negativo,
//y los negativos se vuelven positivos.



const invert = (array) => {
     return array.map((item) => -item)
}


console.log(invert([1,2,3,-4,5]))