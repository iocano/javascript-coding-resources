/** Class to extend Performance functionality. */
export default class CustomPerformance {
  /**
   * Get task execution time in milliseconds.
   * @param {Function} task Function with code to execute.
   * @return {number}
   */
  static getExecutionTime(task) {
    const start = performance.now();
    task();
    return performance.now() - start;
  }
}
