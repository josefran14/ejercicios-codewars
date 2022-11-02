// Su tarea es escribir una función que tome una cadena y devuelva una nueva cadena 
// con todas las vocales eliminadas.

// Por ejemplo, la cadena "This website is for losers LOL! se convertiría en
// "Ths wbst s fr lsrs LL!".

// Nota: para este kata yno se considera una vocal.



const disemVowel = (str) =>{
    return str.replace(/[aeiou]/gi,"")
}


console.log(disemVowel("This website is for losers LOL!"))