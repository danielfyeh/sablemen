import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import Parallax from './components/parallax';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sablemen</h1>
        </header>
        <Navbar />
        <Parallax />
      </div>

    );
  }
}

export default App;
