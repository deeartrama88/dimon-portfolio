import React from 'react';

import AgeIcon from '../assets/images/ageIcon.png';
import ExpIcon from '../assets/images/experienceIcon.png';

const AboutMe = () => {
   return (
      <section className="about-me">
         <div className="container">
            <div className="about-me__grid-wrap">
               <div className="about-me__exp">
                  <img src={AgeIcon} alt="age"/>
                  <img src={ExpIcon} alt="experience"/>
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
               </div>
               <div className="about-me__contacts">
                  <div className="about-me__contacts__lang">
                     <span className="word">English</span>
                     <span className="desc">(Read, write)</span>
                     <span className="value">85/100</span>
                  </div>
                  <div className="about-me__contacts__lang">
                     <span className="word">English</span>
                     <span className="desc">(Speaking)</span>
                     <span className="value">55/100</span>
                  </div>
                  <div className="about-me__contacts__info">
                     <div className="about-me__contacts__info-title">Phone:</div>
                     <div className="about-me__contacts__info-value">+38 050 816 4602</div>

                     <div className="about-me__contacts__info-title">Location:</div>
                     <div className="about-me__contacts__info-value">Kyiv</div>

                     <div className="about-me__contacts__info-title">email:</div>
                     <div className="about-me__contacts__info-value">lgtdimon@gmail.com</div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
};

export default AboutMe;