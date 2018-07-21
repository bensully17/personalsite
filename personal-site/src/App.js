import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Carousel from './components/carousel'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <h2 className='pageTitle'>Projects</h2>
        <Carousel/>
      </div>
    );
  }
}

export default App;
