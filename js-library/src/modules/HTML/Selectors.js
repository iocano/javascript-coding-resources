/** Class with useful HTML selectors. */
export default class Selectors {
  /**
   * Array of focusable elements.
   */
  static #focusableList = [
    'a',
    'button',
    'input',
    'textarea',
    'select',
    'details',
    '[tabindex]:not([tabindex="-1"])',
  ];

  /**
   * Focusable elements selector
   */
  static focusable = Selectors.#focusableList.join(',');
}
