import React from 'react';
// import Avatar from '../assets/images/avatar.jpg';

const Header = () => {
   return (
      <header>
         <div className="name">
            {/*<img src={Avatar} className="avatar" alt="avatar"/>*/}
            <div className="name_and_prof">
               <div className="fullName">Tarasenko Dmitriy</div>
               <div className="prof">
                  Lead 3D artist
                  <span> / </span>
                  Technical Artist
                  <span> / </span>
                  Game developer
               </div>
            </div>
         </div>
         <div className="menu">
            <ul>
               <li className="selected">About me</li>
               <li>Portfolio</li>
               <li>Contact</li>
            </ul>
         </div>
      </header>
   )
};

export default Header;