module.exports = {
  capitalize
}

/**
 * @param {String} str
 */
function capitalize (str = '') {
  return str.replace(/\b[a-z]/g, char => char.toUpperCase())
}
