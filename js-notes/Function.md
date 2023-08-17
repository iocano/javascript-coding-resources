# Function

```javascript
// function declaration (own its 'this' context)
function function1() {}

// function expression (anonymous function) (own its 'this' context)
const function2 = function () {};

// arrow function expression (inherit 'this' from the surrounding code)
const function3 = () => {};

// function declaration with parameters
function logParameters(firstName, lastName) {
  // log first argument
  console.log('firstName:', firstName, 'lastName:', lastName);
  // accessing with arguments object (deprecated)
  console.log('firstName:', arguments[0], 'lastName:', arguments[1]);
}

// function with default parameter value opt 1
function defaultParamValOpt1(name = 'unknown') {}

// function with default parameter value opt 1
function defaultParamValOpt2(name) {
  name = name || 'unknown';
}
```
