//Su objetivo en este kata es crear el mouth_sizemétodo completo. Este método toma un argumento animal 
//que corresponde al animal encontrado por la rana. 
//Si este es un alligatorretorno (sin distinción entre mayúsculas y minúsculas),
//de small lo contrario, devuelva wide


const mouthSize = (animal) =>{
    return animal.toLowerCase() === "alligator" ? "small" : "wide"
}


console.log(mouthSize("dog"))


// if(animal == "alligator"){
//     return "small"
// }else if(animal == "alligator".toUpperCase() ){
//     return "small"
// }else{
//     return "wide"
// }