
/**
 * Custom error class for when a HTMLElement is empty (has not children).
 */
export default class AnimationAlreadyRunningError extends Error {
  /**
   * Create an AnimationAlreadyRunningError instance.
   * @param {string} message Error message.
   */
  constructor(message) {
    super(message);
    this.name = 'AnimationAlreadyRunningError';
  }
}
