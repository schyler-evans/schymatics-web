import React from 'react';
import logo from './logo.svg';
import chaos from './chaos.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chaos} className="App-logo" alt="logo" />
        <p>
          Undergoing renovations.
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/schyler-evans/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/schyler-evans
        </a>
      </header>
    </div>
  );
}

export default App;
