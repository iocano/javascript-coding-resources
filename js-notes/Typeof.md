# Typeof

## Key features

- Allows to determine the primitive data type of a given value or expression.

```javascript
const a = 10;
console.log(a, typeof a); // Output: 10 number

const b = 'John Doe';
console.log(b, typeof b); // Output: John Doe string

const c = {};
console.log(c, typeof {}); // Output: {} object

const d = [];
console.log(d, typeof d); // Output: [] object

// get a detailed type of 'd' (array)
const dMsg = 'Object.prototype.toString.call( [] ): ';
const dType = Object.prototype.toString.call(d);
console.log(dMsg, dType); // Output: [object Array]

console.log('typeof undefined', typeof undefined); // Output: undefined

console.log('typeof null', typeof null); // Output: object

function foo1() {}
console.log(foo1, typeof foo1); // Output: [Function: function1] function
```
