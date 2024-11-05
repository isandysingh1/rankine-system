import React from 'react';

const About = () => {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="imageblock me-4 position-relative">
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/images/about.png`}
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <h6 className="text-primary">About Us</h6>
            <h3 className="display-5 fw-bold mb-3">
            AUTHORIZED CHANNEL PARTNERS OF 
            <b className="text-primary"> DAIKIN CONDITIONING INDIA PVT. LTD.</b>
            </h3>
            <p>
            Welcome to Rankine Systems: Authorized Channel Partners of
            <b> Daikin Air Conditioning India Pvt. Ltd.</b>
            At Rankine Systems, we pride ourselves on being leaders in the
            provision of premium heating, ventilation, and air conditioning
            (HVAC) solutions tailored for both residential and commercial
            clients. With over 15 years of extensive experience in the industry,
            our dedicated team is committed to ensuring that your indoor
            environment remains comfortable and energy-efficient throughout
            the year.
            Our comprehensive suite of services includes expert consultation,
            customized design, seamless installation, routine maintenance, and
            prompt repair services. We utilize the latest technology and the
            highest quality materials to guarantee that our solutions meet the
            highest industry standards. Our certified engineers and technicians
            are unwavering in their commitment to delivering reliable service,
            with an emphasis on customer satisfaction.
            Whether you are looking for a new HVAC system, need routine
            maintenance, or require emergency repairs, you can depend on
            Rankine Systems for timely and professional service.
            Choose Rankine Systems for all your HVAC needs and experience
            unparalleled comfort and efficiency!
            We are Authorized Channel partner of <b>Daikin Airconditioning
            India Pvt Ltd</b> since 2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
