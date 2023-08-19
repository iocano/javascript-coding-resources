# Glossary

## Syntax parser

- Read code and check if the grammar is correct.

## Javascript engine execution process

1. Creates a global execution environment (stored as GlobalEnv property)

2. Instantiates a call stack (LIFO) used to store and keep track of running
   functions. When a function is run, it is pushed on top of the global call
   stack, once the function terminates, it is popped off.
3. Set aside global memory, where it store variables globally accessible across
   the script (hoisting).
4. Push first function (main/global) call to the GLOBAL CALL STACK.
5. Generate a LEXICAL ENVIRONMENT.
6. Pop function of the call stack when ends.
7. Repeat 4-6 while call to functions exists.
8. Pop main/global thread when script is completed.

## Lexical (execution) environment

Is the context in which variables/functions are declared/accessed/executed.
Parts:

- Outer environment: surrounds and encloses the current lexical environment.
- environment: are variables defined within the function scope.

## Hoisting

JS engine move variables and function declaration to the top of the containing
scope during the the compilation phase

### Variable hoisting

Variable declarations are hoisted to the top of their containing scope.
Their assignments remain in the same place in the code.
A variable can be access before it's declares, but its value is undefined

### Function hoisting

Are hoisted to the top of their containing scope including name and body.
This means you can call the function before it's declared in the code.

### Function expression hoisting

Are hoisted as variables, their assignments remain in the same place in the
code, can be access before it's declares, but its value is undefined.

## Execution context

Is the environment in which the JS code is executed

## First class function

Functions are treated just like any other value.

### Key features

- Functions can be assigned to variables.
- Used as function argument.
- Returnable as Values:
- Storable in Data Structures:

## IIFE

Immediately Invoked Function Expression

```javascript
(function(){...}());
```

## Closure

is the combination of a function bundled together (enclosed) with references to
its surrounding state (the lexical environment).

## Factory function

Is a function which is not a class/constructor that returns a new object.

## Callback function

Is a function passed into another function as an argument, which is then 
invoked inside the outer function to complete some kind of routine or action.

## Function borrowing

Allows us to use the methods of one object on a different object
without having to make a copy of that method and maintain it in two separate places.

## Currying

Is a transformation of functions that translates a function from callable as f(a, b, c)
into callable as f(a)(b)(c).

## Polyfill

Is a piece of code used to provide modern functionality on older browsers
that do not natively support it.

## Transpile

Convert syntax of one programming language to another
