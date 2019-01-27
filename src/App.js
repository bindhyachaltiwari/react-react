import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainComponent from './Components/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App Wrapper">
        <MainComponent/>
      </div>
    );
  }
}

export default App;
