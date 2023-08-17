import ElementNotFoundError from './Errors/ElementNotFoundError.js';
import IterativeCloner from './../core/ObjectCloner/IterativeCloner.js';
// eslint-disable-next-line no-unused-vars
import WidthRangeStyle from './Models/WidthRangeStyle.js';

/**
 * Class to extend HTMLElement functionality.
 */
export default class CustomHTMLElement {
  /**
   * Built-in base HTMLElement.
   * @type {HTMLElement}
   */
  #base;

  /**
   * Creates a CustomHTMLElement instance that wraps a built-in HTMLElement.
   * @param {HTMLElement} element Element to wrap.
   * @param {object} attributes Element attributes.
   */
  constructor(element, attributes = {}) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Argument 'element' must be instance of HTMLElement");
    }

    this.#base = element;
    this.setAttributes(attributes);
  }

  /**
   * Retrieves wrapped built-in HTMLElement.
   * @return {HTMLElement}
   */
  get base() {
    return this.#base;
  }

  /**
   * Checks if the given element is the same as the base HTMLElement.
   * @param {HTMLElement|CustomHTMLElement} element Element to check.
   * @return {boolean}
   */
  isSame(element) {
    return (element.base || element) === this.#base;
  }

  /**
   * Focus current element
   * @return {this}
   */
  focus() {
    this.#base.focus();
    return this;
  }

  /**
   * Retrieve the first child element that matches selector.
   * @param {string} selector Element selector.
   * @return {CustomHTMLElement}
   */
  querySelector(selector) {
    const element = this.#base.querySelector(selector);
    try {
      return new CustomHTMLElement(element);
    } catch (e) {
      return null;
    }
  }

  /**
   * Retrieve all children elements that matches selector.
   * @param {string} selectors Elements selector.
   * @return {CustomHTMLElement[]}
   */
  querySelectorAll(selectors) {
    const elements = this.#base.querySelectorAll(selectors);
    const all = [];
    for (const element of elements) {
      all.push(new CustomHTMLElement(element));
    }
    return all;
  }

  /**
   * Append an element.
   * @param {CustomHTMLElement|HTMLElement} child Child element to append.
   * @return {this}
   */
  append(child) {
    this.#base.append(child.base || child);
    return this;
  }

  /**
   * Create a new HTMLElement and append.
   * @param {string} name HTMLElement name.
   * @param {object} attributes Element attributes.
   * @return {this}
   */
  appendNewElement(name, attributes = {}) {
    return this.append(CustomHTMLElement.create(name, attributes));
  }

  /**
   * Append this element to parent.
   * @param {CustomHTMLElement|HTMLElement} parent The parent element in which
   * to add this element.
   * @return {this}
   */
  appendTo(parent) {
    // if node is CustomHTMLElement element use its append method.
    // if node is HTMLElement use built-in append method.
    parent.append(this.#base);
    return this;
  }

  /**
   * Remove this element from parent.
   * @param {CustomHTMLElement|HTMLElement} parent Parent in which remove this
   * element.
   * @return {this}
   */
  removeFrom(parent) {
    (parent.base || parent).removeChild(this.#base);
    return this;
  }

  /**
   * Remove all children of this element.
   * @return {this}
   */
  removeChildren() {
    while (this.#base.children.length) {
      this.#base.removeChild(this.#base.lastChild);
    }
    return this;
  }

  /**
   * Set element's attributes.
   * @param {object} attributes Element's attributes.
   * @return {this}
   */
  setAttributes(attributes) {
    CustomHTMLElement.setAttributes(this.#base, attributes);
    return this;
  }

  /**
   * Set element style.
   * @param {object} style The style object.
   * @return {this}
   */
  setStyle(style) {
    CustomHTMLElement.setStyle(this.#base, style);
    return this;
  }

  /**
   * Set element style property value.
   * @param {string} property Property name.
   * @param {*} value Value to set.
   * @return {this} Current CustomHTMLElement instance.
   */
  setStyleProperty(property, value) {
    this.#base.style[property] = value;
    return this;
  }

  /**
   * Reset element's style.
   * @return {this}
   */
  resetStyle() {
    // this.setAttributes({style: {}});
    this.#base.style.cssText = '';
    return this;
  }

  /**
   * Set style according to width.
   * @param {WidthRangeStyle[]} styles The styles array.
   * @return {this}
   */
  setResponsiveStyle(styles) {
    this.#applyStyleForWinSize(styles);
    window.addEventListener('resize', () => {
      this.#applyStyleForWinSize(styles);
    });
    return this;
  }

  /**
   * Apply style for current window width.
   * @param {WidthRangeStyle[]} styles Object style.
   */
  #applyStyleForWinSize(styles) {
    const currentWidth = window.innerWidth;
    styles.forEach((style) => {
      const minWidth = style.widthRange.min;
      const maxWidth = style.widthRange.max;
      if (currentWidth >= minWidth && maxWidth > currentWidth) {
        this.setStyle(style.style);
      }
    });
  }

  /**
   * Set element's width.
   * @param {string} width Value and unit.
   * @return {this} Current CustomHTMLElement instance.
   */
  setWidth(width) {
    this.#base.style.width = width;
    return this;
  }

  /**
   * Set element content (replace all content).
   * @param {HTMLElement|CustomHTMLElement|string} element Content to set.
   * @return {this} Current CustomHTMLElement instance.
   */
  setContent(element = '') {
    this.#base.replaceChildren(element.base || element);
    return this;
  }

  /**
   * Add a listener to event.
   * @param {string} event Event type (click, keydown, etc).
   * @param {EventListener|EventListenerObject} listener Callback for events.
   * @param {boolean|AddEventListenerOptions} options Event listener options.
   * @return {this} Current CustomHTMLElement instance.
   */
  addEventListener(event, listener, options) {
    this.#base.addEventListener(event, listener, options);
    return this;
  }

  /**
   * Remove listener from event.
   * @param {string} event Event type (click, keydown, etc).
   * @param {EventListener|EventListenerObject} listener Callback to remove.
   * @return {this} Current CustomHTMLElement instance.
   */
  removeEventListener(event, listener) {
    this.#base.removeEventListener(event, listener);
    return this;
  }

  /**
   * Block scrollbar movement on window.
   * @return {this}
   */
  blockScrollbar() {
    CustomHTMLElement.blockScrollbar();
    return this;
  }

  /**
   * Unblock scrollbar movement on window.
   * @return {this}
   */
  unblockScrollbar() {
    CustomHTMLElement.unBlockScrollbar();
    return this;
  }

  /**
   * Hide the scrollbar but keep its space.
   * @return {this}
   */
  hideScrollbar() {
    CustomHTMLElement.hideScrollbar(this.#base);
    return this;
  }

  /**
   * Unhide the scrollbar.
   * @return {this}
   */
  unHideScrollbar() {
    CustomHTMLElement.unHideScrollbar(this.#base);
    return this;
  }

  /**
   * Add a class to element.
   * @param {string} name Class name to add.
   * @return {this}
   */
  addClass(name) {
    this.#base.classList.add(name);
    return this;
  }

  /**
   * Remove a class from element.
   * @param {string} name Class name to remove.
   * @return {this}
   */
  removeClass(name) {
    this.#base.classList.remove(name);
    return this;
  }

  /**
   * Swap target class for another one.
   * @param {string} target Class to remove
   * @param {string} replace Class to add.
   * @return {this} Current CustomHTMLElement instance.
   */
  swapClass(target, replace) {
    CustomHTMLElement.swapClass(this.#base, target, replace);
    return this;
  }

  /**
   * Check if element has class.
   * @param {string} className Class name to check.
   * @return {boolean}
   */
  hasClass(className) {
    return CustomHTMLElement.hasClass(this.#base, className);
  }

  /**
   * Check if element has content.
   * @return {boolean};
   */
  hasContent() {
    return CustomHTMLElement.hasContent(this.#base);
  }

  /**
   * Create a CustomHTMLElement instance that wrap a built-in HTMLElement
   * designed by name.
   * @param {string} name HTMLElement name.
   * @param {object} attributes Element attributes.
   * @return {CustomHTMLElement}
   */
  static create(name, attributes = {}) {
    if (!(typeof name === 'string')) {
      throw new Error("Parameter 'name' must be of the type string.");
    }
    return new CustomHTMLElement(document.createElement(name), attributes);
  }

  /**
   * Create a CustomHTMLElement instance that wrap a built-in div HTMLElement.
   * @param {object} attributes Element attributes.
   * @return {CustomHTMLElement}
   */
  static div(attributes = {}) {
    return new CustomHTMLElement(document.createElement('div'), attributes);
  }

  /**
   * Create a CustomHTMLElement instance that wrap a built-in input HTMLElement.
   * @param {object} attributes Element attributes.
   * @return {CustomHTMLElement}
   */
  static input(attributes = {}) {
    return new CustomHTMLElement(document.createElement('input')).setAttributes(
      attributes
    );
  }

  /**
   * Create a CustomHTMLElement instance that wrap a built-in button
   * HTMLElement.
   * @param {object} text The button text.
   * @param {object} attributes Element attributes.
   * @return {CustomHTMLElement}
   */
  static button(text = '', attributes = {}) {
    return CustomHTMLElement.create('button')
      .append(text)
      .setAttributes(attributes);
  }

  /**
   * Retrieves the first HTMLElement with the specified id wrapped by
   * CustomHTMLElement object.
   * @param {string} id Element's id.
   * @return {CustomHTMLElement}
   * @throws {HTMLElementNotFoundError} Throws an error if element is not found.
   */
  static getById(id) {
    const element = document.getElementById(id);
    if (!element) {
      const msg = `Element with id '${id}' is not found.`;
      throw new ElementNotFoundError(msg);
    }

    return new CustomHTMLElement(element);
  }

  /**
   * Retrieves the elements with the specified class name in the parent element.
   * @param {string} name The class name.
   * @param {HTMLElement} [parent] The element on which
   * search elements with the specified class name.
   * @return {CustomHTMLElement[]}
   */
  static getByClassName(name, parent = document) {
    const elements = parent.getElementsByClassName(name);
    const customElements = [];
    for (const element of elements) {
      customElements.push(new CustomHTMLElement(element));
    }
    return customElements;
  }

  /**
   * Set element's attributes (deep copy).
   * @param {HTMLElement} element Element in which set attributes.
   * @param {object} attributes Attributes object.
   */
  static setAttributes(element, attributes) {
    IterativeCloner.assign(element, attributes);
  }

  /**
   * Set element style.
   * @param {HTMLElement} element Element on which set style.
   * @param {object} style Style object.
   */
  static setStyle(element, style) {
    for (const [property, value] of Object.entries(style)) {
      element.style[property] = value;
    }
  }

  /**
   * Swap target class for another one.
   * @param {HTMLElement} element Element where the class name will be replaced.
   * @param {string} target Class to remove
   * @param {string} replace Class to add.
   */
  static swapClass(element, target, replace) {
    element.classList.remove(target);
    element.classList.add(replace);
  }

  /**
   * Check if element has class.
   * @param {HTMLElement} element Element on which check if has class.
   * @param {string} className Class name to check.
   * @return {boolean}
   */
  static hasClass(element, className) {
    return element.classList.contains(className);
  }

  /**
   * Hide the scrollbar but keep its space.
   * @param {HTMLElement} element Element on which scrollbar will be hidden.
   */
  static hideScrollbar(element) {
    const contentWidth = element.scrollWidth;
    element.style.width = contentWidth + 'px';

    const contentHeight = element.scrollHeight;
    element.style.height = contentHeight + 'px';

    element.style.overflow = 'hidden';
  }

  /**
   * Unhide the scrollbar.
   * @param {HTMLElement} element Element on which scrollbar will be unhidden.
   */
  static unHideScrollbar(element) {
    element.style.overflow = '';
  }

  /**
   * Check if element has content.
   * @param {HTMLElement} element Element to check.
   * @return {boolean}
   */
  static hasContent(element) {
    return element.innerHTML.trim().length > 0;
  }
}
