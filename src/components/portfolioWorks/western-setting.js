import React, {PureComponent} from 'react';
import westSet1 from '../../assets/images/works/west-set/west1.jpg';
import westSet2 from '../../assets/images/works/west-set/west2.jpg';

class WesternSetting extends PureComponent {
   render() {
      return (
         <section className="west-set">
            <div className="title"> Some models for project in Western setting</div>
            <div className="container flex-container">
               <img src={westSet1} alt="west settings"/>
               <img src={westSet2} alt="west settings"/>
            </div>
         </section>
      )
   }
}

export default WesternSetting;