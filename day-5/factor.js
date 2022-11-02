//Esta función debe probar si el factor es un factor de base.

//Devuelve truesi es un factor o falsesi no lo es.

//Puedes encontrar un factor dividiendo números. Si el resto es 0, entonces el número es un factor.


const numbers = (base,factor) =>{
    if((base % factor) === 0){
        return true
    }else{
        return false
    }
}


console.log(numbers(10,2))


// return base % factor === 0;