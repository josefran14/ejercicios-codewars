//Defina una función que elimine los duplicados de una matriz de números y los devuelva como resultado.

//El orden de la secuencia tiene que permanecer igual.


const removeDuplicate = (a) =>{
    return [... new Set(a)];
}


console.log(removeDuplicate([1,1,1,2,2,3,4,5,5,7,8]))