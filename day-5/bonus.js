const bonusTime =(salary, bonus) =>{
    let change = String(salary)
    if(bonus === true){
      return change * 10 .toString()
    }else{
      return salary
    }
}


console.log(bonusTime(10000, true))
