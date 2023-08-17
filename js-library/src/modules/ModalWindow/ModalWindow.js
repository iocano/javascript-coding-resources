import CustomHTMLElement from '../HTML/CustomHTMLElement.js';
import ElementNotFoundError from '../HTML/Errors/ElementNotFoundError.js';
import ElementEmptyError from '../HTML/Errors/ElementEmptyError.js';
import AnimationAlreadyRunningError from '../HTML/Errors/AnimationAlreadyRunningError.js';
import HTMLSelectors from '../HTML/Selectors.js';

import ModalAlreadyOpenError from './Errors/ModalWindowAlreadyOpenError.js';
import ModalAlreadyClosedError from './Errors/ModalWindowAlreadyClosedError.js';
import Str from './Strings.js';

/**
 * Keep track of open modal windows.
 * @type {number}
 */
let openModalCount = 0;

/** 
 * Class to create and manipulate a modal window.
 */
export default class ModalWindow {
  /**
   * Modal parent.
   * @type {CustomHTMLElement}
   */
  #parent;

  /**
   * Modal window main container.
   * @type {CustomHTMLElement}
   */
  #modal;

  /**
   * Indicates whether modal is currently open.
   * @type {boolean}
   */
  #isOpen;

  /**
   * Indicates whether any animation is running.
   * @type {boolean}
   */
  #isAnimationRunning;

  /**
   * Hold the previous active element before modal opens.
   * @type {HTMLElement}
   */
  #previousActiveElement;

  /**
   * Creates a Modal instance.
   * @param {string} [modalId] The ID of an existing HTML element to use as the
   * modal window. If not provided the modal is created dynamically.
   */
  constructor(modalId = '') {
    this.#parent = new CustomHTMLElement(document.body);

    if (modalId) {
      this.#modal = CustomHTMLElement.getById(modalId);
      if (!this.#modal) {
        throw new ElementNotFoundError(Str.MSG.ELEMENT_NOT_FOUND);
      }
    } else {
      this.#modal = CustomHTMLElement.create('div');
      this.#parent.append(this.#modal.base);
    }

    this.#modal.setAttributes({ className: Str.CLASS.MODAL_WINDOW });
  }

  /**
   * Retrieve whether the modal is currently open.
   */
  get isOpen() {
    return this.#isOpen || this.#isAnimationRunning;
  }

  /**
   * Opens the modal window.
   * @async
   * @return {Promise<void>}
   * opening.
   * @throws {ElementEmptyError} Throws an ElementEmptyError if the modal has
   * no content.
   * @throws {ModalAlreadyOpenError} Throws a ModalAlreadyOpenError if the modal
   * is already open.
   * @throws {AnimationAlreadyRunningError} Throws an AnimationAlreadyRunningError if any
   * modal animation is already running.
   */
  open() {
    return new Promise((resolve, reject) => {
      if (!this.#modal.hasContent()) {
        return reject(new ElementEmptyError(Str.MSG.NO_CONTENT));
      }
      if (this.#isOpen) {
        return reject(new ModalAlreadyOpenError(Str.MSG.ALREADY_OPEN));
      }
      if (this.#isAnimationRunning) {
        return reject(new AnimationAlreadyRunningError(Str.MSG.ANIMATION_RUNNING));
      }

      this.#previousActiveElement = document.activeElement;
      this.#isOpen = true;
      openModalCount++;
      this.#isAnimationRunning = true;

      this.#parent.hideScrollbar();
      this.#limitTabKeyNavigation();

      const event = Str.EVENT.ANIMATION_END;
      const handler = () => this.#onOpenAnimationEnd(resolve);
      const options = { once: true };
      this.#modal.addEventListener(event, handler, options);

      this.#modal.swapClass(Str.CLASS.FADE_OUT, Str.CLASS.FADE_IN);
    });
  }

  /**
   * Closes the modal window.
   * @async
   * @return {Promise<void>}
   * @throws {ModalAlreadyClosedError} Throws a ModalAlreadyClosedError if
   * the modal is already closed.
   * @throws {AnimationAlreadyRunningError} Throws an AnimationAlreadyRunningError if any
   * modal animation is already running.
   */
  close() {
    return new Promise((resolve, reject) => {
      if (!this.#isOpen) {
        const msg = Str.MSG.MODAL_ALREADY_CLOSED;
        return reject(new ModalAlreadyClosedError(msg));
      }
      if (this.#isAnimationRunning) {
        const msg = Str.MSG.ANIMATION_RUNNING;
        return reject(new AnimationAlreadyRunningError(msg));
      }
      this.#isAnimationRunning = true;

      const event = Str.EVENT.ANIMATION_END;
      const handler = () => this.#onCloseAnimationEnd(resolve);
      const options = { once: true };
      this.#modal.addEventListener(event, handler, options);

      this.#modal.swapClass(Str.CLASS.FADE_IN, Str.CLASS.FADE_OUT);
    });
  }

  /**
   * Sets the content of the modal.
   * @param {HTMLElement|CustomHTMLElement} content The modal content.
   * @return {this}
   */
  setContent(content) {
    this.#modal.setContent(content.base || content);
    return this;
  }

  /*
   * Limit tab key navigation to modal window elements.
   */
  #limitTabKeyNavigation() {
    this.#parent.addEventListener(Str.EVENT.KEYDOWN, this.#onTabKeyDown);
  }

  /**
   * Reset default tab key navigation.
   */
  #resetTabKeyNavigation() {
    this.#parent.removeEventListener(Str.EVENT.KEYDOWN, this.#onTabKeyDown);
  }

  /**
   * Handles the 'keydown' event when the modal is open to control tab
   * navigation behavior.
   * @param {KeyboardEvent} event Keydown event object.
   */
  #onTabKeyDown = (event) => {
    const modal = this.#modal.base;
    const nodeList = modal.querySelectorAll(HTMLSelectors.focusable);
    const children = Array.from(nodeList);

    const isTabKey = event.key === 'Tab';

    if (isTabKey) {
      event.preventDefault();
      const index = children.indexOf(event.target);

      const isShiftKey = event.shiftKey;
      const length = children.length;
      const nextIndex = (isShiftKey ? index - 1 + length : index + 1) % length;
      children[nextIndex].focus();
    }
  };

  /**
   * Call to execute when open modal animation ends.
   * @param {function} resolve Promise resolve callback.
   */
  #onOpenAnimationEnd(resolve) {
    this.#isAnimationRunning = false;
    resolve();
  }

  /**
   * Call to execute when close modal animation ends.
   * @param {function} resolve Promise resolve callback.
   */
  #onCloseAnimationEnd(resolve) {
    if (--openModalCount < 1) {
      this.#parent.unHideScrollbar();
    }
    this.#resetTabKeyNavigation();
    this.#isOpen = false;
    this.#isAnimationRunning = false;
    this.#previousActiveElement.focus();
    resolve();
  }
}
