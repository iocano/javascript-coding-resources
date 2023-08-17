# Object creation

## Object built-in constructor

```javascript
const person = new Object();
person.firstName = 'John';
person.lastName = 'Doe';
person.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
```

## Object literal

```javascript
const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
```

## Object create

### Key features

- Allows to create a new object with a specified prototype.
- Provides a way to create objects using a specific prototype without the need
  for constructor functions or classes.

```javascript
// Base Object
const person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// create a new object from base object (person)
const john = Object.create(person);
// set properties
john.firstName = 'John';
john.lastName = 'Doe';
```

## Object constructor

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

const john = new Person('John', 'Doe');
```

## Class

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

var john = new Person('John', 'Doe');
```
