//Devuelve una matriz, donde el primer elemento es el recuento de números 
//positivos y el segundo elemento es la suma de números negativos. 0 no es ni positivo ni negativo.

//Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.



const countPositives = (arr) =>{
    return (arr && arr.length) ? [
        arr.filter(x => x > 0).length,
        arr.reduce((t, c) => c < 0 ? t + c : t, 0)
      ] : [];
}


console.log(countPositives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))



// if(arr.length === 0){
//     return []
// }else{
//     let arrNegatives = [arr.filter((item) => item < 0).reduce((prev,act) => prev + act)]
//     let arrPositive = [arr.filter((item) => item > 0).length]
//     let array = arrPositive.concat(arrNegatives)
//     return array
// }