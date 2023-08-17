# Extend html element

```javascript
class CustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('CustomElement constructor');
  }

  /** Called when a custom element is inserted into the DOM */
  connectedCallback() {
    console.log('CustomElement connected');
  }

  customMethod() {}
}

customElements.define('custom-element', CustomElement);

/** @type {CustomElement} */
const customElement = document.createElement('custom-element');
document.body.append(customElement);

// calling a method
customElement.customMethod();
```
