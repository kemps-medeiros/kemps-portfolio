import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import kemps from '../img/kemps.png';

const Banner = () => {
  const [state] = React.useState({
    title: 'I am Kemps Medeiros',
    text:
      'I am Kemps, web developer, passionate about technology and programming',
  });
  return (
    <div className="header" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <div className="icons__list">
                  <ul className="header__ul">
                    <li>
                      {/* <div className="icons-center"> */}
                      <a
                        className="icon__principal"
                        href="https://www.linkedin.com/in/kempsmedeiros/"
                        target="_blank"
                      >
                        <FaLinkedin className="icon__banner" />
                      </a>
                      {/* </div> */}
                    </li>
                    <li>
                      <div className="icons-center">
                        <a
                          className="icon__principal"
                          href="https://github.com/kemps-medeiros"
                          target="_blank"
                        >
                          <FaGithub className="icon__banner" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icons-center">
                        <a
                          className="icon__principal"
                          href="https://www.instagram.com/kemps__/"
                          target="_blank"
                        >
                          <FaInstagram className="icon__banner" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <div className="under__bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 center">
            <div className="banner__img">
              <img src={kemps} alt="portrait" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
