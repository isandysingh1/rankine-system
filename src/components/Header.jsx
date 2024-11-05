import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ heroRef, aboutRef, servicesRef, featureRef, projectsRef, contactRef }) => {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header id="header">
        <nav id="primary-header" className="navbar navbar-expand-lg py-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="images/main-logo.png" className="logo img-fluid" alt="logo" style={{ width: '22rem' }} />
            </Link>
            <button
              className="navbar-toggler border-0 d-flex d-lg-none order-3 p-2 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdNavbar"
              aria-controls="bdNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="header-bottom offcanvas offcanvas-end" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
              <div className="offcanvas-header px-4 pb-0">
                <button
                  type="button"
                  className="btn-close btn-close-black mt-2"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  data-bs-target="#bdNavbar"
                ></button>
              </div>
              <div className="offcanvas-body align-items-center justify-content-end">
                <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
                  <li className="nav-item px-3">
                    <a className="nav-link active p-0" aria-current="page" onClick={() => handleScroll(heroRef)}>Home</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(aboutRef)}>About</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(servicesRef)}>Services</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(featureRef)}>Features</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(contactRef)}>Contact</a>
                  </li>
                  <li className="nav-item px-3 dropdown">
                    <a className="nav-link p-0 dropdown-toggle text-center" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                      {/* <li className="py-1"><a href="about.html" className="dropdown-item text-uppercase">About <span className="badge bg-secondary">Pro</span></a></li>
                      <li className="py-1"><a href="blog.html" className="dropdown-item text-uppercase">Blog <span className="badge bg-secondary">Pro</span></a></li>
                      <li className="py-1"><a href="blog-single.html" className="dropdown-item text-uppercase">Blog-Single <span className="badge bg-secondary">Pro</span></a></li> */}
                      <li className="py-1"><a href="quote.html" className="dropdown-item text-uppercase">quote <span className="badge bg-secondary">Pro</span></a></li>
                      {/* <li className="py-1"><a href="services.html" className="dropdown-item text-uppercase">Services <span className="badge bg-secondary">Pro</span></a></li> */}
                      {/* <li className="py-1"><a href="services-single.html" className="dropdown-item text-uppercase">Service-Single <span className="badge bg-secondary">Pro</span></a></li> */}
                      <li className="py-1"><a href="project.html" className="dropdown-item text-uppercase" onClick={() => handleScroll(projectsRef)}>Project <span className="badge bg-secondary">Pro</span></a></li>
                      {/* <li className="py-1"><a href="project-single.html" className="dropdown-item text-uppercase">Project-Single <span className="badge bg-secondary">Pro</span></a></li> */}
                      {/* <li className="py-1"><a href="pricing.html" className="dropdown-item text-uppercase">Pricing <span className="badge bg-secondary">Pro</span></a></li>
                      <li className="py-1"><a href="contact.html" className="dropdown-item text-uppercase">Contact <span className="badge bg-secondary">Pro</span></a></li> */}
                      <li className="py-1"><a href="team.html" className="dropdown-item text-uppercase">Our Team <span className="badge bg-secondary">Pro</span></a></li>
                      {/* <li className="py-1"><a href="review.html" className="dropdown-item text-uppercase">Reviews <span className="badge bg-secondary">Pro</span></a></li>
                      <li className="py-1"><a href="faq.html" className="dropdown-item text-uppercase">FAQs <span className="badge bg-secondary">Pro</span></a></li> */}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
