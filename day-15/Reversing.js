// Invierta todas las demás palabras en una cadena dada, luego devuelva la cadena.
//  Deseche cualquier espacio en blanco inicial o final, mientras se asegura de que haya exactamente 
//  un espacio entre cada palabra. Los signos de puntuación deben tratarse como si fueran parte de la 
//  palabra en este kata.
//pendiente


const reverse = (str) =>{
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}


console.log(reverse("I really don't like reversing strings!"))