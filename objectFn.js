module.exports = {
  filterKeys,
  invertObject
}
/**
 * @param  {Object} obj - plain js object which keys you want to map through
 * @param  {Array} keys - which keys you want to return in resulting object (only high level object keys will work)
 * @returns {Object}
 */
function filterKeys (obj = {}, keys = []) {
  const cloned = { ...obj }
  return keys.reduce((acc, item) => {
    acc[item] = cloned[item]
    return acc
  }, {})
}

/**
 * @param  {Object} obj - plain JS object
 * @returns {Object} Object {}
 */
function invertObject (obj = {}) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[val] = key
    return acc
  }, {})
}
