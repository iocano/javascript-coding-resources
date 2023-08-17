/** Class to avoid magic strings. */
export default class Strings {
  // Element classes.
  static CLASS = {
    MODAL_WINDOW: 'modal-main-container',
    FADE_IN: 'fade-in',
    FADE_OUT: 'fade-out',
  };

  // JS event names.
  static EVENT = {
    ANIMATION_END: 'animationend',
    KEYDOWN: 'keydown',
  };

  // Text messages.
  static MSG = {
    ELEMENT_NOT_FOUND: 'Element not found',
    MODAL_ALREADY_OPEN: 'Modal window is already open.',
    MODAL_ALREADY_CLOSED: 'Modal window is not open.',
    NO_CONTENT: 'Modal window content is not provided.',
    ANIMATION_END_NOT_DEFINED: 'Method #onAnimationEnd is not defined.',
    ANIMATION_RUNNING: 'Animation is still running.',
  };
}
