# IIFE (Immediately invoked function expression)

## Key features

- Allows to define and call a function immediately after its creation.
- Creates its own scope, which helps to keep variables out of the global scope.
- Variables declared inside an IIFE are not accessible from the outside.
- Helps to avoid polluting the global namespace with unnecessary variables and functions.
- Often used to implement the Module Pattern, which allows you to create reusable
  and modular code by exposing only necessary functionalities.

## Example 1

```javascript
// Define an anonymous function that takes a parameter 'name'
(function (name) {
  console.log('Hello ' + name);
})('Jane'); // Immediately invoke the function with the argument 'Jane'
```

## Example 2

```javascript
// Store the IIFe return value
var greets = (function (name) {
  return 'Hello ' + name;
})('John');

// logs the result of function call
console.log('greets: ' + greets); // Output: greets John
```
