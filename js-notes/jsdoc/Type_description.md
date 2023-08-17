# Description of types

## Typedef

```javascript
/**
 * Represent a 2d coordinate
 * @typedef Coordinate
 * @type {Object}
 * @property {number} x The x coordinate.
 * @property {number} y The y coordinate.
 */

/**
 * Generate string representation of the coordinate.
 * @param {Coordinate} coord The coordinate to stringify
 */
function coordinateToString(coord) {}
```

## Type description with properties

```javascript
/**
 * Generate string representation of the coordinate.
 * @param {object} coord
 * @param {number} coord.x Coordinate x.
 * @param {number} coord.y Coordinate y.
 */
function coordinateToString2(coord) {}
```

## Inline description

```javascript
/**
 * @param {{x: number, y: number}} coord Coordinates 'x' and 'y'.
 */
function coordinateToString(coord) {}
```
