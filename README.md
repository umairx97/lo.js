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
