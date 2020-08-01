const arrayFn = require('./arrayFn')
const objectFn = require('./objectFn')
const booleanFn = require('./booleanFn')
const stringFn = require('./stringFn')
const dateTimeFn = require('./dateTimeFn')

module.exports = {
  ...arrayFn,
  ...objectFn,
  ...booleanFn,
  ...stringFn,
  ...dateTimeFn
}
