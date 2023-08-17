/** Class to extend Date functionality. */
export default class CustomDate {
  /**
   * Check if string is a valid date.
   * @param {string} str Date to check.
   * @return {boolean} True if 'str' is a valid date, false otherwise.
   */
  static isValidDate(str) {
    return !isNaN(new Date(str));
  }

  /**
   * Get date component with "yyyy-MM-dd" format.
   * @param {Date} date Date in which extract date component.
   * @param {string} separator Separator for years, months, and days.
   * @return {string} A string with the date component.
   */
  static getDateComponent(date, separator = '-') {
    const year = String(date.getFullYear()).padStart(4, 0);
    // Note: Default js Date month is non-zero based.
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const day = String(date.getDate()).padStart(2, 0);
    return `${year}${separator}${month}${separator}${day}`;
  }

  /**
   * Get time component with "HH:mm:ss" format.
   * @param {Date} date Date in which extract time component.
   * @return {string} A string with the time component.
   */
  static getTimeComponent(date) {
    const hour = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    return `${hour}:${minutes}:${seconds}`;
  }
}
