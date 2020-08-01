const tape = require('tape')
const { capitalize } = require('../stringFn')

tape('Fn:(capitalize)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const testString = 'this is a test'
    const expectedOutput = 'This Is A Test'

    t.equal(capitalize(testString), expectedOutput)
    t.end()
  })
  suite.end()
})
