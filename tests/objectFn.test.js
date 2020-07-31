const tape = require('tape')
const { filterKeys, invertObject } = require('../objectFn')

tape('Fn:(filterKeys)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const expectedOutput = { name: 'test' }
    const testData = { id: 'test1', name: 'test', age: 0 }

    t.deepEqual(filterKeys(testData, ['name']), expectedOutput, 'should return a object with only name key')
    t.end()
  })

  suite.end()
})

tape('Fn:(invertObject)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const expectedOutput = { test: 'name' }
    const testData = { name: 'test' }

    t.deepEqual(invertObject(testData), expectedOutput, 'should return a object with inverted kv pair')
    t.end()
  })

  suite.end()
})
