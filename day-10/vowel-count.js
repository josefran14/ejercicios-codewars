//Devuelve el número (recuento) de vocales en la cadena dada.

const vowel = (str) => {
    return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length:0
  
}

console.log(vowel("abracadabra"))

//return str.replace(/[^aeiou]/gi, '').length;

