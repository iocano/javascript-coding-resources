/**
 * Class with HTML utilities.
 */
export default class Utils {
  /**
   * Convert rems to pixels.
   * @param {number} rems Number rems to convert.
   * @return  {number}
   */
  static remsToPixels(rems) {
    const rootFontSize = getComputedStyle(document.documentElement).fontSize;
    return rems * parseFloat(rootFontSize);
  }

  /**
   * Checks if current event key is printable.
   * @param {KeyboardEvent} event Keyboard event to check.
   * @return {boolean}
   */
  static isEventKeyPrintable(event) {
    return event.key.length === 1;
  }

  /**
   * Checks if property is supported by browser.
   * @param {string} property Property to check.
   * @return {boolean}
   */
  static isCssPropertySupported(property) {
    return property in document.documentElement.style;
  }

  /**
   * Calculate required width for 'text'.
   * @param {string} text Text to calculate width.
   * @return {number}
   */
  static getWidthForText(text) {
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.append(text);
    document.body.append(span);

    const width = span.offsetWidth;
    span.remove();
    return width;
  }

  /**
   * Block scrollbar movement on window.
   */
  static blockScrollbar() {
    // Get the current page scroll position in the vertical direction
    const scrollTop = window.scrollTop;
    // Get the current page scroll position in the horizontal direction
    const scrollLeft = window.scrollLeft;
    // set this to the previous value
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
  }

  /**
   * Unblock scrollbar movement on window.
   */
  static unBlockScrollbar() {
    window.onscroll = () => {};
  }

  /**
   * Checks if horizontal scroll bar is visible.
   * @return {boolean}
   */
  static isHorizontalScrollBarVisible() {
    return document.documentElement.scrollWidth > window.innerWidth;
  }

  /**
   * Checks if vertical scroll bar is visible.
   * @return {boolean}
   */
  static isVerticalScrollBarVisible() {
    return document.documentElement.scrollHeight > window.innerHeight;
  }
}
