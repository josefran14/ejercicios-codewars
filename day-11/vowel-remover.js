//Cree una función llamada shortcutpara eliminar las vocales minúsculas 
//( a, e, i, o, u) en una cadena determinada


const remove = (str) =>{
    return str.replace(/[aeiou]/g,"")
}


console.log(remove("gOOdbye"))