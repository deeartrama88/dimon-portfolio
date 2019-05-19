import React, { Component } from 'react';
import Slider from 'react-slick';
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
import Indiane from '../../assets/images/works/west-set/Indiane.png';
import Jenifer from '../../assets/images/works/west-set/Jenifer.png';
import Mexican from '../../assets/images/works/west-set/Mexican.png';
import Niger from '../../assets/images/works/west-set/Niger.png';
import Preacher from '../../assets/images/works/west-set/Preacher.png';
import Teenager from '../../assets/images/works/west-set/Teenager.png';
import YoungMan from '../../assets/images/works/west-set/YoungMan.png';

class WildWest extends Component {
   constructor(props) {
      super(props);
      this.state = {
         modelWidth: this.getResponsiveSize().width,
         modelHeight: this.getResponsiveSize().height,
      };
      console.log(window.innerWidth);
   }

   getResponsiveSize = () => {
      let size = {
         width: 320,
         height: 180,
      };
      const width = window.innerWidth;
      if (width > 550) {
         size.width = 440;
         size.height = 280;
      }
      if (width > 850) {
         size.width = 640;
         size.height = 480;
      }
      return size;
   };

   render() {
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
               <div className="container">
                  <div className="wild-west__icons-item">Render 3d models for icons.</div>
                  <div className="slider--wrapper">
                     <Slider
                        dots={true}
                        autoplay={true}
                        infinite={true}
                        speed={1000}
                        slidesToShow={5}
                        slidesToScroll={1}
                        responsive={[
                           {
                              breakpoint: 900,
                              settings: {
                                 slidesToShow: 3,
                              }
                           },
                           {
                              breakpoint: 520,
                              settings: {
                                 slidesToShow: 1,
                              }
                           }]}
                     >
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
                     </Slider>
                  </div>
                  <div className="wild-west__model">
                     <hr />
                     <div className="sketchfab-embed-wrapper">
                        <iframe
                           width={this.state.modelWidth}
                           height={this.state.modelHeight}
                           src="https://sketchfab.com/models/85bfdfed42c3464ea2b8321e09462ca3/embed"
                           frameBorder="0"
                           title={'model'}
                           allow="autoplay; fullscreen; vr"
                           mozallowfullscreen="true"
                           webkitallowfullscreen="true">
                        </iframe>
                     </div>
                  </div>
               </div>
            </div>

            <div className="wild-west__characters">
               <div className="container">
                  <div className="wild-west__characters-title">Low Poly characters, diffuse only</div>
                  <div className="slider--wrapper">
                     <Slider
                        centerMode={true}
                        dots={true}
                        autoplay={true}
                        infinite={true}
                        speed={1000}
                        slidesToShow={3}
                        slidesToScroll={1}
                        responsive={[
                           {
                              breakpoint: 900,
                              settings: {
                                 slidesToShow: 1,
                                 slidesToScroll: 1,
                                 centerMode: false,
                              }
                           }]}
                     >
                        <div className={'slider-item'}>
                           <img src={Indiane} alt="carousel"/>
                        </div>
                        <div className={'slider-item'}>
                           <img src={Jenifer} alt="carousel"/>
                        </div>
                        <div className={'slider-item'}>
                           <img src={Mexican} alt="carousel"/>
                        </div>
                        <div className={'slider-item'}>
                           <img src={Niger} alt="carousel"/>
                        </div>
                        <div className={'slider-item'}>
                           <img src={Preacher} alt="carousel"/>
                        </div>
                        <div className={'slider-item'}>
                           <img src={Teenager} alt="carousel"/>
                        </div>
                        <div className={'slider-item'}>
                           <img src={YoungMan} alt="carousel"/>
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
         </section>
      )
   }
};

export default WildWest;