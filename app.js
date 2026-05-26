let game;


class Utils {
  static isAlpha(letter) {
    return typeof letter === "string" && letter.length === 1
      && (letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z");
  }
}

class UI {
  constructor(word_element, health_element, reset_button) {
    this.word_element = word_element;
    this.health_element = health_element;
    this.reset_button = reset_button;
  }
  
  empty() {
  }
  
  
  assignReset(resetFunction) {
    this.reset_button.addEventListener('click', resetFunction);
  }
}

class GamePlay {
  constructor(beginnerX, _UI) {
    this._UI = _UI;
  }
  
  onSucceed() {
  }

  isVictory() {
  }

  onFail() {
  }
}


class Game {
  constructor(_UI) {
    this.beginnerX = true;
    this._UI = _UI;
    this._UI.assignReset(() => this.newGame());
    this.newGame();
  }

  newGame() {
    this.game_play = new GamePlay(this.beginnerX, this._UI);
    this.beginnerX = ! this.beginnerX;
  }
}

document.addEventListener("DOMContentLoaded",
  function () {
    let textOutput = document.getElementById("textOutput");
    let resetButton = document.getElementById("reset");
    let gameGraphic = document.getElementById("game");
  }
)