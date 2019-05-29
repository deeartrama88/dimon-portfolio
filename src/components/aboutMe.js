import React from 'react';
import Mail from '../assets/images/mail.png';
import Art from '../assets/images/art-station.png';
import LinkedIn from '../assets/images/linkedIn.png';

const AboutMe = () => {
   return (
      <section className="about-me">
            <div className="about-me__wrap">
               <div className="about-me__block">
                  <div className="container">
                     <div className="about-me__title">About me</div>
                     Engaged in the development of  games for more than six years. <br />
                     Main specialty is 3d generalist, full cycle of creating 3D content. <br />
                     Modelling, retopology, baking maps, texturing, rig, animations, vfx.
                  </div>
               </div>
               <div className="about-me__block two">
                  <div className="container">
                     Last 2 years I working and actively study the unity engine, content <br />
                     integration, optimization and prototyping. working with animation <br />
                     state machine, creating shaders and vfx, writing simple scripts on c#.
                  </div>
               </div>
               <div className="about-me__contacts">
                  <a href="mailto:lgtdimon@gmail.com">
                     <img src={Mail} alt="email"/>
                     <span>Lgtdimon@gmail.com</span>
                  </a>
                  <a href="https://dmitrytarasenko.artstation.com/" rel="noopener noreferrer" target="_blank">
                     <img src={Art} alt="art station"/>
                     <span>Artstation</span>
                  </a>
                  <a href="#">
                     <img src={LinkedIn} alt="linked in"/>
                     <span>LinkedIn</span>
                  </a>
               </div>
               <div className="about-me__looking-for">
                  <div className="container">
                     <div className="about-me__looking-for__text">
                        <p>Looking for opportunity to create sucsessful, awesome games.</p>
                        <p> I can take responsibility for creating an effective pipeline in the studio, <br />
                           creating and managing an art team.</p>
                     </div>
                  </div>
                  <div className="about-me__experience">
                     <div className="item">
                        6+ years <br />
                        experience
                     </div>
                     <div className="item">
                        intermediate <br />
                        English
                     </div>
                     <div className="item">
                        Kiev <br />
                        Ukraine
                     </div>
                  </div>
               </div>
            </div>
      </section>
   )
};

export default AboutMe;