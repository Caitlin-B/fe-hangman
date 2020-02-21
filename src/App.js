import React from 'react';
// import logo from './logo.svg';
import './App.css';
import hangman11 from './hangman/hangman11.png';
import hangman10dead from './hangman/hangman10dead.png';
import hangman9 from './hangman/hangman9.png';
import hangman8 from './hangman/hangman8.png';
import hangman7 from './hangman/hangman7.png';
import hangman6 from './hangman/hangman6.png';
import hangman5 from './hangman/hangman5.png';
import hangman4 from './hangman/hangman4.png';
import hangman3 from './hangman/hangman3.png';
import hangman2 from './hangman/hangman2.png';
import hangman1 from './hangman/hangman1.png';
import hangman0 from './hangman/hangman0.png';

class App extends React.Component {
  state = {
    wordOptions: [
      'JELLYFISH',
      'PEANUT',
      'TOMORROW',
      'PLATYPUS',
      'EXTRADITE',
      'FLUFF',
      'DISCOMBOBULATED',
      'REACT',
      'FUNCTION',
      'HANGMAN',
      'PARAMETER',
      'JAVASCRIPT',
      'RECURSION',
      'CLOSURE',
      'PUPPIES',
      'KITTENS',
      'PUZZLE',
      'SAUSAGE',
      'MACARONI',
      'EXPLOSION'
    ],
    selectedWord: '',
    splitWord: [],
    guessedWord: [],
    guessedLetter: '',
    incorrectGuesses: 0,
    gameStarted: false,
    disabledButtons: {}
  };

  render() {
    return (
      <main>
        <header>
          <h1>Hangman Game</h1>
          <button className='newGame' onClick={this.startGame}>
            New Game
          </button>
        </header>
        <Word
          className='word'
          guessedLetter={this.state.guessedLetter}
          splitWord={this.state.splitWord}
          guessedWord={this.state.guessedWord}
          incorrectGuesses={this.state.incorrectGuesses}
          gameStarted={this.state.gameStarted}
        />
        {this.state.gameStarted && (
          <Buttons
            className='letters'
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
      const splitWord = selectedWord.split('');
      const guessedWord = selectedWord.replace(/\w/g, '_').split('');
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

class Buttons extends React.Component {
  state = {
    refAlphabet: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
  };

  render() {
    return this.state.refAlphabet.map(letter => {
      return (
        <button
          className='letterButtons'
          key={letter}
          onClick={event => {
            this.buttonClick(event, this.props.guessLetter);
          }}
          value={letter}
          disabled={this.props.disabledButtons[letter]}>
          {letter}
        </button>
      );
    });

    //onClick of button activate funct here which disables button and then executes guessLetter
  }
  buttonClick = (event, guessLetter) => {
    const guessedLetter = event.target.value;
    guessLetter(guessedLetter);
  };

  // do another class for each buttons disabled true/false
}

function Hangman(props) {
  if (props.gameStarted && props.guessedWord.indexOf('_') === -1) {
    return <img class='hangman' src={hangman11} alt='You win!' />;
  } else if (props.incorrectGuesses === 0) {
    return <img class='hangman' src={hangman0} alt='0 guesses' />;
  } else if (props.incorrectGuesses === 1) {
    return <img class='hangman' src={hangman1} alt='1 guess' />;
  } else if (props.incorrectGuesses === 2) {
    return <img class='hangman' src={hangman2} alt='2 guesses' />;
  } else if (props.incorrectGuesses === 3) {
    return <img class='hangman' src={hangman3} alt='3 guesses' />;
  } else if (props.incorrectGuesses === 4) {
    return <img class='hangman' src={hangman4} alt='4 guesses' />;
  } else if (props.incorrectGuesses === 5) {
    return <img class='hangman' src={hangman5} alt='5 guesses' />;
  } else if (props.incorrectGuesses === 6) {
    return <img class='hangman' src={hangman6} alt='6 guesses' />;
  } else if (props.incorrectGuesses === 7) {
    return <img class='hangman' src={hangman7} alt='7 guesses' />;
  } else if (props.incorrectGuesses === 8) {
    return <img class='hangman' src={hangman8} alt='8 guesses' />;
  } else if (props.incorrectGuesses === 9) {
    return <img class='hangman' src={hangman9} alt='9 guesses' />;
  } else if (props.incorrectGuesses === 10) {
    return <img class='hangman' src={hangman10dead} alt='You lose' />;
  }

  {
    /* if (!props.gameStarted) {
    return <p></p>;
  } else {
    return <p>Number of incorrect guesses: {props.incorrectGuesses}</p>;
  } */
  }
}

function Word(props) {
  const newGuessedWord = props.guessedWord.map(letter => {
    return letter + ' ';
  });
  const newSplitWord = props.splitWord.map(letter => {
    return letter + ' ';
  });

  if (props.incorrectGuesses > 9 && newGuessedWord.indexOf('_ ') !== -1) {
    return <p class='guessedWord'>{newSplitWord}</p>;
  } else {
    return <p class='guessedWord'>{newGuessedWord}</p>;
  }
}

export default App;
