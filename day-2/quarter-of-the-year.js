//Dado un mes como un número entero del 1 al 12, devuelva a qué trimestre del año pertenece como un número entero.

//Por ejemplo: el mes 2 (febrero), forma parte del primer trimestre;
//el mes 6 (junio), forma parte del segundo trimestre; y el mes 11 (noviembre),
//forma parte del cuarto trimestre.


const quarter = (month) =>{
    switch(month){
        case 1:
        case 2:
        case 3:
         return 1;
        case 4:
        case 5:
        case 6:
        return 2;
        case 7:
        case 8:
        case 9:
        return 3
        default:
        return 4

    }
}


console.log(quarter(10))