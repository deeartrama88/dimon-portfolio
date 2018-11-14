import React, {PureComponent} from 'react';
import big1 from '../../assets/images/works/tanks/big-tank-1.jpg';
import big2 from '../../assets/images/works/tanks/big-tank-2.jpg';
import big3 from '../../assets/images/works/tanks/big-tank-3.jpg';
import medium1 from '../../assets/images/works/tanks/medium-tank-1.jpg';
import medium2 from '../../assets/images/works/tanks/medium-tank-2.jpg';
import medium3 from '../../assets/images/works/tanks/medium-tank-3.jpg';
import small1 from '../../assets/images/works/tanks/small-tank-1.jpg';
import small2 from '../../assets/images/works/tanks/small-tank-2.jpg';
import small3 from '../../assets/images/works/tanks/small-tank-3.jpg';
import small4 from '../../assets/images/works/tanks/small-tank-4.jpg';
import plane from '../../assets/images/works/tanks/plane.jpg';
import other from '../../assets/images/works/tanks/other.jpg';

class Tanks extends PureComponent {
   render() {
      return (
         <section className="tanks">

            <div className="tanks__title-section">
               <div className="container">
                  <div className="tanks__title-section__title">
                     Models for project Total Front
                  </div>
                  <div className="tanks__title-section__title__desc">
                     Creating tank and props. <br />
                     Modelling, animation and vfx in 3ds max. <br />
                     Texturing in Substance Painter.
                  </div>
               </div>
            </div>

            <div className="tanks__works">
               <div className="flex-container container">
                  <img className="big" src={big1} alt="tank"/>
                  <img className="big" src={big2} alt="tank"/>
                  <img className="big" src={big3} alt="tank"/>
                  <img className="medium" src={medium1} alt="tank"/>
                  <img className="medium" src={medium2} alt="tank"/>
                  <img className="medium" src={medium3} alt="tank"/>
                  <img className="small" src={small1} alt="tank"/>
                  <img className="small" src={small2} alt="tank"/>
                  <img className="small" src={small3} alt="tank"/>
                  <img className="small" src={small4} alt="tank"/>
                  <img className="other" src={plane} alt="plane"/>
                  <img className="other" src={other} alt="other"/>
               </div>
            </div>

         </section>
      )
   }
}

export default Tanks;