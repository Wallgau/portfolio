import React, { Component } from 'react';
import Header from './Header.js';
import Projects from './Projects.js';
import './App.css';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
