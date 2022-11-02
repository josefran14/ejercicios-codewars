//realizar una funcion que reciba un array de strings y debe retornar un objeto
//enumerando las propiedades del 0 a la n donde su valor sea la longitud de cada string

const objStr = (array) =>{
    let obj = {}
    for(const [index,item] of array.entries()){
         obj [index] = item.length
     }
   return obj
}


console.log(objStr(["Miami", "California"]))

//return array.reduce((acc,cur,i) => ({...acc,[i]: array[i].length }), {})
