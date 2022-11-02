//Soy nuevo en la codificación y ahora quiero obtener la suma de dos matrices... En realidad, 
//la suma de todos sus elementos. Agradeceré tu ayuda.

//PS Cada matriz incluye solo números enteros. La salida también es un número.


const plusArray = (arr1,arr2) =>{
    return arr1.concat(arr2).reduce((prev,act) => prev + act, 0)
}

console.log(plusArray([-1, -2, -3], [-4, -5, -6]))



// let arr = [...arr1, ...arr2];
//   return arr.reduce((a, b) => a + b);