//Cree una función que verifique si un número nes divisible por dos números x Y y .
// Todas las entradas son números positivos distintos de cero.


const divisible = (n,x,y) =>{
  if ((n % x) === 0 && (n % y) === 0){
    return true
  }else{
    return false
  }
}




console.log(divisible(3,3,4))



//return n % x === 0 && n % y === 0


//return (n % x === 0 && n % y === 0) ? true : false;