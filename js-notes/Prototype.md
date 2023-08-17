# Prototype

## Key features

- Is an object that serves as a template or blueprint for other objects.
- Each object in JavaScript has an associated prototype.
- Objects can inherit properties and methods from their prototype.
- Prototype is used on constructor functions or classes to define shared
  properties and methods for instances.
- \_\_proto\_\_ is used on object instances to directly manipulate the prototype.
  is not recommended for production code.

## Example 1

```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log('Hello, my name is ' + this.name);
};

const person1 = new Person('Alice');
person1.sayHello(); // Output: Hello, my name is Alice
```

## Example 2

```javascript
const person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const john = { firstName: 'John' };

john.__proto__ = person;
console.log('john object: ' + john.getFullName()); // Log John Doe
```
