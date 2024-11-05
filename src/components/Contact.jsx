import React from 'react';

const Contact = () => {
  return (
    <section id="contact-info" className="padding-small bg-gray">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div>
            <h3 className="display-5 fw-bold mb-3">Feel Free to Contact Us</h3>
            <p>
            Rajwant Singh ( Managing Director )
            <br />
            Mob: +91 807 6331 455
            <br />
            E-mail: rajwant.singh@rankinesystems.com
            </p>
          </div>
          <br />
            Diljeet Singh ( Director )
            <br />
            Mob: +91 735 7695 705
            <br />
            E-mail: diljeet.singh@rankinesystems.com
          <a href="contact.html" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
