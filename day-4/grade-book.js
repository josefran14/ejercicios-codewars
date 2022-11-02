//Complete la función para que encuentre el promedio de los tres puntajes
//que se le pasaron y devuelva el valor de la letra asociada con esa calificación.
//pendiente

const calification = (s1,s2,s3) =>{
    let sum = s1 + s2 + s3 
    let result = sum / 3
    if(result >= 90){
        return "A"
    }else if(Math.ceil(result) < 90 && Math.ceil(result) === 80){
        return "B"
    }else if(Math.ceil(result) < 80 && Math.ceil(result) === 70){
        return "C"
    }else if(Math.ceil(result) < 70 && Math.ceil(result) === 60){
        return "D"
    }else if(result < 60){
        return "F"
    }
}

console.log(calification(70,70,100))