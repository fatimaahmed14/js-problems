function amicableNumbers(upToNumber) {
    sumOfDivisors = {} // empty object for sums storage
    for (let i = 1; i <= upToNumber; i++) { // going up to number
        for (let j = 1; j < i; j++) { // create all numbers from 1 to current number to divide the current number with
            if (i % j === 0) { // if it is divisible
                sumOfDivisors[i] = (sumOfDivisors[i] || 0 ) + j // sum it to the object with the current i as key. If the current i doesn't exist yet, use zero (otherwise it would be undefined + j = undefined forever)
            }
        }
    }
    const amicablePairs = [] // empty list for output

    for (let i = 1; i <= Object.keys(sumOfDivisors).length; i++) {  // loop through the object's elements
        if (i === sumOfDivisors[sumOfDivisors[i]] && i !== sumOfDivisors[i]) { // if the key, that has a value of the other key, and it's not because it's the same number to start with... 0.0
            amicablePairs.push([i, sumOfDivisors[i]]) // then add it to our list for output
        }
    }
    return amicablePairs // the only problem is that now this creates two items, there and back
}

console.log(amicableNumbers(10000))