import React from "react";


export const Buttons = ({guessLetter, disabledButtons}) => {
  const refAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  return (
    refAlphabet.map(letter => {
      return (
        <button
          className="letterButtons"
          key={letter}
          onClick={e => {
            guessLetter(e.target.value);
          }}
          value={letter}
          disabled={disabledButtons[letter]}>
          {letter}
        </button>
      );
    })
  )
}
