import React from 'react';

const Contact = () => {
  const [header] = React.useState({
    subHeading: 'Contact Me',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.',
  });

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
