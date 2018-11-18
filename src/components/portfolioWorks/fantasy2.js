import React, {PureComponent} from 'react';
import big1 from '../../assets/images/works/fantasy-2/big-1.png';
import big2 from '../../assets/images/works/fantasy-2/big-2.png';
import big3 from '../../assets/images/works/fantasy-2/big-3.png';
import FantasyMany from '../../assets/images/works/fantasy-2/many-small.jpg';

class Fantasy2 extends PureComponent {
   render() {
      return (
         <section className="works__fantasy2">
            <div className="title">Characters for another fantasy project</div>
            <div className="sub-title">Design, modelling, texturing, animation.</div>
            <div className="flex-container container">
               <img src={big1} alt="fantasy character"/>
               <img src={big2} alt="fantasy character"/>
               <img src={big3} alt="fantasy character"/>
               <img className="many_fantasy_works" src={FantasyMany} alt="fantasy characters"/>
            </div>
         </section>
      )
   }
}

export default Fantasy2;