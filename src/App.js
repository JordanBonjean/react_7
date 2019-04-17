import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from "./Components/MovieForm"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My movie
          </p>
          <MovieForm />
        </header>
      </div>
    );
  }
}

export default App;
