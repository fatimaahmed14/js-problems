let value = 0
function amountOfDigits (number) {
  value = number.toString().length
  return value
}
amountOfDigits(12345)
console.log(value)