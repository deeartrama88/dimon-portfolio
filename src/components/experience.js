import React from 'react';

const Experience = () => {
   return (
      <section className="experience">
         <div className="container">
            <div className="experience-title">Experience</div>
            <div className="experience-desc">
               <span className="date">02.2013 - 09.2014</span>
               <span className="text">
                  Worked as a freelancer, modelling and texturing.
               </span>
            </div>
            <div className="experience-desc">
               <span className="date">09.2014 - 01.2017</span>
               <span className="text">
                  Worked at Enixan as a 3d generalist, was engaged in the creation of
                  content for many games. Characters, props, buildings, environment.
                  Full circle of creation models. Modelling, texturing, rig, animation, vfx.
                  Last year worked as a Lead 3d artist
               </span>
            </div>
            <div className="experience-desc">
               <span className="date">01.2017 - 01.2019</span>
               <span className="text">
                  Working in small indie studio on a mobile project. I create and
                  optimize all 3d and partly 2d content in the game. Design, modelling,
                  texturing, rig, animations and vfx. Location prototyping, assets
                  integration to Unity, working with animation state machine, creating
                  shaders and vfx, writing simple scripts on c#.
               </span>
            </div>
         </div>
      </section>
   )
};

export default Experience;