import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar/navbar';
import Path from './Components/Path/path';
import Display from './Components/Display/display';
import Mainmenu from './Components/Mainmenu/mainmenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Path />
        <Display />
        <Mainmenu />
      </div>
    );
  }
}

export default App;
