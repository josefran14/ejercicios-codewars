// Escribe una función que calcule el promedio de los números en una lista dada.

// Nota: las matrices vacías deben devolver 0.


const average = (array) => {
    if(array.length === 0){
       return 0
    }else{
        return array.reduce((prev,act) => prev + act, 0) / array.length
    }
}

console.log(average([1,2,3,4]))