//Escriba una función que verifique si una cadena dada 
//(insensible a mayúsculas y minúsculas) es un palíndromo .

const isPalindrome = (x) =>{
    let word = x.split("").reverse().join("")
    if(word.toUpperCase === x.toUpperCase){
        return true
    }else{
        return false
    }
}


console.log(isPalindrome("Abba"))


//return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false