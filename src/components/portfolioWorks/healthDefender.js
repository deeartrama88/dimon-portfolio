import React, {PureComponent} from 'react';
import HD1 from '../../assets/images/works/healthDefender/health-defender-1.jpg';
import HD2 from '../../assets/images/works/healthDefender/health-defender-2.jpg';
import HD3 from '../../assets/images/works/healthDefender/health-defender-3.jpg';
import HD4 from '../../assets/images/works/healthDefender/health-defender-4.jpg';
import HD5 from '../../assets/images/works/healthDefender/health-defender-5.jpg';

class HealthDefender extends PureComponent {
   render() {
      return (
         <section className="health-defender">
            <div className="health-defender__title">Some models for personal project</div>
            <div className="health-defender__title-small">Low poly models, diffuse only, unity mobile project</div>
            <div className="container flex-container">
               <img src={HD1} alt="health defender"/>
               <img src={HD2} alt="health defender"/>
               <img src={HD3} alt="health defender"/>
               <img src={HD4} alt="health defender"/>
               <img src={HD5} alt="health defender"/>
            </div>
         </section>
      )
   }
}

export default HealthDefender;