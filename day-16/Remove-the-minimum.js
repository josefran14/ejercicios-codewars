// Dada una matriz de enteros, elimine el valor más pequeño. No cambie la matriz/lista original . Si hay varios elementos con el mismo valor, elimine el que tenga un índice más bajo. Si obtiene una matriz/lista vacía, devuelva una matriz/lista vacía.

// No cambies el orden de los elementos que quedan.

//pendiente
const remove = (array) =>{
    let min = Math.min(...array)
    return array.filter((item) => item != min)
}


console.log(remove([2, 2, 1, 2, 1]))