# Extend class

```javascript
class Player { /* ... */ }

class AdminPlayer extends Player {
  #privileges = [];

  constructor(name, lastName, privileges) {
    // super call is required on not default constructor
    super(name, lastName);
    this.privileges = privileges;
  }
}

// Create instance
const admin1 = new AdminPlayer('Admin', '1', ['block', 'unblock']);
```
