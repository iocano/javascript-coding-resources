/** Class to avoid magic strings. */
export default class Strings {
  /** CSS class names. */
  static CLASS = {
    CONFIRM_BOX: 'confirm-box',
    CONFIRM_BOX_MSG: 'confirm-box-message',
    BUTTONS_DIV: 'confirm-box-buttons',
    CONTAINER: 'confirm-box-container',
  };

  /** GUI text. */
  static TEXT = {
    ACCEPT: 'Accept',
    CANCEL: 'Cancel',
    NOT_OPEN: 'Confirm box is not open.',
    ALREADY_OPEN: 'Confirm box is already open.',
    NO_MESSAGE: 'Confirm box message is not provided.',
    CANCELLED: 'Operation canceled by user.',
  };
}
