import React, {PureComponent} from 'react';
import big from '../../assets/images/works/moon/big.jpg';

class Moon extends PureComponent {
   render() {
      return (
         <section className="moon">
            <div className="moon__title-wrap">
               <div className="moon__title">Project Moon Valley </div>
               <div className="moon__sub-title">Some models for game, every one is animated (animation + vfx) </div>
            </div>
            <div className="container">
               <img src={big} alt="all works"/>
            </div>
         </section>
      )
   }
}

export default Moon;