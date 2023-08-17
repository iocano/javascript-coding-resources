
/**
 * Describes Array.reduce() accumulator used by CustomArray.groupBy() method.
 */
export default class ArrayGroupByReduceAccumulator {
  /**
   * Create an GroupByReduceAccumulator instance.
   * @param {string} property The property to group by.
   */
  constructor(property) {
    /**
     * Keep track of stored groups.
     * @type {Object.<string,*>}
     */
    this.groupIndex = {};

    /**
     * Array of groups.
     * @type {Object.<string,*>[]}
     */
    this.groups = [];

    /**
     * Property to group by.
     * @type {string}
     */
    this.property = property;
  }
}
