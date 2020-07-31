const arrayFn = require('./arrayFn')
const objectFn = require('./objectFn')
const booleanFn = require('./booleanFn')

module.exports = {
  ...arrayFn,
  ...objectFn,
  ...booleanFn
}
