import React from 'react';

const Experience = () => {
   return (
      <section className="experience">
         <div className="container">
            <div className="experience-title">Experience</div>
            <div className="experience-desc">
               <span className="date">02.2013 - 09.2014</span> - Работал фрилансером как 3d artist, в основном
               моделирование и текстурирование персонажей.
            </div>
            <div className="experience-desc">
               <span className="date">09.2014 - 01.2017</span> - Работал в компании Enixan как 3d generalist,
               занимался созданием контента для игр в соц. сетях. Персонажи,
               пропсы, здания, анимация, vfx. Последний год работал в качестве
               Lead 3d artist
            </div>
            <div className="experience-desc">
               <span className="date">01.2017 - 01.2019</span> - Работал в инди команде над мобильным проектом,
               занимался созданием и оптимизацией 3d контента, персонажи(+ риг и анимация),
               пропсы, окружение, настройка ассетов в редакторе Unity, создание сцен и
               локаций внутри движка. Настройка анимаций через state machine.
            </div>
         </div>
      </section>
   )
};

export default Experience;