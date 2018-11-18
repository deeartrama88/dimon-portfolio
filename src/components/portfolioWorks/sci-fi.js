import React, {Component} from 'react';
import SciFi1 from '../../assets/images/works/sci-fi/ski-fi-1.jpg';
import SciFi2 from '../../assets/images/works/sci-fi/ski-fi-2.jpg';
import SciFi3 from '../../assets/images/works/sci-fi/ski-fi-3.jpg';

class SciFi extends Component {
   render() {
      return (
         <section className="sci-fi">

            <div className="sci-fi__title">Some models for Sci-fi project</div>

            <div className="flex-container container">
               <img src={SciFi1} alt="sci-fi work" className="item"/>
               <div className="item desc">
                  Design, modelling, sculpting, texturing, <br />
                  rig, animation, vfx. </div>
               <img src={SciFi2} alt="sci-fi work" className="item"/>
               <img src={SciFi3} alt="sci-fi work" className="item"/>
            </div>

         </section>
      )
   }
}

export default SciFi;