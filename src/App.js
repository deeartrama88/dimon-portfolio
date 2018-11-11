import React, { Component } from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Experience from './components/experience';
import Programs from './components/programs';
import WorkPlan from './components/workPlan';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <AboutMe />
         <Experience />
         <Programs />
         <WorkPlan />
      </div>
    );
  }
}

export default App;
