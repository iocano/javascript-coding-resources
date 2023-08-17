/** Fade-out animation class. */
export default class FadeOut {
  /**
   * Element to animate.
   * @type {HTMLElement}
   */
  #element;

  /**
   * Animation duration in milliseconds.
   * @type {number};
   */
  #duration;

  /**
   * Animation start time.
   * @type {number};
   */
  #startTime;

  /**
   * Callback executed when animation is done.
   * @type {Function}
   */
  #onDone;

  /**
   * Create a FadeOut instance.
   * @param {HTMLElement} element Element on which apply animation.
   * @param {number} duration Animation duration. Default 500
   * @param {Function} onDone Callback executed when animation is done.
   */
  constructor(element, duration = 500, onDone = () => {}) {
    this.#element = element;
    this.#duration = duration;
    this.#onDone = onDone;
  }

  /**
   * Start fadeIn animation.
   */
  start() {
    this.#startTime = performance.now();
    requestAnimationFrame(this.#onRequestAnimationFrame.bind(this));
  }

  /**
   * Callback for requestAnimationFrame of start() method.
   * @param {DOMHighResTimeStamp} timestamp Current execution time.
   */
  #onRequestAnimationFrame(timestamp) {
    const elapsed = timestamp - this.#startTime;
    const progress = 1 - elapsed / this.#duration;
    const opacity = progress >= 0 ? progress : 0;

    this.#element.style.opacity = opacity;

    if (elapsed < this.#duration) {
      requestAnimationFrame(this.#onRequestAnimationFrame.bind(this));
    } else {
      const animationEnd = new Event('animationend');
      this.#element.dispatchEvent(animationEnd);
      this.#onDone();
    }
  }
}
