import Accumulator from './Models/ArrayGroupByReduceAccumulator.js';

/** Class to extend array functionality. */
export default class CustomArray {
  /**
   * Built-in base array.
   * @type {Array}
   */
  #base;

  /**
   * Create a CustomArray instance that wrap a built-in array.
   * @param {Array} arr Built-in array to wrap.
   */
  constructor(...arr) {
    this.#base = arr;
  }

  /**
   * Retrieves wrapped built-in array.
   * @return {Array}
   */
  get base() {
    return this.#base;
  }

  /**
   * Group elements by property value. Return an array with groups, one array
   * per group.
   * @param {string} property Property in which group elements.
   * @return {Array<Object.<string,*>[]>}
   * @example
   * const arr = [{val: 1, ...}, {val: 1, ...}, {val: 2, ...}];
   * CustomArray.groupBy(arr, 'val') =>
   * [[{val: 1, ...}, {val: 1, ...}], [{val: 2, ...}]]
   */
  groupBy(property) {
    return CustomArray.groupBy(this.#base, property);
  }

  /**
   * Group elements by property value. Return an array with groups, one array
   * per group.
   * @param {Object.<string,*>[]} arr Array in which search groups.
   * @param {string} property Property to group array elements.
   * @return {Array<Object.<string,*>[]>}
   * @example
   * const arr = [{val: 1, ...}, {val: 1, ...}, {val: 2, ...}];
   * CustomArray.groupBy(arr, 'val') =>
   * [[{val: 1, ...}, {val: 1, ...}], [{val: 2, ...}]]
   */
  static groupBy(arr, property) {
    const initialValue = new Accumulator(property);
    const result = arr.reduce(this.#groupByReduceCallback, initialValue);
    return result.groups;
  }

  /**
   * Callback for groupBy method reduce function.
   * @param {GroupByReduceAccumulator} accumulator Reduce accumulator.
   * @param {Object.<string,*>} item Current array element.
   * @return {ArrayGroupByReduceAccumulator}
   * object.
   */
  static #groupByReduceCallback(accumulator, item) {
    // Get group name from property value.
    const group = item[accumulator.property];
    // Get 'group' index (if exists).
    const index = accumulator.groupIndex[group];
    // Check if index exist.
    if (index !== undefined) {
      // Add item to groups array.
      accumulator.groups[index].push(item);
    } else {
      // Otherwise create a new group.
      accumulator.groups.push([item]);
      // Get new index.
      const newIndex = accumulator.groups.length - 1;
      // Add a property with the group's name and set to the new index.
      accumulator.groupIndex[group] = newIndex;
    }
    return accumulator;
  }
}
