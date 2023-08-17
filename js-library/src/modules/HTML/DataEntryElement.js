import CustomHTMLElement from './CustomHTMLElement.js';

/**
 * Class with utility functions to handle single data entry element like input,
 * textarea and select.
 */
export default class DataEntryElement extends CustomHTMLElement {
  /**
   * Retrieves element values.
   * @param {HTMLElement} element Element on which get values.
   * @return {string[]}
   */
  static getValues(element) {
    if (element instanceof HTMLSelectElement) {
      return DataEntryElement.#getSelectedOptions(element);
    }

    if (DataEntryElement.isCheckable(element)) {
      return element.checked ? [element.value] : [];
    }

    return [element.value];
  }

  /**
   * Get options selected from select element.
   * @param {HTMLSelectElement} element Html Select element.
   * @return {string[]}
   */
  static #getSelectedOptions(element) {
    if (!(element instanceof HTMLSelectElement)) {
      throw new Error('Element is not an instance of HTMLSelectElement.');
    }

    const values = [];
    for (const option of element.options) {
      if (option.selected) {
        values.push(option.value);
      }
    }
    return values;
  }

  /**
   * Reset element value.
   * @param {HTMLElement} element Element to reset.
   * @return {void}
   */
  static reset(element) {
    if (element instanceof HTMLSelectElement) {
      return DataEntryElement.#resetSelect(element);
    }

    if (DataEntryElement.isCheckable(element)) {
      return DataEntryElement.#resetCheckable(element);
    }

    return DataEntryElement.#resetText(element);
  }

  /**
   * Set default selection in select control.
   * @param {HTMLSelectElement} element Element to reset.
   */
  static #resetSelect(element) {
    for (const option of element.options) {
      option.selected = option.defaultSelected;
    }
  }

  /**
   * Set default check status in checkable element.
   * @param {HTMLInputElement} element Element to reset.
   */
  static #resetCheckable(element) {
    element.checked = element.defaultChecked;
  }

  /**
   * Set default value in input or textarea.
   * @param {HTMLInputElement|HTMLTextAreaElement} element Element to reset.
   */
  static #resetText(element) {
    element.value = element.defaultValue;
  }

  /**
   * Check if element is radio-button or checkbox input.
   * @param {HTMLElement} element Element to check.
   * @return {boolean}
   */
  static isCheckable(element) {
    return element.type === 'checkbox' || element.type === 'radio';
  }
}
