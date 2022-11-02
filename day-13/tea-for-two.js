// Dada una cadena o un número, escriba una función tea42 que tome como entrada una cadena o un número y devuelva una cadena en la que cada carácter o dígito '2'
// haya sido reemplazado por una t.


const tea = (input) =>{
    if(input === Number(input)){
        return input.toString().replace(/2/g,"t")
    }else{
        return input.replace(/2/g,"t")
    }
}

//return input.toString().replace (/2/g, 't')


console.log(tea(102))