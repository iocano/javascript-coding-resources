# Requirejs

## Usage for single page app

### Project structure

```bash
project-root/
├── js/
│   ├── app.js
│   ├── lib/
│   │   ├── jquery.js
│   │   ├── lodash.js
│   │   └── backbone.js
│   └── utils/
│       └── math.js
├── index.html
├── main.js
└── config.js
```

### Configure requirejs on config.js

```javascript
require.config({
  // Set the base URL for module resolution
  baseUrl: "js",
  // Map module names to their relative paths
  paths: {
    jquery: "lib/jquery",
    lodash: "lib/lodash",
    backbone: "lib/backbone",
    math: "utils/math.js",
  },
  // Configure dependencies and exports for non-AMD scripts
  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone",
    },
  },
});
```

### Include requirejs library with data-main attribute set to the main entry point in index.html

```html
<body>
  ...
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"
    integrity="sha512-c3Nl8+7g4LMSTdrm621y7kf9v3SDPnhxLNhcjFJbKECVnmZHTdo+IRO05sNLTH/D3vA6u1X32ehoLC7WFVdheg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
    data-main="main.js"
  ></script>
  <!-- data-main: specify the entry point module for the application -->
</body>
```

### Create modules, e.g. /lib/app.js

- By default the name of the module is the same that the file.
- The name can be changed using the following signature define('moduleName', [deps...], () => {})
- The second define parameter is used to set module dependencies.

```javascript
// Declare the module functions
const initialize = () => console.log("App init");
// ...

// Define the module
define([/* dependencies */], () => {

  // expose the functions
  initialize: initialize,
  // ...
});

// To change the module name 
// define(ModuleName, [deps...], function(){ ... })
```

### Load modules in the main entry point this case main.js

```javascript
// Load the RequireJS configuration from "config.js"
require(["config"], function () {
  // Load the 'app' module
  requirejs(["app"], (app) => app.initialize());
});
```
