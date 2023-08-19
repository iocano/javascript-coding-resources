/* eslint-disable require-jsdoc */
/**
 * Class to serialize/stringify any kind of object.
 * TODO: add  lineal formatter
 * TODO: add docs.
 * TODO: try tree approach to keep track of circular references
 * TODO: clean code.
 */
export default class IterativeSerializer {
  /** @type {State[]} */
  #stack;
  #seen;
  #formatter;
  #serialized = '';
  #referenceCounter = 1;
  constructor() {
    this.#formatter = new StructuredFormatter();
    this.#stack = [];
    this.#seen = new WeakMap();
  }
  serialize(target) {
    const state = new State(target, 0, true);
    this.#serialized = this.#formatter.opening(state, true);
    this.#stack.push(state);
    while (this.#stack.length) {
      const state = this.#stack.pop();

      while (state.moveToNextEntry()) {
        if (!state.isEntryPrimitive()) {
          const [key, value] = state.currentEntry;

          if (this.#seen.has(value)) {
            const reference = this.#seen.get(value);
            let temp = this.#getIndentation(state.depth);
            temp += key + ':[Circular *' + reference + ']\n';
            this.#serialized += temp;
            break;
          }
          this.#seen.set(value, this.#referenceCounter++);

          state.isPending = true; // is pending to close.
          this.#serialized += this.#formatter.opening(state);
          this.#stack.push(state);
          this.#stack.push(State.createFromState(state));
          break;
        }
        this.#serialized += this.#formatter.property(state);
      }
      if (state.isLastEntry && !state.isPending) {
        this.#serialized += this.#formatter.closing(state);
        this.#notifyTargetPropertyIsDone();
      }
    }
    return this.#serialized;
  }

  #getIndentation(depth) {
    return ''.padStart(depth + 1, '\t');
  }
  #notifyTargetPropertyIsDone() {
    for (let i = this.#stack.length - 1; i >= 0; i--) {
      this.#stack[i].isPending = false;
    }
  }
}
class State {
  #target;
  #depth;
  #entries;
  #currentEntry;

  constructor(target, depth = 0, isLastTarget = false) {
    this.#target = target;
    this.#depth = depth;
    this.#entries = Object.entries(target);
    this.isLastTarget = isLastTarget;
    this.isPending = false;
  }
  static createFromState(state) {
    const isLastProperty = state.isLastEntry;
    const value = state.currentEntry[1];
    const depth = state.depth + 1;
    return new State(value, depth, isLastProperty);
  }
  get depth() {
    return this.#depth;
  }

  get isLastEntry() {
    return this.#entries.length === 0;
  }

  get currentEntry() {
    return this.#currentEntry;
  }
  get target() {
    return this.#target;
  }
  isEntryPrimitive() {
    const value = this.#currentEntry[1];
    return typeof value !== 'object' || value === null;
  }
  moveToNextEntry() {
    return (this.#currentEntry = this.#entries.shift());
  }
}

class StructuredFormatter {
  constructor() {}
  opening(state, isRoot = false) {
    if (isRoot) {
      return (Array.isArray(state.target) ? '[' : '{') + '\n';
    }

    const [key, value] = state.currentEntry;
    let opening = Array.isArray(state.target) ? '' : key + ':';
    opening += Array.isArray(value) ? '[' : '{';
    return this.#getIndentation(state.depth) + opening + '\n';
  }

  property(state) {
    const [key, value] = state.currentEntry;
    let opening = Array.isArray(state.target) ? '' : key + ':';
    opening += value;
    opening += state.isLastEntry ? '' : ',';
    return this.#getIndentation(state.depth) + opening + '\n';
  }

  closing(state) {
    let closing = Array.isArray(state.target) ? ']' : '}';
    closing += state.isLastTarget ? '' : ',';
    return this.#getIndentation(state.depth - 1) + closing + '\n';
  }

  #getIndentation(depth) {
    return ''.padStart(depth + 1, '\t');
  }
}

/**
  #serializeTarget(target, depth) {
    let serialized = '{\n';
    const stack = [new State(target, depth, '', true)];
    while (stack.length) {
      const state = stack.pop();
      for (; state.index < state.entries.length; state.index++) {
        const [key, value] = state.current;
        if (typeof value === 'object' && value !== null) {
          serialized += this.#formatter.opening(state);
          let pending;
          if (state.isLastProperty) {
            pending = this.#formatter.closing(state) + state.pending;
            state.isPending = true;
          }
          stack.push(state);
          stack.push(new State(value,
             state.depth+1,pending,state.isLastProperty));
          state.index++;
          break;
        }
        serialized += this.#formatter.property(state);
      }
      // if (state.index === state.entries.length && !state.isPending) {
      if (state.index === state.entries.length && !state.isLastProperty) {
        serialized += this.#formatter.closing(state);
        serialized += state.pending;
      }
    }
    return serialized;
  }
}
class State {
  #target;
  #entries;
  #depth;
  index;
  constructor(target, depth = 0, pending = '', isLastTarget = false) {
    this.#target = target;
    this.#entries = Object.entries(target);
    this.#depth = depth;
    this.index = 0;
    this.pending = pending;
    this.isPending = false;
    this.isLastTarget = isLastTarget;
  }

  get current() {
    return this.#entries[this.index];
  }
  get isLastProperty() {
    return this.index === this.entries.length - 1;
  }
  get entries() {
    return this.#entries;
  }

  get target() {
    return this.#target;
  }
  get depth() {
    return this.#depth;
  }
*/
/*
class StructuredFormatter {
  constructor() {}
  opening(state) {
    let opening = this.#getIndentation(state.depth);
    const [key, value] = state.current;
    if (!Array.isArray(state.target)) {
      opening += key + ':';    
    }
    opening += Array.isArray(value) ? '[' : '{';
    opening += '\n';
    return opening;
  }

  closing(state) {
    let closing = this.#getIndentation(state.depth - 1);
    closing += Array.isArray(state.target) ? ']' : '}';
    if (state.isLastTarget === false) {
      closing += ',\n';
    } else {
      closing += '\n';
    }
    return closing;
  }
  property(state) {
    const [key, value] = state.current;

    let property = this.#getIndentation(state.depth);
    if (Array.isArray(state.target)) {
      property += value;
    } else {
      property += key + ': ' + value;
    }
    if (state.index === state.entries.length - 1) {
      property += '\n';
    } else {
      property += ',\n';
    }
    return property;
  }

  #getIndentation(depth) {
    return ''.padStart(depth + 1, '\t');
  }
}
*/
