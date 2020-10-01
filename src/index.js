module.exports = function reverse (n) {
  let reversedNum = parseFloat(n.toString().split('').reverse().join(''))
  return reversedNum
}
