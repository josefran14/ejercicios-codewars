//Se le dan dos matrices ordenadas que solo contienen números enteros.
//Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden asc. 
//Complete la función mergeArrays(arr1, arr2), donde arr1 y arr2 son las matrices ordenadas originales.

//No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros.
//Si tanto arr1 como arr2 están vacíos, simplemente devuelva una matriz vacía.

//Nota: arr1 y arr2 pueden clasificarse en diferentes órdenes. También arr1 y arr2 pueden tener 
//los mismos números enteros. Eliminar duplicado en el resultado devuelto.


const mergeArrays = (arr1, arr2) =>{
    let arr = arr1.concat(arr2)
    return [... new Set (arr)].sort((a,b) => a-b)
}


console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))


//return [...new Set(a.concat(b))].sort((a,b)=>a-b)

//return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));