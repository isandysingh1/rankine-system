import React from 'react';

const Services = () => {
  return (
    <section id="services" className="padding-medium">
      <div className="container-fluid p-0">
        <h6 className="text-center text-primary">Our Services</h6>
        <p className="text-center text-muted">
        Daikin products are crafted to ensure a remarkable
        experience for every customer. We employ cutting-edge,
        eco-friendly technologies to foster a harmonious atmosphere.
        Our offerings create an inviting ambiance that combines
        stunning design with advanced functionality.
        </p>
        <div className="row g-0 mt-5">
          <div className="col-md-6 col-lg-3">
            <div className="service-post position-relative bg-primary">
              <img
                src={`${process.env.PUBLIC_URL}/images/service3.jpg`}
                className="service-img img-fluid"
                alt="Installation"
              />
              <div className="position-absolute bottom-0 p-5">
                <h5 className="text-white"><b>Full Range of Split ACs</b></h5>
                <ul className="text-white">
                  <br />
                  <br />
                  <li>1 TR to 4.65 TR</li>
                  <li>Inverter and Non-Inverter</li>
                </ul>
                <a href="services-single.html">
                  <h6 className="text-white text-decoration-underline">Read more</h6>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-post position-relative bg-primary">
              <img
                src={`${process.env.PUBLIC_URL}/images/service4.jpg`}
                className="service-img img-fluid"
                alt="Maintenance"
              />
              <div className="position-absolute bottom-0 p-5">
                <h5 className="text-white"><b>Widest Range of VRV Systems</b></h5>
              
                <ul className="text-white">
                  <li>3.2TR to 16TR (Single Outdoor Unit (ODU) capacity)</li>
                  <li>ODU combination up to 48 TR</li>
                </ul>
                <a href="services-single.html">
                  <h6 className="text-white text-decoration-underline">Read more</h6>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-post position-relative bg-primary">
              <img
                src={`${process.env.PUBLIC_URL}/images/service2.jpg`}
                className="service-img img-fluid"
                alt="Repair"
              />
              <div className="position-absolute bottom-0 p-5">
                <h5 className="text-white"><b>Duckable, Rooftop and Packaged
                ACs</b></h5>
                <ul className="text-white">
                  <li>Wide Range - 1TR to 50TR</li>
                  <li>Flexible and Comfortable air discharges</li>
                </ul>
                <a href="services-single.html">
                  <h6 className="text-white text-decoration-underline">Read more</h6>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-post position-relative bg-primary">
              <img
                src={`${process.env.PUBLIC_URL}/images/service1.jpg`}
                className="service-img img-fluid"
                alt="Consultation"
              />
              <div className="position-absolute bottom-0 p-5">
                <h5 className="text-white"><b>CHILLERS</b></h5>
                <ul className="text-white">
                  <li>Wide range -2TR to 2,700TR (single unit copacity)</li>
                  <li>Multiple compressor design, oering excellent
                  rudundancy</li>
                </ul>
                <a href="services-single.html">
                  <h6 className="text-white text-decoration-underline">Read more</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
