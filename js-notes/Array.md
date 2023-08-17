# Array

## Definition and access

```javascript
// Define an array with various data types
const mixedArray = [
  100,
  true,
  { name: 'John', lastName: 'Doe' },
  () => console.log('Hello World'),
  'Mixed array',
];

// Log the first element of the array (100)
console.log(mixedArray[0]);

// Log the 'lastName' property of the object at index 2 ('Doe')
console.log(mixedArray[2].lastName);

// Call the function at index 3, which logs 'Hello World'
mixedArray[3]();

// Log the length of the array (5)
console.log(mixedArray.length);

// Remove and return the last element of the array ('Mixed array')
console.log(mixedArray.pop());
```

## Iteration

```javascript
// Define an array and add a property to its prototype
const array1 = ['a', 'b', 'c'];

// add a property to its prototype
Array.prototype.name = 'array1';

// Using for-in loop, iterate over array including prototype properties
// also log 'array1' (*No recommended)
for (const prop in array1) {
  console.log(prop + ': ' + array1[prop]);
}

// Using for loop, iterate over array indices and values
for (let i = 0; i < array1.length; i++) {
  console.log(i + ': ' + array1[i]);
}

// Using forEach method from array prototype
array.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});
```
