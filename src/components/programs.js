import React from 'react';
import Max from '../assets/images/programs/3d-max.png';
import Coat from '../assets/images/programs/3dcoat.png';
import Ae from '../assets/images/programs/ae.png';
import M from '../assets/images/programs/m.png';
import Marmoset from '../assets/images/programs/marmoset.png';
import Photoshop from '../assets/images/programs/photoshop.png';
import Substance from '../assets/images/programs/substance.png';
import Unfold from '../assets/images/programs/unfold3d.png';
import Unity from '../assets/images/programs/unity.png';
import Uvlayout from '../assets/images/programs/uvlayout.png';
import Zbrush from '../assets/images/programs/zbrush.png';

const Programs = () => {
   return (
      <section className="programs">
         <div className="container">
            <div className="programs__flex-container">
               <img src={Max} alt="3ds max"/>
               <img src={Zbrush} alt="z brush"/>
               <img src={Photoshop} alt="photoshop"/>
               <img src={Unity} alt="unity"/>
               <img src={Coat} alt="3d coat"/>
               <img src={Substance} alt="substance"/>
               <img src={Ae} alt="Ae"/>
               <img src={Unfold} alt="unfold3d"/>
               <img src={Uvlayout} alt="uv layout"/>
               <img src={M} alt="M"/>
               <img src={Marmoset} alt="marmoset"/>
            </div>
         </div>
      </section>
   )
};

export default Programs;