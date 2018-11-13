import React, {PureComponent} from 'react';
import Fantasy1 from '../../assets/images/works/fantasy/fantasy-1.png';
import FantasyCharacter1 from '../../assets/images/works/fantasy/fantasy-character-1.jpg';
import FantasyCharacter2 from '../../assets/images/works/fantasy/fantasy-character-2.jpg';
import FantasyCharacter3 from '../../assets/images/works/fantasy/fantasy-character-3.jpg';
import FantasyCharacter4 from '../../assets/images/works/fantasy/fantasy-character-4.jpg';
import FantasyCharacter5 from '../../assets/images/works/fantasy/fantasy-character-5.jpg';
import FantasyCharacter6 from '../../assets/images/works/fantasy/fantasy-character-6.jpg';
import FantasyCharacter7 from '../../assets/images/works/fantasy/fantasy-character-7.jpg';
import FantasyCharacter8 from '../../assets/images/works/fantasy/fantasy-character-8.jpg';
import FantasyCharacter9 from '../../assets/images/works/fantasy/fantasy-character-9.jpg';
import FantasyCharacter10 from '../../assets/images/works/fantasy/fantasy-character-10.jpg';
import FantasyMany from '../../assets/images/works/fantasy/fantasy-many-small.jpg';

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
               <div className="works__fantasy-characters">
                  <img src={FantasyCharacter4} alt="character"/>
                  <img src={FantasyCharacter2} alt="character"/>
                  <img src={FantasyCharacter3} alt="character"/>
                  <img src={FantasyCharacter1} alt="character"/>
               </div>
               <div className="works__fantasy-characters2">
                  <img src={FantasyCharacter5} alt="character"/>
                  <img src={FantasyCharacter6} alt="character"/>
                  <img src={FantasyCharacter7} alt="character"/>
                  <img src={FantasyCharacter8} alt="character"/>
               </div>
               <div className="works__fantasy-characters3">
                  <img src={FantasyCharacter9} alt="character"/>
                  <img src={FantasyCharacter10} alt="character"/>
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