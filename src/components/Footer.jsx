import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer-container mt-5 pt-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-5 py-5">
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <h5 className="py-3">Our Address</h5>
            <ul className="nav flex-column">
              <li className="location text-capitalize d-flex align-items-center">
                <p>Head Office Address: 1st Floor, 706, Sector 46, Faridabad, Haryana - 121003.</p>
              </li>
              <li className="phone text-capitalize d-flex align-items-center">
                <p>Branch Office : 105/1 , Gandhi Nagar , Pehowa , Distt Kurukshetra , Haryana - 136128</p>
              </li>
            </ul>
            <ul className="social-links d-flex flex-wrap list-unstyled mt-4">
              <li className="social me-4">
                <a href="#">
                  <iconify-icon icon="mdi:facebook" width="16" height="16"></iconify-icon>
                </a>
              </li>
              <li className="social me-4">
                <a href="#">
                  <iconify-icon icon="mdi:twitter" width="16" height="16"></iconify-icon>
                </a>
              </li>
              <li className="social me-4">
                <a href="#">
                  <iconify-icon icon="mdi:linkedin" width="16" height="16"></iconify-icon>
                </a>
              </li>
              <li className="social me-4">
                <a href="#">
                  <iconify-icon icon="mdi:instagram" width="16" height="16"></iconify-icon>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <h5 className="py-3">Quick links</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><a href="#" className="text-uppercase p-0"> About us </a></li>
              <li className="nav-item"><a href="#" className="text-uppercase p-0"> Our Services </a></li>
              <li className="nav-item"><a href="#" className="text-uppercase p-0"> Privacy Policy</a></li>
              <li className="nav-item"><a href="#" className="text-uppercase p-0"> Contact us </a></li>
              <li className="nav-item"><a href="#" className="text-uppercase p-0"> Support </a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <h5 className="py-3">Project Gallery</h5>
            <div className="row g-1">
              <div className="col-4">
                  <img src="images/govproject1.png" className="post-image img-fluid" alt="Project 1" />
              </div>
              <div className="col-4">
                  <img src="images/govproject2.png" className="post-image img-fluid" alt="Project 2" />
              </div>
              <div className="col-4">
                  <img src="images/schoolproject1.png" className="post-image img-fluid" alt="Project 3" />
              </div>
              <div className="col-4">
                  <img src="images/hospitalproject1.png" className="post-image img-fluid" alt="Project 4" />
              </div>
              <div className="col-4">
                  <img src="images/gymproject1.png" className="post-image img-fluid" alt="Project 5" />
              </div>
              <div className="col-4">
                  <img src="images/retailproject1.png" className="post-image img-fluid" alt="Project 6" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <h5 className="py-3">Our Newsletter</h5>
            <p>Subscribe to our newsletter to receive updates and news about our services.</p>
            <form className="position-relative">
              <input
                type="text"
                className="form-control rounded-5 px-4 py-2 bg-transparent"
                placeholder="Your email address"
              />
              <a href="#" className="position-absolute top-50 end-0 translate-middle-y bg-primary rounded-circle p-1 mx-1">
                <svg className="text-white" width="25" height="25">
                  <use xlinkHref="#send"></use>
                </svg>
              </a>
            </form>
          </div>
        </div>
      </div>

      <hr className="text-black" />

      <div className="container">
        <div className="row align-items-center py-2">
          <p>© 2024 Rankine Systems - All rights reserved</p>
        </div>
        <a href="https://wa.me/918076331455?text=Hello%2C%20I%20need%20help%20with%20my%20air%20conditioning" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          <img src="images/whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
