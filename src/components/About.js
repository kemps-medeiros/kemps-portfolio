import React from 'react';

const About = () => {
  const [header] = React.useState({
    subHeading: 'About Me',
  });

  const [state] = React.useState([
    { id: 1, title: 'Name:', text: 'Kemps Medeiros' },
    {
      id: 2,
      title: 'Linkedin:',
      text: 'https://www.linkedin.com/in/kempsmedeiros/',
    },
    { id: 3, title: 'Email:', text: 'kempsmm@gmail.com' },
    { id: 4, title: 'Github:', text: 'https://github.com/kemps-medeiros' },
  ]);

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
        </div>
        <div className="row center">
          <div className="col-10">
            <div className="about__info">
              <div className="about__info-box">
                <h1>Hi there!</h1>
                <div className="about__info-p1">
                  I’ve always been passionate about mathematical and logical
                  challenges, and motivated by that I’ve decided to start
                  programming. I am developing my skills in web development, and
                  the only certainty is that I am passionate about technology
                  and I will never stop programming.
                </div>
                <div className="about__info-p2">
                  I´m graduated in Business Administration and postgraduate in
                  controllership and Finance.
                </div>
                <div className="info__contacts">
                  <div className="row">
                    <div className="col-6">
                      <strong>Name:</strong>
                      <p>Kemps Medeiros</p>
                    </div>
                    <div className="col-6">
                      <strong>Linkedin:</strong>
                      <p>
                        <a
                          href="https://www.linkedin.com/in/kempsmedeiros/"
                          target="_blank"
                        >
                          https://www.linkedin.com/in/kempsmedeiros/
                        </a>
                      </p>
                    </div>
                    <div className="col-6">
                      <strong>Email:</strong>
                      <p>
                        <a href="mailto:kempsmm@gmail.com">kempsmm@gmail.com</a>
                      </p>
                    </div>
                    <div className="col-6">
                      <strong>Github:</strong>
                      <p>
                        <a
                          href="https://github.com/kemps-medeiros"
                          target="_blank"
                        >
                          https://github.com/kemps-medeiros
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
