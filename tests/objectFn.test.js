const tape = require('tape')
const { filterKeys } = require('../objectFn')

tape('Fn:(filterKeys)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const expectedOutput = { name: 'test' }
    const testData = { id: 'test1', name: 'test', age: 0 }

    t.deepEqual(filterKeys(testData, ['name']), expectedOutput, 'should return a object with only name key')
    t.end()
  })

  suite.end()
})
