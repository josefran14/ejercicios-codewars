//Cree una función que tome un número entero como argumento y regrese "Even"para números pares
//o "Odd"para números impares.


const evenOrOdd = (number) =>{
    if((number % 2) === 0){
        return "Even"
    }else{
        return "Odd"
    }
}


console.log(evenOrOdd(9))

//return number % 2 ? "Odd" : "Even"