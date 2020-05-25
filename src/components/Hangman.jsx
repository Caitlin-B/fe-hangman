import React from 'react';
import hangman11 from '../hangman/hangman11.png';
import hangman10dead from '../hangman/hangman10dead.png';
import hangman9 from '../hangman/hangman9.png';
import hangman8 from '../hangman/hangman8.png';
import hangman7 from '../hangman/hangman7.png';
import hangman6 from '../hangman/hangman6.png';
import hangman5 from '../hangman/hangman5.png';
import hangman4 from '../hangman/hangman4.png';
import hangman3 from '../hangman/hangman3.png';
import hangman2 from '../hangman/hangman2.png';
import hangman1 from '../hangman/hangman1.png';
import hangman0 from '../hangman/hangman0.png';

const Hangman = ({gameStarted, guessedWord, incorrectGuesses}) => {
  if (gameStarted && guessedWord.indexOf('_') === -1) {
    return <img class='hangman' src={hangman11} alt='You win!' />;
  } else if (incorrectGuesses === 0) {
    return <img class='hangman' src={hangman0} alt='0 guesses' />;
  } else if (incorrectGuesses === 1) {
    return <img class='hangman' src={hangman1} alt='1 guess' />;
  } else if (incorrectGuesses === 2) {
    return <img class='hangman' src={hangman2} alt='2 guesses' />;
  } else if (incorrectGuesses === 3) {
    return <img class='hangman' src={hangman3} alt='3 guesses' />;
  } else if (incorrectGuesses === 4) {
    return <img class='hangman' src={hangman4} alt='4 guesses' />;
  } else if (incorrectGuesses === 5) {
    return <img class='hangman' src={hangman5} alt='5 guesses' />;
  } else if (incorrectGuesses === 6) {
    return <img class='hangman' src={hangman6} alt='6 guesses' />;
  } else if (incorrectGuesses === 7) {
    return <img class='hangman' src={hangman7} alt='7 guesses' />;
  } else if (incorrectGuesses === 8) {
    return <img class='hangman' src={hangman8} alt='8 guesses' />;
  } else if (incorrectGuesses === 9) {
    return <img class='hangman' src={hangman9} alt='9 guesses' />;
  } else if (incorrectGuesses === 10) {
    return <img class='hangman' src={hangman10dead} alt='You lose' />;
  }
};

export default Hangman;