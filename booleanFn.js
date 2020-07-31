module.exports = {
  isOdd,
  isEven
}

/**
 * @param {Number} num - any real +ve or -ve number
 */
function isOdd (num) {
  return num % 2 !== 0
}

/**
 * @param {Number} num - any real +ve or -ve number
 */
function isEven (num) {
  return num % 2 === 0
}
