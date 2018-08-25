import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Carousel from './components/carousel'
import Lazyload from './components/carousel2'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <h2 className='pageTitle'>Projects</h2>
        <div className='mainPage'>
          <Carousel className="caro"/>
          <Carousel className="caro"/>
          <Carousel className="caro"/>
        </div>
        {/* <Lazyload/> */}
      </div>
    );
  }
}

export default App;
