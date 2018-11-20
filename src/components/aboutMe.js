import React from 'react';

import Exp from '../assets/images/exp.png';
import Eng from '../assets/images/eng.png';
import Mail from '../assets/images/mail.png';
import Art from '../assets/images/art-station.png';
import Location from '../assets/images/location.png';
import Controls from '../assets/images/controls.png';


const AboutMe = () => {
   return (
      <section className="about-me">
         <div className="container">
            <div className="about-me__grid-wrap">
               <div className="about-me__exp">
                  <img src={Eng} alt="age"/>
                  <img src={Exp} alt="experience"/>
               </div>
               <div className="about-me__about">
                  <div className="about-me__about__title">About me</div>
                  <div className="about-me__about__desc">Занимаюсь разработкой контента для игр больше шести лет,
                     принимал участие в создании многих игр. Последние два
                     года занимаюсь мобильным проектом под unity.
                  </div>
                  <div className="about-me__about__desc"> Активно изучаю движок Unity, различные пайплайны по разработке
                     контента, интересуюсь всеми сторонами разработки игровых проектов.
                  </div>
                  <img src={Controls} alt="controls"/>
               </div>
               <div className="about-me__contacts">
                  <a href="mailto:lgtdimon@gmail.com "><img src={Mail} alt="email"/></a>
                  <a href="https://dmitrytarasenko.artstation.com/" rel="noopener noreferrer" target="_blank"><img src={Art} alt="art station"/></a>
                  <img src={Location} alt="location"/>
               </div>
            </div>
         </div>
      </section>
   )
};

export default AboutMe;