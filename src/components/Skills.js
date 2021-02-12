import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Services = () => {
  const [header] = React.useState({
    subHeading: 'My Skills',
  });

  const [state] = React.useState([
    {
      id: 1,
      icon: 'FaGithub',
      heading: 'Web Development',
      text: 'Specialized in developing creative and functional websites',
    },
  ]);

  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row center">
            {state.map((info) => (
              <div className="col-4">
                <div className="services__box">
                  <FaGithub className="commonIcons" />
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
