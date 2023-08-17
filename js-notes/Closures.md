# Closure

## Key features

- Is a function that encloses variables from its surrounding (lexical) scope
- Lexical Scoping: functions are executed in the scope where they are defined,
  not where they are executed.
- Inner Functions: When a function is defined within another function, the inner
  function has access to variables/parameters of the outer (enclosing) function.
- Scope Chain: When a function is executed, it first looks for variables within
  its own scope, if not found, it searches in the next outer scope.

## Example 1: inner function has reference to outer function scope

```javascript
// Define a function 'say' that takes a 'message' parameter
function say(message) {
  // Return an arrow function that takes a 'name' parameter
  return (name) => console.log(message + ' ' + name);
}

// Call 'say' function with 'hello' as parameter, which returns a function,
// immediately call the returned function with 'Jane' as parameter
const sayMessageTo = say('hello')('Jane');
```

## Example 2: var is not block-scoped (let and const are )

```javascript
// creates 3 functions, first log 0, second log 1, third 
function buildFunctions() {
  const functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(() => console.log(i));
  }
  return functions;
}

// call the buildFunctions function
const functions = buildFunctions();

// call each builded function
functions[0](); 
functions[1](); 
functions[2](); 

// loop variable is declared using var, it is not block-scoped and changes for
// each iteration. By the time the arrow functions are executed, the loop has
// finished, and i is left with the value 3 in the execution context. 

// Possibles fixes:

// - Change 'var' by 'let'
// for (var i = 0; i < 3; i++) { ...

// - Create a block-scoped variable
// for (var i = 0; i < 3; i++) {
//    const j = i; ...

// - Create different execution context for each iteration
// for (var i = 0; i < 3; i++) {
//  functions.push(((j) => () => console.log(j))(i));
```
