//cree una función que traduzca una cadena de ADN dada en ARN


const DNAtoRNA = (dna) =>{
    return dna.replace(/t/gi,"U")
}

console.log(DNAtoRNA("TTTT"))