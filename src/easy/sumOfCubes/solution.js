function cubesOfNumbers(array) {
    let sumOfCubes = 0
    array.forEach(number => sumOfCubes += number ** 3)
    return sumOfCubes
} 

console.log(cubesOfNumbers([3, 4, 5]))