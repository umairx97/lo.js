const tape = require('tape')
const { isBeforeDate, isAfterDate } = require('../dateTimeFn')

tape('Fn:(isBeforeDate)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const testBeforeDate = new Date(1997, 8, 2)
    const testAfterDate = new Date(1997, 8, 3)
    const expectedOutput = true

    t.deepEqual(isBeforeDate(testBeforeDate, testAfterDate), expectedOutput)
    t.end()
  })

  suite.end()
})

tape('Fn:(isAfterDate)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const testBeforeDate = new Date(1997, 8, 2)
    const testAfterDate = new Date(1997, 8, 3)
    const expectedOutput = false

    t.deepEqual(isAfterDate(testBeforeDate, testAfterDate), expectedOutput)
    t.end()
  })

  suite.end()
})
