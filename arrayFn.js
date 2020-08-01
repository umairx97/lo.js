module.exports = {
  filterReduce,
  rangeArray
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

/**
 * @param {Number} end - the range element where the array should end
 * @param {Number} start - the starting element of range
 * @param {Number} step - division steps for each element
 * @returns {Array} - rangeArray(2) // [0, 1, 2]
 */
function rangeArray (end, start = 0, step = 1) {
  return Array.from({ length: Math.ceil(end - start + 1) / step }, (val, idx) => idx * step + start)
}
