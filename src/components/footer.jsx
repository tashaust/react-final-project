import React from 'react';
import PersonalLogo from '../assets/PersonalLogo.gif';

const Footer = () => {
    return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
          <img
            className="footer__logo--img"
            src={PersonalLogo}
          />
          </figure>
          <div className="footer__copywright">Copywright © 2026 Tasha Austin</div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;