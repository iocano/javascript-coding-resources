# Class

```javascript
class Player {
  lives = 10; // public instance field
  #score = 0; // private instance field

  static maxPlayers = 5; // static public
  static #currentId = 1; // static private

  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  // getters and setters
  get score() {
    return this.#score;
  }

  set score(newScore) {
    this.#score = newScore;
  }

  // public method
  resetScore() {
    this.#score = 0;
  }

  // private method
  #resetLives() {
    this.lives = 10;
  }

  // static public
  static createDummyPlayer() {
    return new Player('Dummy', this.#getId());
  }

  // static private
  static #getId() {
    return this.#currentId++;
  }
}

// Create instance
const player1 = new Player('Jake', 'Chambers');

// Call static method
const dummyPlayer = Player.createDummyPlayer();
```
