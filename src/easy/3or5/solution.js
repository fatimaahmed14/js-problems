// let total to 0 beacsue we will cahnge the value later
let total = 0
// open up a loop that run i = 0 to i <1000
for ( let i = 0; i < 1000; i ++) {
if (i % 3 === 0 || i % 5 ===0) {
    total += i
}
// specifiy with an if statement that we want to % i by 3 and 5 with a remainder of 0
}
console.log(total)
// total needs to += with these muliples 
// console log the total to check