# WeakMap

## Key features

- Provides a way to create a collection of key-value pairs.
- Only allows objects as keys (no primitive value allowed as key).
- Holds weak references to keys, meaning that keys can be garbage collected if
  there are no other strong references to them outside the WeakMap.
- Does not provide methods for directly iterating over key-value pairs.
- Suitable for scenarios where you need to associate auxiliary data with an object
  and want the data to be automatically removed when the object is no longer reachable.

```javascript
// Create a new WeakMap instance to store user information
const userMap = new WeakMap();

// Define a function to retrieve user information
function getUserInfo(user) {
  // Check if user information is already stored in the WeakMap
  if (!userMap.has(user)) {
    console.log('Fetching user info...');

    // Simulate fetching user information
    const userInfo = { name: user.name, age: user.age };

    // Store user information in the WeakMap
    userMap.set(user, userInfo);
  }

  // Return the user information associated with the user object
  return userMap.get(user);
}

// Create user objects
const user1 = { name: 'Alice', age: 30 };
const user2 = { name: 'Bob', age: 25 };

// Retrieve and display user information using the getUserInfo function
console.log(getUserInfo(user1)); // Output: Fetching user info... { name: 'Alice', age: 30 }
console.log(getUserInfo(user1)); // Output: { name: 'Alice', age: 30 }
console.log(getUserInfo(user2)); // Output: Fetching user info... { name: 'Bob', age: 25 }
```
