//Cree una función que devuelva una matriz de enteros de n a 1 donde n>0.


const reverse = (n) =>{
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    return arr.reverse()
}


console.log(reverse(5))


// let arr = [];
//   for (let i=n; i>0; i--) {
//     arr.push(i);
//     } return arr;