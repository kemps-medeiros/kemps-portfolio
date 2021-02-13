import React from 'react';
import {
  FaGithub,
  FaNodeJs,
  FaReact,
  FaComment,
  FaBrain,
} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

const Services = () => {
  const [header] = React.useState({
    subHeading: 'My Skills',
  });

  const [state] = React.useState([
    {
      id: 1,
      icon: FaNodeJs,
      heading: 'NodeJS',
      text: 'Express, Mongoose, Pupetteer',
    },
    {
      id: 2,
      icon: FaReact,
      heading: 'ReactJS',
      text: 'React Hooks, Bootstrap, CSS3',
    },
    {
      id: 3,
      icon: FaGithub,
      heading: 'Git and Github',
      text: 'Basic commands of using git',
    },
    {
      id: 4,
      icon: DiMongodb,
      heading: 'MongoDB',
      text: 'MongoDB Atlas, MongoDB Compass',
    },
    {
      id: 5,
      icon: FaComment,
      heading: 'Comunication',
      text: 'Good oral and written communication',
    },
    {
      id: 6,
      icon: FaBrain,
      heading: 'Proactive',
      text: 'I like challenges and always want to learn more',
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
                  <info.icon className="commonIcons" />
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
