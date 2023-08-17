# js-library notes

## Modules description (central entry point: src/index.js)

- ConfirmBox: A simple confirm box (an example is included).
- NumericRange: Class to represent a range of numbers.
- Modules to add functionality to built-in js classes:
  - CustomArray
  - CustomDate
  - CustomNumber
  - CustomObject
  - CustomPerformance
  - CustomString
- SingleReadStorage: Class to create a single read variable
- CoreUtils: A collection of utility functions.
- ObjectCloner: Class that enables iterative deep copy of objects
  - IterativeObjectCloner
  - RecursiveObjectCloner
- ObjectPath: Class to set/get object properties values by string path.
- FadeIn: Class to add fade-in animation to HTMLElement.
- FadeOut: Class to add fade-out animation to HTMLElement.
- AnimationAlreadyRunningError: Error for when an animation is already running.
- ElementEmptyError: Error for when an HTMLElement is empty.
- ElementNotFound: Error for when an HTMLElement is not found.
- WidthRangeStyle: Class to represent a style object for a width range.
- CustomHTMLElement: Class to add functionality to HTMLElement.
- CustomHTMLForm: Class to handle HTMLElements with inner data entry elements.
- DataEntryElement: Class to handle data entry elements (input, textarea, etc).
- HTMLSelectors: Class with groups of css selectors.
- HTMLUtils: Class with HTML utility functions.
- ModalWindow: Class to create a modal window (an example is included).
- JQueryUtils: Register 'plugins' on '$' object (View importing example).

### Importing modules

```javascript
// main.js

// Importing and using JQuery plugin
import { JQueryUtils } from "./src/index.js";
import { $ } from './external/jquery/jquery.module.js';
$('#remember-me').check(); // JQueryUtils plugin

// Importing the rest of the modules.
import { CustomArray, ModalWindow, ... } from "./js-library/src/index.js";
const numbers = new CustomArray(1, 2);
// ...

```

## External modules description

- JQuery: jQuery library v4.0.0-pre (normal and minified version) compiled as module

### Importing Jquery

```javascript
import { $, jQuery } from "external/jquery/jquery.module.js";
```
