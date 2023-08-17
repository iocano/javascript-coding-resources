/**
 * Custom error class for when modal window is already open.
 */
export default class ModalWindowAlreadyOpenError extends Error {
  /**
   * Create a ModalWindowAlreadyOpenError instance.
   * @param {string} message Error message.
   */
  constructor(message) {
    super(message);
    this.name = 'ModalWindowAlreadyOpenError';
  }
}
