import React from 'react';
import logo from './logo.svg';
import './App.css';
import dinner from ./dinner.js

function App() {
  return (
    <div className="App">
      <dinner dishname="chicken" karahi sweet="kheer"/>
    </div>
  );
}

export default App;
