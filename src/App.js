/*global swal*/

import React from 'react';
import logo from './logo.svg';
import loading from './loading.svg';
import './App.css';
import Sound from 'react-sound';
import Button from './Button';
import { useState, useEffect } from 'react';

const apiToken = 'BQCCZtUMnxLoBp7TZD94JGG02L7F5lG8lpJe9fMGp1KlrKWr0Qi2ao_-zX5pwbYhQtI7RBxu-OMa5r1QCMVobT-iu_Y2bhlAi4qJKi4E5ucP1VcAPq0';

function shuffleArray(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = getRandomNumber(counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

/* Return a random number between 0 included and x excluded */
function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
}

const App = () => {

  const [text, setText] = useState('');
  useEffect(() => {
    setText('Testing');
    fetch('https://api.spotify.com/v1/me/tracks', {
      method: 'GET',
      headers: {
      Authorization: 'Bearer ' + apiToken,
      },
    })
      .then(response => response.json())
      .then((data) => {
        console.log("Reply received. This is what I received: ", data);
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome on the Name that Tune</h1>
      </header>
      <div className="App-images">
        <p>Guess the current song playing.</p>
        <p>{text}</p>
      </div>
      <div className="App-buttons">
      </div>
    </div>
  );
};

export default App;
