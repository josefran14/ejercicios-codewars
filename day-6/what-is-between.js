//Complete la función que toma dos enteros ( a, b) 
//y devuelva una matriz de todos los enteros entre los parámetros de entrada, incluidos ellos.

const between = (a,b) =>{
    let arr = []
    for(let i = a; i<= b; i++){
        arr.push(i)
    }
    return arr
}


console.log(between(-2,4))