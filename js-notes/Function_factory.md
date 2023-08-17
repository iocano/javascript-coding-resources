# Factory function

## key features

- Is any function which is not a constructor that returns a 'new' object.

```javascript
// Factory function to create vehicles
function createVehicle(type, brand) {
  return {
    type,
    brand,
    start() {
      console.log(`${brand} ${type} is starting.`);
    },
    stop() {
      console.log(`${brand} ${type} has stopped.`);
    },
  };
}

// Create different types of vehicles using the factory function
const car = createVehicle('car', 'Toyota');
const motorcycle = createVehicle('motorcycle', 'Harley-Davidson');
const truck = createVehicle('truck', 'Ford');

```
