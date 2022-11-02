// Escribir una funcion que reciba como parametro un array con 4 elementos debera
//devolver un array de objeto con propiedades clave-valor
//estas son las propiedades que deben ir en el objeto nombre, apellido, correo, ciudad



const arrayObject = (arr) =>{
    let propiedades = ["Nombre", "Apellido", "Correo", "Ciudad"]
    let obj = {}
    propiedades.map((item,index) =>{
      obj [propiedades[index]] = arr[index]
    })
   return obj
}



console.log(arrayObject(["Jose", "Saavedra", "jose@spartandevs.com", "Maracaibo"]))


// let propiedades = ["Nombre", "Apellido", "Correo", "Ciudad"]
// let obj = Object.assign({},arr)
// return Object.keys(obj).map((item) => propiedades.forEach((ele) => ele = item))