//Puede imprimir su nombre en un anuncio publicitario. Descubra cuánto le costará.
 //Cada personaje tiene un precio predeterminado de £ 30, pero eso puede ser diferente 
 //si se le dan 2 parámetros en lugar de 1.

//No puede usar el operador multiplicador "*".

//Si su nombre fuera Jeong-Ho Aristotelis, el anuncio le costaría 600 libras esterlinas. 
//20 letras * 30 = 600 (el espacio cuenta como un carácter).


const word = (name,price = 30) =>{
    return [...new Array(name.length)]
    .fill(price)
    .reduce((previus, current) => previus + current);
}


console.log(word("Zoroaster Donnchadh"))



//return name.split('').reduce((sum, letter) => sum + price, 0); 
//return name.length * price