// Considere una matriz/lista de ovejas donde algunas ovejas pueden faltar en su lugar.
//  Necesitamos una función que cuente el número de ovejas presentes en la matriz 
//  (verdadero significa presente).


const sheep = (array) =>{
   return array.filter((item) => item === true).length
}


console.log(sheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))