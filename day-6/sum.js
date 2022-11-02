//Escriba un programa que encuentre la suma de todos los números del 1 al num. 
//El número siempre será un entero positivo mayor que 0.


const sumation = (number) =>{
    let arr = []
    for(let i = 1; i <= number; i++){
        arr.push(i)
    }
    return arr.reduce((prev,act) => prev + act,0)
}

console.log(sumation(8))


// let result = 0;
//   for (var i = 1; i <= num; i++) {
//     result += i;
//   }
  
//   return result;