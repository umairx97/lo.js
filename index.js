const arrayFn = require('./arrayFn')
const objectFn = require('./objectFn')
const booleanFn = require('./booleanFn')
const stringFn = require('./stringFn')

module.exports = {
  ...arrayFn,
  ...objectFn,
  ...booleanFn,
  ...stringFn
}
