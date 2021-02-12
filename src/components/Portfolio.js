import React from 'react';
import instagram from '../img/portfolio/instagram-clone.png';
import netflix from '../img/portfolio/netflix-clone.png';
import textTransform from '../img/portfolio/react-text-transform.png';
import crudMongoose from '../img/portfolio/crud-mongoose.png';

const Portfolio = () => {
  const [header] = React.useState({
    subHeading: 'My Portfolio',
  });

  const [state] = React.useState([
    {
      id: 1,
      src: instagram,
      heading: 'Instagram-Clone',
      description: 'Clone do site do Instagram',
      link: 'https://github.com/kemps-medeiros/instagram-recreated-page',
    },
    {
      id: 2,
      src: netflix,
      heading: 'Netflix-clone',
      description: 'Clone do site da NetFlix',
      link: 'https://github.com/kemps-medeiros/netflix-clone',
    },
    {
      id: 3,
      src: textTransform,
      heading: 'react-text-transform',
      description:
        'SPA that transforms the texts typed in the Input following some rules',
      link: 'https://github.com/kemps-medeiros/react-text-transform',
    },
    {
      id: 4,
      src: crudMongoose,
      heading: 'CRUD - API',
      description: 'CRUD - API using "mongoose" and "express"',
      link: 'https://github.com/kemps-medeiros/crud-mongoose',
    },
    {
      id: 5,
      icon: '',
      heading: 'Comunication',
      text: 'Good oral and written communication',
    },
    {
      id: 6,
      icon: '',
      heading: 'Proactive',
      text: 'I like challenges and always want to learn more',
    },
  ]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row center">
            {state.map((info) => (
              <div className="col-4">
                <div className="portfolio__box">
                  <div className="portfolio__img"></div>
                  <img src={info.src} alt={info.title} />
                  <div className="portfolio__box-title">{info.heading}</div>
                  <div className="portfolio__box-description">
                    {info.description}
                  </div>
                  <div className="portfolio__box-link">
                    <p>Link Repository: </p>
                    <a href={info.link} target="_blank">
                      {info.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
