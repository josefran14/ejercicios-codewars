//Dada una matriz de enteros, devuelva una nueva matriz con cada valor duplicado.


const duplicate = (x) =>{
    return x.map((item) => item * 2)
}


console.log(duplicate([4, 1, 1, 1, 4]))