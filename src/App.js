import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Rohan's Site</h2>
        </div>
        <p className="App-intro">
          There's not much here... yet 🤔
        </p>
      </div>
    );
  }
}

export default App;
