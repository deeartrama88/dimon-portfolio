import React, {PureComponent} from 'react';
import unit1 from '../../assets/images/works/freelance/unit1.jpg';
import unit2 from '../../assets/images/works/freelance/unit2.jpg';
import unit3 from '../../assets/images/works/freelance/unit3.jpg';
import unit4 from '../../assets/images/works/freelance/unit4.jpg';
import unit5 from '../../assets/images/works/freelance/unit5.jpg';
import unit6 from '../../assets/images/works/freelance/unit6.jpg';

class Freelance extends PureComponent {
   render() {
      return (
         <section className="freelance">
            <div className="freelance__title">Some models for freelance</div>
            <div className="freelance__wrap">
               <div className="container flex-container">
                  <img src={unit1} alt="snake"/>
                  <img src={unit2} alt="snake"/>
                  <img className="doctor" src={unit5} alt="snake"/>
                  <img src={unit3} alt="doctor"/>
                  <img src={unit4} alt="snake"/>
                  <img className="last" src={unit6} alt="snake"/>
               </div>
            </div>
         </section>
      )
   }
}

export default Freelance;