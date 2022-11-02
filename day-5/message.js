const message = (name, owner) =>{
    return name === owner ? "Hello boss" : "Hello guest"
}


console.log(message("Daniel", "Daniel"))