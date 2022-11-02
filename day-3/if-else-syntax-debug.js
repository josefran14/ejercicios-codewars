//checkAlive debería devolver verdadero si la salud del
// jugador es mayor que 0 o falso si es 0 o menor CheckAlive.check_alive


const checkAlive = (health) =>{
    if(health > 0){
      return true
    }else{
      return false
    }
  }

  console.log(checkAlive(-1))