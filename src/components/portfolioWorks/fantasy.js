import React, {PureComponent} from 'react';
import Slider from 'react-slick';
import Fantasy1 from '../../assets/images/works/fantasy/fantasy-1.png';
import FantasyMany from '../../assets/images/works/fantasy/fantasy-many-small.jpg';
import Sculpt1 from '../../assets/images/works/fantasy/Sculpts_1.png';
import Sculpt2 from '../../assets/images/works/fantasy/Sculpts_2.png';
import Sculpt3 from '../../assets/images/works/fantasy/Sculpts_3.png';

class Fantasy extends PureComponent {
   render() {
      return (
         <section className="works__fantasy">
            <div className="works__fantasy__title-wrap">
               <div className="works__fantasy__title">Characters for project in Fantasy setting</div>
               <div className="works__fantasy-desc">
                  <img src={Fantasy1} alt="fantasy work"/>
                  <div className="desc">
                     Design, modlling, sculpting,
                     unwraping, retopology, map baking,
                     texturing, rig, skin, animations.
                  </div>
               </div>
            </div>
            <div className="container">
               <div className="slider--wrapper">
                  <Slider
                     dots={true}
                     slidesToShow={1}
                     slidesToScroll={1}
                  >
                     <img src={Sculpt1} alt="sculpt" />
                     <img src={Sculpt2} alt="sculpt" />
                     <img src={Sculpt3} alt="sculpt" />
                  </Slider>
               </div>

            </div>
            <div className="works__fantasy-many">
                  <img src={FantasyMany} alt="fantasy"/>
            </div>
         </section>
      )
   }
}

export default Fantasy;