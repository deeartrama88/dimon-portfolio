import React, { Component } from 'react';
import './assets/css/fonts.css';
import './assets/css/index.css';
import './assets/css/media.css';
import Avatar from './assets/images/avatar.jpg';
import BG_01 from './assets/images/bg-01.jpg';
import AgeIcon from './assets/images/ageIcon.png';
import ExpIcon from './assets/images/experienceIcon.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <div className="name">
             <img src={Avatar} className="avatar" alt="avatar"/>
             <div className="name_and_prof">
                <div className="fullName"><green>T</green>arasenko <green>D</green>mitriy</div>
                <div className="prof"><span className="mobNewLine"><green>Game</green> developer </span> / <green>Lead</green> 3d artist</div>
             </div>
          </div>
          <div className="menu">
            <ul>
               <li className="selected">About me</li>
               <li>Experience</li>
               <li>Portfolio</li>
               <li>My work</li>
               <li className="sendMessage">Send Message</li>
            </ul>
          </div>
        </header>

      </div>
    );
  }
}

export default App;
