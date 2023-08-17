/* eslint-disable require-jsdoc */
// eslint-disable-next-line no-unused-vars
import ModalWindow from '../ModalWindow/ModalWindow.js';
import CustomElement from './../HTML/CustomHTMLElement.js';
import ElementEmptyError from '../HTML/Errors/ElementEmptyError.js';
import Str from './Strings.js';

export default class ConfirmBox {
  /**
   * Modal window instance.
   * @type {ModalWindow}
   */
  #modal;

  /**
   * Message div.
   * @type {CustomElement}
   */
  #msgDiv;

  /**
   * Buttons for confirm box.
   * @type {{accept: CustomElement, cancel: CustomElement}}
   */
  #btn = {
    accept: null,
    cancel: null,
  };

  /**
   * Create a ConfirmBox instance.
   * @param {IModalWindow} modal Modal window;
   * @param {string} [msg] Message to display.
   */
  constructor(modal, msg = '') {
    this.#modal = modal;
    this.#createStructure(msg);
  }

  /**
   * Open the confirm box with the given message and waits for the user to make
   * a choice. Resolves to true if the user clicks 'Accept' and resolves to
   * false if user clicks 'Cancel'.
   * @param {string} msg The question to be displayed in the modal.
   * @return {Promise<boolean>}
   * @throws {Error}
   */
  async open(msg) {
    if (!msg) {
      throw new ElementEmptyError(Str.TEXT.NO_MESSAGE);
    }
    this.#setMessage(msg);

    if (!this.#modal.isOpen) {
      await this.#modal.open();
    }

    try {
      return await this.#waitForAnswer();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Wait for the user to make a choice, resolve to true if user click 'Accept'
   * button and resolve to false if user clicks 'Cancel' button.
   * @return {Promise<boolean>}
   */
  #waitForAnswer() {
    return new Promise((resolve, reject) => {
      const accept = this.#btn.accept;
      const cancel = this.#btn.cancel;
      const options = { once: true };

      accept.addEventListener('click', () => resolve(true), options);
      cancel.addEventListener('click', () => resolve(false), options);
    });
  }

  /**
   * Close the confirm box.
   * @return {Promise<void>}
   */
  async close() {
    return new Promise(async (resolve, reject) => {
      try {
        await this.#modal.close();
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Set confirm box message.
   * @param {string} msg The message to set.
   * @return {this}
   */
  #setMessage(msg) {
    this.#msgDiv.setContent(msg);
    return this;
  }

  /**
   * Create confirm box structure.
   * @param {string} msg Confirm box message.
   */
  #createStructure(msg = '') {
    const container = CustomElement.div().addClass(Str.CLASS.CONTAINER);

    const confirmBox = CustomElement.div()
      .addClass(Str.CLASS.CONFIRM_BOX)
      .appendTo(container);

    this.#msgDiv = CustomElement.div()
      .addClass(Str.CLASS.CONFIRM_BOX_MSG)
      .setContent(msg)
      .appendTo(confirmBox);

    const btnDiv = CustomElement.div()
      .addClass(Str.CLASS.BUTTONS_DIV)
      .appendTo(confirmBox);

    this.#btn.accept = CustomElement.button(Str.TEXT.ACCEPT).appendTo(btnDiv);
    this.#btn.cancel = CustomElement.button(Str.TEXT.CANCEL).appendTo(btnDiv);
    this.#modal.setContent(container);
  }
}
