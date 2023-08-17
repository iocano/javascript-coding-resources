# Custom event

```javascript
// Create a new CustomEvent named 'myCustomEvent' with a detail object
const customEvent = new CustomEvent('myCustomEvent', {
  detail: {
    message: 'Hello from custom event!',
  },
});

// Get the reference to the 'submit' element
const submit = document.getElementById('submit');

// Add a 'click' event listener to the 'submit' element
submit.addEventListener('click', () => {
  // Dispatch the custom event on the 'submit' element
  submit.dispatchEvent(customEvent);
});

// Add a 'myCustomEvent' event listener to the 'submit' element
submit.addEventListener('myCustomEvent', (event) => {
  // When the 'myCustomEvent' is fired, log the message from the detail object
  console.log(event.detail.message);
});
```
