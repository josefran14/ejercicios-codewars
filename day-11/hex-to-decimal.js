//Complete la función que convierte el número hexadecimal (dado como una cadena) en un número decimal.


const hexToDec = (hex) =>{
    let hexadecimal = hex.replace(/^0-9A-Fa-f/gi, "")
    return Number.parseInt(hexadecimal, 16)
}


console.log(hexToDec("a"))

//return  parseInt(hexString, 16);