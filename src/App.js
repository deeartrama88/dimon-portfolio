import React, { Component } from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <AboutMe />
      </div>
    );
  }
}

export default App;
