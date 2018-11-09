import React, { Component } from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';

import BG_01 from './assets/images/bg-01.jpg';
import AgeIcon from './assets/images/ageIcon.png';
import ExpIcon from './assets/images/experienceIcon.png';

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
