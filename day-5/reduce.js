//Dada una matriz no vacía de enteros, devuelva el resultado de multiplicar 
//los valores en orden.


const grow = (x) =>{
   return x.reduce((prev,act) => prev * act)
}

console.log(grow([2, 2, 2, 2, 2, 2]))