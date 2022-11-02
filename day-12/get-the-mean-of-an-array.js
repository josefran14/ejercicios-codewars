//Devuelve el promedio de la matriz dada redondeado hacia abajo a su entero más cercano.


const average = (array) =>{
    return array.reduce((prev,act) => prev + act) / array.length | 0


}
console.log(average([1,1,1,1,1,1,1,2]))