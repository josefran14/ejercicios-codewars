// Completa la función howManydays. Acepta 1 parámetro month, que significa el mes del año. 
// Diferentes meses tienen un número diferente de días como se muestra en la siguiente tabla.
// Devuelve el número de días que están en month. No hay necesidad de validación de entrada:
// el mes siempre será mayor que 0 y menor o igual que 12.


const HowManyDays = (month) =>{

    switch (month) {
  case 2:
    return 28;
  case 4:
  case 6:
  case 9:
  case 11:
    return 30;
  default:
    return 31;
}
}


console.log(HowManyDays(11));



