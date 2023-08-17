# Function currying

## Key features

- Is a technique in functional programming where a function that takes multiple
  args is transformed into a series of functions, each taking one argument.
- Is a transformation of functions that translates a function from callable
  as f(a, b, c) into callable as f(a)(b)(c).

## Example 1

```javascript
// Original function that takes three arguments
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the 'add' function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Usage of the curried function
const curriedResult = curriedAdd(1)(2)(3); // Equivalent to add(1, 2, 3)

console.log(curriedResult); // Output: 6
```

## Example 2

```javascript
// Currying function
function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}

// Curried addition function
const add5 = curryAdd(5);

// Using the curried function
const result = add5(3);

console.log(result); // Output: 8
```
