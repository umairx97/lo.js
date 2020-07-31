const tape = require('tape')
const { filterReduce } = require('../arrayFn')

tape('Fn:(filterReduce)', function (suite) {
  tape('ideal parameters should return expected data', function (t) {
    const expectedOutput = [{ name: 'test', age: 0 }]

    const testData = [
      { id: 'test1', name: 'test', age: 0 },
      { id: 'test2', name: 'test12', age: 1 }
    ]

    const filterFn = (item) => item.name === 'test'

    t.deepEqual(filterReduce(testData, ['name', 'age'], filterFn), expectedOutput, 'filtered array should have name and age keys')
    t.end()
  })

  tape('data and keys as empty arrays', function (t) {
    const expectedOutput = []
    const testData = []

    const filterFn = (item) => item.name === 'test'

    t.deepEqual(filterReduce(testData, testData, filterFn), expectedOutput, 'should return empty array')
    t.end()
  })

  suite.end()
})
