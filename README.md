<h1 align="center" style="font-size: 50px; border:none;">lo.js</h1>

### npm
```
npm install lo.js
```

### yarn
```
yarn add lo.js
```

## 💡 API <a name="api"></a>

**filterReduce**```(data, keys, filterFn)```
```javascript
const lo = require('lo.js')

const result = lo.filterReduce(
  [
    { name: 'lo.js', reason: 'to help me around projects' },
    { name: 'lodash', reason: 'big version' }
  ],
  ['name'],
  x => x.name === 'lo.js' 
)

console.log(result) // [ { name: 'lo.js' } ]
```
---

**rangeArray**```(end, start, step)```
```javascript
const lo = require('lo.js')

const result = lo.rangeArray(10, 2, 2)
console.log(result) // [ 2, 4, 6, 8 ]
```
---

**filterKeys**```(obj, keys)```
```javascript
const lo = require('lo.js')

const result = lo.filterKeys(
  { name: 'test', profession: 'Fullstack Engineer', age: 22 },
  ['name']
)

console.log(result) // { name: 'test' }
```
---

**invertObject**```(obj)```
```javascript 
const lo = require('lo.js')

const result = lo.invertObject({ name: 'test', age: 22 })

console.log(result) // { '22': 'age', test: 'name' }
```
---
**capitalize**```(str)```
```javascript 
const lo = require('lo.js')

const result = lo.capitalize('hello world')

console.log(result) // Hello World
```

---
**includesAll**```(arr, values)```
```javascript
const lo = require('lo.js')

const result = lo.includesAll([1, 2, 3], [2, 3])

console.log(result) // true
```

---
**isEven**```(num)```
```javascript
const lo = require('lo.js')

const result = lo.isEven(3)

console.log(result) // false
```
---
**isOdd**```(num)```
```javascript
const lo = require('lo.js')

const result = lo.isOdd(3)

console.log(result) // true
```
---
**isArray**```(arr)```
```javascript
const lo = require('lo.js')

const result = lo.isArray([])

console.log(result) // true
```
