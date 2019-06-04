import React, {PureComponent} from 'react';
import HD1 from '../../assets/images/works/healthDefender/RiseOfAI_1.png';
import HD2 from '../../assets/images/works/healthDefender/RiseOfAI_2.png';

class HealthDefender extends PureComponent {
   render() {
      return (
         <section className="health-defender">
            <div className="health-defender__title">Some models for personal project</div>
            <div className="health-defender__title-small">Low poly models, diffuse only, unity mobile project</div>
            <div className="container flex-container">
               <img src={HD1} alt="health defender"/>
               <img src={HD2} alt="health defender"/>
            </div>
         </section>
      )
   }
}

export default HealthDefender;