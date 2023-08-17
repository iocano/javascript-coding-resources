/* eslint-disable require-jsdoc */
export default class PathKey {
  /**
   * The key name.
   * @type {string}
   */
  #name;

  /**
   * Denotes if the path was matched as property(.value) or as index ([value]).
   * @type {dot|bracket}
   */
  #notation;

  /**
   * The original string that match the regular expression.
   * @type {string}
   */
  #matchString;

  /**
   * Create PathKey instance.
   * @param {RegExpMatchArray} match Single iterator match from
   * path.matchAll(/(\w+)|\[(['"]?)\s*(.*?)\s*(['"]?)\]/g).
   * @description {RegExpMatchArray} match
   * - match[0] The text in the path that matched the key.
   * - match[1] The property if was matched.
   * - match[2] The opening quote if was matched.
   * - match[3] The index between quotes if was matched.
   * - match[4] The closing quote if was matched.
   * @throws {Error} If quotes are not matched in the 'matchText'
   */
  constructor(match) {
    const [matchString, property, open, index, close] = match;
    if (open !== close) {
      throw new Error(`Not matching quotes on ${matchString}`);
    }
    this.#name = property || index;
    this.#notation = property ? 'dot' : 'bracket';
    this.#matchString = matchString;
  }

  /**
   * The key name.
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   *  Key notation.
   * @return {string}
   */
  get notation() {
    return this.#notation;
  }

  /**
   * The string that matches in the path.
   * @return {string}
   */
  get matchString() {
    return this.#matchString;
  }
}
