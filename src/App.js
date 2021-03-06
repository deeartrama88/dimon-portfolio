import React, { Component, Fragment } from 'react';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Experience from './components/experience';
import Programs from './components/programs';
import WorkPlan from './components/workPlan';
import PortfolioWorks from './components/portfolioWorks/index';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Fragment>
            <Header />
            <AboutMe />
            <Experience />
            <Programs />
            <WorkPlan />
            <PortfolioWorks />
            <Footer />
         </Fragment>
      </div>
    );
  }
}

export default App;
