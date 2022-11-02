//cree una función con dos argumentos que devolverá una matriz de los primeros nmúltiplos de x.

//Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

//Devuelve los resultados como una matriz o lista



const countBy = (x,n) =>{
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}


console.log(countBy(2,5))