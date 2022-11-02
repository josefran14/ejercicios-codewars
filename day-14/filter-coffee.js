//El primer argumento de su función de búsqueda será un número que represente su presupuesto.

// El segundo argumento será una serie de precios del grano de café.

// Su función de 'búsqueda' debería devolverle las tiendas que venden café dentro de su presupuesto.

// La función de búsqueda debe devolver una cadena de precios de los granos de café que puede pagar.
// Los precios en esta cadena deben ordenarse en orden ascendente.


const search = (budget, prices) =>{
   return prices.filter((item) => item <= budget).sort((a,b) => a - b).join()
}



console.log(search(14, [7, 3, 23, 9, 14, 20, 7]))