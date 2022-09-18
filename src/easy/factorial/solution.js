
// function factorialOf (number) {
//  run a for loop
// total = number*i
// return total
// }
// factorialOf(5)

function factorialOf(number) {
    for (let i = number - 1; i >= 1; i--) {
 number *= i
    }
    return number
}
factorialOf(5)


// function factorialOf(num) {
//     for (let i = num - 1; i >= 1; i--)
// still need to work out 1 is minused for this to work  and its started at 1???
//  {
//       num *= i;
//     }
//     return num;
//   }
//   factorialOf(5)