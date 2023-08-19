# bind (Function.prototype.bind)

## Key features

- Creates a "new function" from the target function.
- Bind context 'this' value to the function.
- Allows to bind extra arguments to the function.

## Bind extra parameters

```javascript
// First argument is null since the this context is not relevant
element.addEventListener('click', f.bind(null, 1, 2));

// Note: event is the last parameter
function f(p1, p3, event) {
  event.preventDefault();
  console.log(arguments);
}
```

## Bind context 'this'

```javascript
class SubmitButton {
  /** @param {HTMLElement} button */
  constructor(button) {
    // binding context this.
    const handler = this.#onClick.bind(this);
  
    button.addEventListener('click', handler);
  }

  #sendData() { /* send data logic */ }

  #onClick(e) {
    e.preventDefault();
    this.#sendData();
  }
}
```
