//Escriba una función que devuelva una cadena en la que el nombre se intercambie con el apellido


const nameShuffler = (str) =>{
    return str.replace(/ /g,",").split(",").reverse().join().replace(/,/g," ")
}


console.log(nameShuffler("Jose Saavedra"))

//return str.split(' ').reverse().join(" ");