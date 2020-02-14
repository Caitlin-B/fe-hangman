import React from 'react';


export default class Buttons extends React.Component {
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
    ],
    disabledButtons: {}
  };

  render() {
    return this.state.refAlphabet.map(letter => {
      <button
        onClick={this.props.guessLetter} //access to function
        value={letter}
        disabled={this.state.disabledButton[letter]}>
        {letter}
      </button>;
    });
  }

  // do another class for each buttons disabled true/false
}
