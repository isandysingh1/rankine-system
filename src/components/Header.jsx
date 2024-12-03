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
                    <button className="nav-link p-0" aria-current="page" onClick={() => handleScroll(heroRef)}>Home</button>
                  </li>
                  <li className="nav-item px-3">
                    <button className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(aboutRef)}>About</button>
                  </li>
                  <li className="nav-item px-3">
                    <button className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(servicesRef)}>Services</button>
                  </li>
                  <li className="nav-item px-3">
                    <button className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(featureRef)}>Features</button>
                  </li>
                  <li className="nav-item px-3">
                    <button className="nav-link p-0 cursor-pointer" onClick={() => handleScroll(contactRef)}>Contact</button>
                  </li>
                  <li className="nav-item px-3 dropdown">
                    <button className="nav-link p-0 dropdown-toggle text-center" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</button>
                    <ul className="dropdown-menu dropdown-menu-end animate slide mt-3 border-0 shadow">
                      <li className="py-1"><button href="project.html" className="dropdown-item text-uppercase" onClick={() => handleScroll(projectsRef)}>Project <span className="badge bg-secondary">Pro</span></button></li>
                      <li className="py-1"><button href="team.html" className="dropdown-item text-uppercase" >Our Team <span className="badge bg-secondary">Pro</span></button></li>
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
