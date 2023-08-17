# Callback function

## Key features

- Is a function passed into another function as an argument, which is then
  invoked inside the outer function to complete some kind of routine or action.

```javascript
// Define a function that takes a callback function and a time in seconds
function executeAfter(callback, seconds) {
// Convert seconds to milliseconds
const milliseconds = seconds \* 1000;

// Use 'setTimeout' to execute the provided callback after the specified time
setTimeout(callback, milliseconds);
}

// Define a function 'greets' that logs a message
function greets() {
console.log('Greets');
}

// Calls the executeAfter function
executeAfter(greets, 5);
```
