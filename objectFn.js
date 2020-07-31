module.exports = {
  filterKeys
}

function filterKeys (obj = {}, keys = []) {
  const cloned = { ...obj }
  return keys.reduce((acc, item) => {
    acc[item] = cloned[item]
    return acc
  }, {})
}
