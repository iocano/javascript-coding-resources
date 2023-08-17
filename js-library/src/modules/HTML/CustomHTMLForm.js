import DataEntryElement from './DataEntryElement.js';
import ObjectPath from './../core/ObjectPath/ObjectPath.js';
/**
 * Class with utility functions to handle HTMLElements that contains data entry
 * elements (input, textarea, etc).
 */
export default class CustomHTMLForm {
  /**
   * Create a model with the data entry elements, uses name attribute of each
   * element for name model properties.

   * **Generates nested properties if dot-notation names are used**, e.g.,
   * - 'person.address.street'
   * - 'person.languages[]'
   * - 'options[1]'
   * @param {HTMLElement[]} elements Data entry elements.
   * @param {object} model Target model to set values.
   * @return {object} A model with the data entry elements values.
   */
  static createModel(elements, model = {}) {
    for (const element of elements) {
      const values = DataEntryElement.getValues(element);
      CustomHTMLForm.#setPropertyModelValues(model, element.name, values);
    }
    return model;
  }

  /**
   * Set each data entry element values in model.
   * @param {object} model Target model.
   * @param {*} property Property name, allows dot-notation string.
   * @param {*} values Values to set.
   */
  static #setPropertyModelValues(model, property, values) {
    for (const value of values) {
      ObjectPath.setValue(model, property, value);
    }
  }

  /**
   * Retrieves all form data entry elements.
   * @param {HTMLElement} form Container from which to get the elements
   * Default: document.body.
   * @return {NodeListOf<Element>} Element list.
   */
  static getDataEntryElements(form = document.body) {
    const selector = 'select,textarea,input';
    const not = ':not([type="button"], [type="reset"])';
    return form.querySelectorAll(selector + not);
  }

  /**
   * Reset data entry elements value.
   * @param {NodeListOf<Element>} elements List of elements to reset.
   */
  static resetElements(elements) {
    for (const element of elements) {
      DataEntryElement.reset(element);
    }
  }

  /**
   * Reset data entry elements value contained in form.
   * @param {HTMLElement} form Container from which to get the elements
   * Default: document.body.
   */
  static resetForm(form = document.body) {
    const elements = CustomHTMLForm.getDataEntryElements(form);
    CustomHTMLForm.resetElements(elements);
  }
}
