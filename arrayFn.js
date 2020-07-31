module.exports = {
  filterReduce
}

/**
 * @param  {Array} data - array of object to filter the keys through e.g [ { name: test, profession: test } ]
 * @param  {Array} keys - array of keys to reduce to e.g ['name']
 * @param  {Function} fn - filter function that returns the array to reduce from
 * @returns {Array}
 */
function filterReduce (data = [], keys = [], fn = () => {}) {
  // Filter operation is performed before reduce
  return data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key]
      return acc
    }, {})
  )
}
