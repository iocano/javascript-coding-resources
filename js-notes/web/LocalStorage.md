# Local storage

## Key features

- LocalStorage has a limit of around 5-10 MB depending on the browser.
- Data stored in localStorage is stored as strings.
- Data is shared between all scripts running on the same domain.

## Store data

```javascript
// store a primitive
localStorage.setItem('username', 'John Doe');

// store an array
const nameList = ['N1', 'N2'];
localStorage.setItem('names', JSON.stringify(nameList));
```

## Retrieve data

```javascript
// retrieve a primitive
const username = localStorage.getItem('username');

// retrieve an array
const nameListJSON = localStorage.getItem('names');
const nameList = nameListJSON ? JSON.parse(nameListJSON) : [];
```

## Remove data from client

```javascript
localStorage.removeItem('username');
```

## Clearing all data

```javascript
localStorage.clear();
```
