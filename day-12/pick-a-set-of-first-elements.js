//Escribe una función para obtener los primeros elementos de una secuencia.
//Pasar un parámetro n(predeterminado= 1) devolverá los primeros nelementos de la secuencia.



const first = (arr,n) =>{
if(n === undefined){
   return arr.slice(0,1)
}else{
   return arr.slice(0,n)
}
}


console.log(first(['a', 'b', 'c', 'd', 'e'],2))