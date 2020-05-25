import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Hangman from "./components/Hangman";
import {Buttons} from "./components/Buttons";

class App extends React.Component {
  state = {
    wordOptions: [
      "JELLYFISH",
      "PEANUT",
      "TOMORROW",
      "PLATYPUS",
      "EXTRADITE",
      "FLUFF",
      "DISCOMBOBULATED",
      "REACT",
      "FUNCTION",
      "HANGMAN",
      "PARAMETER",
      "JAVASCRIPT",
      "RECURSION",
      "CLOSURE",
      "PUPPIES",
      "KITTENS",
      "PUZZLE",
      "SAUSAGE",
      "MACARONI",
      "EXPLOSION"
    ],
    selectedWord: "",
    splitWord: [],
    guessedWord: [],
    guessedLetter: "",
    incorrectGuesses: 0,
    gameStarted: false,
    disabledButtons: {}
  };

  render() {
    return (
      <main>
        <header>
          <h1>Hangman Game</h1>
          <button className="newGame" onClick={this.startGame}>
            New Game
          </button>
        </header>
        <Word
          className="word"
          guessedLetter={this.state.guessedLetter}
          splitWord={this.state.splitWord}
          guessedWord={this.state.guessedWord}
          incorrectGuesses={this.state.incorrectGuesses}
          gameStarted={this.state.gameStarted}
        />
        {this.state.gameStarted && (
          <Buttons
            className="letters"
            guessLetter={this.guessLetter}
            disabledButtons={this.state.disabledButtons}
          />
        )}
        <Hangman
          incorrectGuesses={this.state.incorrectGuesses}
          gameStarted={this.state.gameStarted}
          guessedWord={this.state.guessedWord}
        />
      </main>
    );
  }

  startGame = () => {
    const randomIndex = Math.floor(Math.random() * 20);
    this.setState(currentState => {
      const selectedWord = currentState.wordOptions[randomIndex];
      const splitWord = selectedWord.split("");
      const guessedWord = selectedWord.replace(/\w/g, "_").split("");
      return {
        selectedWord,
        splitWord,
        guessedWord,
        incorrectGuesses: 0,
        gameStarted: true,
        disabledButtons: {
          A: false,
          B: false,
          C: false,
          D: false,
          E: false,
          F: false,
          G: false,
          H: false,
          I: false,
          J: false,
          K: false,
          L: false,
          M: false,
          N: false,
          O: false,
          P: false,
          Q: false,
          R: false,
          S: false,
          T: false,
          U: false,
          V: false,
          W: false,
          X: false,
          Y: false,
          Z: false
        }
      };
    });
  };

  //when button is clicked, the letter is passed to guess letter. If the letter is not in the word, we will increase guesses by 1. If it is, we will reveal the letter.
  guessLetter = guessedLetter => {
    this.setState(currentState => {
      return {
        disabledButtons: {
          ...currentState.disabledButtons,
          [guessedLetter]: true
        }
      };
    });
    if (
      this.state.splitWord.indexOf(guessedLetter) === -1 &&
      this.state.incorrectGuesses !== 10
    ) {
      this.setState(currentState => {
        let currentGuesses = currentState.incorrectGuesses;
        currentGuesses++;
        return {
          incorrectGuesses: currentGuesses
        };
      });
    } else if (this.state.incorrectGuesses !== 10) {
      //loop through split word
      //if if letter is in split word change that index of guessed word to that letter
      const wordRef = this.state.splitWord;
      let revealedWord = [...this.state.guessedWord];
      for (let i = 0; i < wordRef.length; i++) {
        if (wordRef[i] === guessedLetter) {
          revealedWord[i] = guessedLetter;
        }
      }
      this.setState(currentState => {
        return { guessedWord: revealedWord };
      });
    }
  };
}

function Word(props) {
  const newGuessedWord = props.guessedWord.map(letter => {
    return letter + " ";
  });
  const newSplitWord = props.splitWord.map(letter => {
    return letter + " ";
  });

  if (props.incorrectGuesses > 9 && newGuessedWord.indexOf("_ ") !== -1) {
    return <p class="guessedWord">{newSplitWord}</p>;
  } else {
    return <p class="guessedWord">{newGuessedWord}</p>;
  }
}

export default App;
