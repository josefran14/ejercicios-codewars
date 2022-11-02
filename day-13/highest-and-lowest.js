//En esta pequeña tarea, se le da una cadena de números separados por espacios 
//y tiene que devolver el número más alto y el más bajo.


const higAndLow = (numbers) =>{
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
}


console.log(higAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))


//  let arr = numbers.split(' ').map(Number)
  
//   let min = Math.min.apply(...arr)
//   let max = Math.max.apply(...arr)
  
//   return max + ' ' + min