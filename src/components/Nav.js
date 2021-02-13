import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <FaAlignJustify
                className="toglle"
                onClick={() => setShowLinks(!showLinks)}
              />
              <div className="kemps__logo">KEMPS MEDEIROS</div>
            </div>
          </ul>

          <div className="links" id={showLinks ? 'hidden' : ''}>
            <ul className="navbar__right">
              <li>
                <a href="#home" onClick={() => setShowLinks(!showLinks)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setShowLinks(!showLinks)}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => setShowLinks(!showLinks)}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setShowLinks(!showLinks)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setShowLinks(!showLinks)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
