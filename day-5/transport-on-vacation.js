const rentalCarCost = (cost) =>{
    if(cost === 1){
        return 40
    }else if(cost === 2){
        return cost * 40 
    }else if(cost === 3){
        return cost * 40 - 20
    }else if(cost === 4){
        return cost * 40 - 20
    }else if(cost === 5){
        return cost * 40 - 20
    }else if(cost === 6){
        return cost * 40 - 20
    }else if(cost >= 7){
        return cost * 40 - 50
    }
}


console.log(rentalCarCost(5))