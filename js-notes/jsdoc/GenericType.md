# Generic type

```javascript
/** @template T The type of array elements */
export default class CustomArray {
  /** @type {T[]} */
  #base = [];

  /** @param  {...number} elements */
  constructor(...elements) {}

  /** @param {T} value */
  addElement(value) {}
}

// Usage
/** @type {CustomArray<number>} */
const array = new CustomArray();

// the type of argument is of type 'T' (number)
array.addElement(1);
```
