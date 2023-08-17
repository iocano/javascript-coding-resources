# Function borrowing

## Key features

- Allows us to use the methods of one object on a different object without
  having to make a copy of that method and maintain it in two separate places.

```javascript
// Define an object 'person1' with properties and a method
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// Define another object 'person2' with properties
const person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
};

// Call the 'getFullName' method of 'person1' with 'person2' as the context
console.log(person1.getFullName.apply(person2));
```
