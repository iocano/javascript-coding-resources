# Central module entry point

## Key features

- Central export: remove the need of import each module from their respective
  subdirectory, gather all module exports in one place.

- Simplified API: create a simplified and more cohesive API for users,
  they can import multiple module classes using a single import statement.

- Encapsulation: library users don't need to know the directory structure.
  They can simply import modules from a centralized location.

- Scalability: As the library grows and more modules are added, exports can be
  added to central point without changing the user-facing API

- Maintainability: If a refactorization is need or the library structure changes,
  it can be done without affecting the import paths of users.

## Project structure

```javascript
my-library/
├── src/
│ ├── modules/
│ │ ├── Module1.js
│ │ ├── Module2.js
│ │ └── ...
│ ├── index.js     <-- Library cental entry point
├── dist/
├── test/
├── docs/
├── examples/
├── external/
│ ├── jquery.js
│ ├── other-lib.js
├── package.json
├── README.md
```

## Example of central entry point file

```javascript
// my-library/src/modules/index.js
export { default as Module1 } from './modules/Module1.js';
export { default as Module2 } from './modules/Module2.js';
export { default as Module3 } from './modules/Module3.js';
// ...
```
