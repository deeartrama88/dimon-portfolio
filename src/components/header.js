import React from 'react';
import Avatar from '../assets/images/avatar.jpg';

const Header = () => {
   return (
      <header>
         <div className="name">
            <img src={Avatar} className="avatar" alt="avatar"/>
            <div className="name_and_prof">
               <div className="fullName">
                  <span className="mobNewLine">
                     <span className="header_green">T</span>arasenko
                  </span>
                  <span className="header_green"> D</span>mitriy</div>
               <div className="prof">
                  <span className="mobNewLine">
                     <span className="header_green">Game</span> developer
                  </span> /
                     <span className="header_green"> Lead</span> 3d artist
               </div>
            </div>
         </div>
         <div className="menu">
            <ul>
               <li className="selected">About me</li>
               <li>Experience</li>
               <li>Portfolio</li>
               <li>My work</li>
            </ul>
         </div>
      </header>
   )
};

export default Header;