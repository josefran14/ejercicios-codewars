//En este Kata estamos pasando un número (n) a una función.

//Tu código determinará si el número pasado es par (o no).

//La función debe devolver un verdadero o falso.

//Los números pueden ser positivos o negativos, enteros o flotantes.

//Flotadores con parte decimal distinta de cero se consideran DESiguales para este kata.


const testEven = (num) =>{
    if((num % 2) === 0){
        return true
    }else{
        return false
    }
}

console.log(testEven(-42))