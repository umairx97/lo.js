module.exports = {
  filterKeys
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
