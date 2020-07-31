const tape = require('tape')
const { isOdd, isEven } = require('../booleanFn')

tape('Fn:(isOdd)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const expectedOutputs = [true, false, true, false, true]
    const testNumbers = [1, 2, 3, 500, 201]

    testNumbers.forEach((num, idx) => t.equal(isOdd(num), expectedOutputs[idx], 'should be equal to expected result'))
    t.end()
  })
  suite.end()
})

tape('Fn:(isEven)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const expectedOutputs = [false, true, false, true, false]
    const testNumbers = [1, 2, 3, 500, 201]

    testNumbers.forEach((num, idx) => t.equal(isEven(num), expectedOutputs[idx], 'should be equal to expected result'))
    t.end()
  })
  suite.end()
})
