function randomNumberGenerator (num1 , num2){
    let total = 0
    total = Math.floor(Math.random () * (num2 - num1 + 1)) + num1
    return total 
}

console.log(randomNumberGenerator(3,10))