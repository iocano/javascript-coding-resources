# Destructuring matchall named groups

```javascript
// Declare a string containing the text "Hello, Joe!"
const text = 'Hello, Joe!';

// Define a regular expression pattern with named capture groups
const regex = /(?<greeting>\w+), (?<user>\w+)/;

// Use the match method to find matches in the text using the regex pattern
const match = text.match(regex);

// Check if a match is found
if (match) {
  // Destructure the matched groups using ES2018 syntax
  const {
    groups: { greeting, user },
  } = match;

  // Output the captured values
  console.log(greeting); // Output: Hello
  console.log(user); // Output: Joe
}
```
