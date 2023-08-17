# Apply (Function.prototype.apply)

## Key features

- Calls a function with a given context this.
- Allows to pass arguments provided as an array.

```javascript

// Define an object with properties 'firstName', 'lastName', and a method 'getFullName'
const person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

// Define a function called 'login' that takes two parameters 'lang1' and 'lang2'
const login = function (lang1, lang2) {
    console.log('Login: ' + this.getFullName());
    console.log('Available langs: ' + lang1 + ', ' + lang2);
};

// Call the 'login' function using the 'apply' method, setting 'person' as the
// context ('this') and providing ['en', 'es'] as arguments to the function
login.apply(person, ['en', 'es']);

```
