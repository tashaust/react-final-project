import React from 'react';
import PersonalLogo from '../assets/PersonalLogo.gif';
import { Link } from 'react-router-dom';


const Nav = ({ setIsModalOpen }) => {
    return (
        <nav>
          <figure>
          <img
            className="personal-logo"
            src={PersonalLogo}
          />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <button
              className="nav__link--anchor link__hover-effect link__hover-effect--black" 
              onClick={() => setIsModalOpen(true)}
              >Join Us</button>
          </li>
          <li className="nav__link">
            <Link
              to="#search__bar"
              className="nav__link--anchor link__hover-effect 
              link__hover-effect--black"
              >Find Your Book</Link>
          </li>
        </ul>   
        </nav>
    );
};

export default Nav;