//Obtiene una matriz de números, devuelve la suma de todos los positivos.
// pendiente

const sum = (arr) =>{
    if(arr.length === 0){
        return 0
    }else if(arr.every((item) => item < 0)){
       return 0
    }else{
      return arr.filter((item) => item > 0).reduce((prev,act) => prev + act)
    }
    
}

console.log(sum([-1, -2, -3, -4, -5]))