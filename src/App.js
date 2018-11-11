import React, { Component } from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Experience from './components/experience';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <AboutMe />
         <Experience />
      </div>
    );
  }
}

export default App;
