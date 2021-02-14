import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [header] = React.useState({
    subHeading: 'Contact Me',
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uqj0jet',
        'template_ra1ro1i',
        e.target,
        'user_9PdcRCk3oHNocgyAybVAN'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert('Message sent successfully');
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="container ">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
        </div>
        <div className="row center">
          <div className="contact__form-box">
            <form onSubmit={sendEmail} className="contact__form__">
              <div className="input__type1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="input__type1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  name="email"
                />
              </div>
              <div className="input__type1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="input__type2">
                <textarea
                  className="form-control"
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btnSubmit"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
