import React, {PureComponent} from 'react';
import unit1 from '../../assets/images/works/punk-set/tank.jpg';
import unit2 from '../../assets/images/works/punk-set/tank2.jpg';
import unit3 from '../../assets/images/works/punk-set/unit.jpg';
import unit4 from '../../assets/images/works/punk-set/unit2.jpg';
import unit5 from '../../assets/images/works/punk-set/unit3.jpg';

class PunkSet extends PureComponent {
   render() {
      return (
         <section className="punk">
            <div className="punk__title">Some models for project in DieselPunk setting</div>
            <div className="punk__unit_big">
               <div className="punk__sub-title">Design, modelling, texturing</div>
               <img src={unit1} alt="tank"/>
            </div>
            <div className="punk__wrap">
               <div className="flex-container container">
                  <img src={unit2} alt="unit"/>
                  <img src={unit3} alt="unit"/>
                  <img src={unit4} alt="unit"/>
                  <img src={unit5} alt="unit"/>
               </div>
            </div>
         </section>
      )
   }
}

export default PunkSet;