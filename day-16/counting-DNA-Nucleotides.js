// Para un código genético de ADN dado representado por una cadena, cuente el número de veces
//  que las letras A (adenina), C (citosina), G (guanina) y T (timina) aparecen y regresan y objetan.

// La cadena de entrada puede contener caracteres en mayúsculas y minúsculas.

// Por ejemplo:


// var genCode = 'aCCggT';

// getCountedNucleotides(genCode); // return {A: 1, C: 2, G: 2, T: 1}
// Además, si un tipo de nucleótido no está presente dentro de la cadena, aún debe estar presente en el 
// objeto devuelto con su valor 0. Por ejemplo:



const counted = (code) =>{
    let resultado = {}
     let array = ["A","C","G","T"]
     array.forEach((ele) => resultado[ele] = 0)
    let arr = code.toUpperCase().split("").forEach(el => (resultado[el] = resultado[el] + 1 || 1))
    return resultado
       
    
}


console.log(counted('aCCgg'))