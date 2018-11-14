import React from 'react';
import Scene1 from '../../assets/images/works/wild-west-scene-1.jpg';
import Scene2 from '../../assets/images/works/wild-west-scene-2.jpg';
import Scene3 from '../../assets/images/works/wild-west-scene-3.jpg';
import Weapon1 from '../../assets/images/works/wild-west-weapost-1.jpg';
import Weapon2 from '../../assets/images/works/wild-west-weapost-2.jpg';
import Icon1 from '../../assets/images/works/icon-1.png';
import Icon2 from '../../assets/images/works/icon-2.png';
import Icon3 from '../../assets/images/works/icon-3.png';
import Icon4 from '../../assets/images/works/icon-4.png';
import Icon5 from '../../assets/images/works/icon-5.png';
import Icon6 from '../../assets/images/works/icon-6.png';
import Icon7 from '../../assets/images/works/icon-7.png';
import Icon8 from '../../assets/images/works/icon-8.png';
import Icon9 from '../../assets/images/works/icon-9.png';
import Icon10 from '../../assets/images/works/icon-10.png';
import Icon11 from '../../assets/images/works/icon-11.png';
import Icon12 from '../../assets/images/works/icon-12.png';
import Icon13 from '../../assets/images/works/icon-13.png';
import Icon14 from '../../assets/images/works/icon-14.png';
import Icon15 from '../../assets/images/works/icon-15.png';
import Icon16 from '../../assets/images/works/icon-16.png';
import Icon17 from '../../assets/images/works/icon-17.png';
import Icon18 from '../../assets/images/works/icon-18.png';
import Characters from '../../assets/images/works/wild-west-characters.jpg';

const WildWest = () => {
   return (
      <section className="wild-west">
         <div className="wild-west__title">WILD WEST <br /> PROJECT</div>
         <div className="wild-west__scenes-one">
            <div className="container">
               <div className="flex-wrap">
                  <div className="wild-west__desc">
                     Project for mobile on Unity, creating and optimization low poly
                     content, scene creating, assets and shaders setup, character
                     animations setup(state machine)
                  </div>
                  <img src={Scene1} alt="scene screen shot"/>
                  <img src={Scene2} alt="scene screen shot"/>
               </div>
            </div>

         </div>
         <div className="wild-west__scenes-two">
            <div className="container">
               <img src={Scene3} alt="scene screen shot"/>
            </div>
         </div>
         <div className="wild-west__weapons">
            <div className="wild-west__weapons__title">Low poly weapon for characters, screenshots from unity.</div>
            <div className="wild-west__weapons-wrap">
               <div className="flex-container container">
                  <img src={Weapon1} alt="weapons"/>
                  <img src={Weapon2} alt="weapons"/>
               </div>
            </div>
         </div>
         <div className="wild-west__icons">
            <div className="flex-container container">
               <div className="wild-west__icons-item">Render 3d models for icons.</div>
               <img className="wild-west__icons-item" src={Icon1} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon2} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon3} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon4} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon5} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon6} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon7} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon8} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon9} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon10} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon11} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon12} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon13} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon14} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon15} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon16} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon17} alt="icon"/>
               <img className="wild-west__icons-item" src={Icon18} alt="icon"/>
            </div>
         </div>

         <div className="wild-west__characters">
            <div className="container">
               <div className="wild-west__characters-title">Low Poly characters, diffuse only</div>
               <img src={Characters} alt="characters preview"/>
            </div>
         </div>

      </section>
   )
};

export default WildWest;