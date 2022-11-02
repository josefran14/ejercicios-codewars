//Escribe una función para convertir un nombre en iniciales.
//Este kata toma estrictamente dos palabras con un espacio entre ellas.

//La salida debe ser dos letras mayúsculas con un punto separándolas.

const abrevName = (name) =>{
  return name
    .match(/\b(\w)/g)
    .toString()
    .toUpperCase()
    .replace(",", ".")
}
console.log(abrevName("Jose Saavedra"))

//return name.replace(/[a-z]/g,"").replace(/ /,".")