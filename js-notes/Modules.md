# Modules

## Usage of modules in browser

- Add 'type' attribute with 'module' value to HTML script tag ('entry script')

```html
<script type="module" src="dist/index.js"></script>
```

- Run file from server like node lite-server
- Set module specifier on package.json to 'ES6' or higher (Optional)

## Export modules

```javascript
// Export a constant representing the mathematical constant PI (π).
export const PI = 3.141516;

// Export a function to add two numbers.
export function add() { }

// Export a function to subtract two numbers.
export function subtract() { }

// Export a class representing a person.
export class Person { }

// Export a class representing a user as module default (only one per file)
export default class User { }
```

## Import modules

```javascript
// Import the constant PI from the 'utils.js' module
import { PI } from './utils.js';

// Import the add and subtract functions from the 'utils.js' module
import { add, subtract } from './utils.js';

// Import the Person class from the 'utils.js' module and alias it as Client
import { Person as Client } from './utils.js';

// Import the default User class from the 'utils.js' module
import User from './utils.js';

// Import the User class and the add and subtract functions from the 'utils.js' module
import { User, add, subtract } from './utils.js';

// Import all exports from the 'utils.js' module and alias them as Alias
import * as Alias from './utils.js';

// Call the add function from the Alias object
Alias.add();

// Create a new instance of the default User class using the Alias
const user = new Alias.default();

```

## Export/Import jsdoc typedef types (quirk, don't supported yet)

### Export types (jsdoc typedef)

```javascript
// Export an empty object. This is often used to indicate that the module
// doesn't export anything explicitly, is the key to export jsdoc typedef types
export {};

// Add types
/**
 * @typedef {Object} Person
 * @property {string} firstName - The first name of the person.
 * @property {string} lastName - The last name of the person.
 * @property {number} age - The age of the person.
 * @property {string[]} hobbies - An array of hobbies.
 */
```

### Import types

```javascript
// Import all from module file, and alias it as Types
import * as Types from './Module.js';

// Usage
/** @type {Types.Person} */
const p = {};
```

## Import libraries that are not modules

```javascript
// import in the entry file
import 'Path/to/file.js';

// importing jQuery
import 'jquery.js';

```
