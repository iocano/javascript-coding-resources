# Map

## Key features

- Allows you to create a collection of key-value pairs
- Map allows keys of any data type, including objects and primitives
- The order in which key-value pairs were inserted is preserved
- No cast of keys, are not auto-converted to strings (retain original type)
- Provides methods to iterate over keys, values, or entries using iterators or loops
- The size property provides the count of key-value pairs in the map
- Provides set(), get(), has(), delete(), and clear() for managing data
- Holds strong references to keys, if a key is held in the map, it won't be
  garbage collected even if no other references to the key exist outside the map
- Map prevent keys from being garbage collected, leading to memory leaks
- Suitable when you need to associate data with keys and you want the keys to
  remain in memory as long as they are in the map.

```javascript
// Create a new Map instance
const personMap = new Map();

// Add key-value pairs
personMap.set('name', 'Alice');
personMap.set('age', 30);
personMap.set({ id: 1 }, 'User ID 1');

// Retrieve values using keys
console.log(personMap.get('name')); // Output: Alice
console.log(personMap.get('age')); // Output: 30

// Check if a key exists
console.log(personMap.has('age')); // Output: true
console.log(personMap.has('gender')); // Output: false

// Delete a key-value pair
personMap.delete('age');

// Iterate over key-value pairs
for (const [key, value] of personMap) {
  console.log(`${key}: ${value}`);
}

// Get the size of the map
console.log(personMap.size); // Output: 2
```
