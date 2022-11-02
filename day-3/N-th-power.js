const enesimo = (array,n) =>{
    return array.filter((item,index) => index / n === (n-1))
}

console.log(enesimo([1, 2, 3, 4],2))