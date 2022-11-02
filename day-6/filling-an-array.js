//Queremos una matriz, pero no cualquier matriz antigua, ¡una matriz con contenido!

//Escribe una función que produzca una matriz con los números 0 hasta n.


const arr = (n) =>{
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(i)
    }
    return arr
}

console.log(arr(8))