module.exports = {
  isOdd,
  isEven,
  includesAll,
  isArray
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

/**
 * @param {Array} arr - JS Array
 */
function isArray (arr) {
  return Array.isArray(arr)
}

/**
 * @param {Array} arr - array to check from if all values exist
 * @param {Array} values - array of values to check
 */
function includesAll (arr = [], values = []) {
  return values.every(val => arr.includes(val))
}
