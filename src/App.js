import React, { Component } from 'react';
import MainSlider from './Components/MainSlider.js';
import './App.css';

//home page -- mainly just loads the MainSlider component

class App extends Component {
  render() {
    return (
      <div className="App">

        {this.props.showSlider === true ? <MainSlider /> : '' }
        
      </div>
    );
  }
}

export default App;
