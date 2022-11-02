//Dada una matriz de enteros, su solución debe encontrar el entero más pequeño.


const small = (arr) =>{
   return Math.min(...arr)
}

console.log(small([78,56,232,12,8]))