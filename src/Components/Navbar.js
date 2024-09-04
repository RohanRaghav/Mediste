import React from 'react';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-content">
          <img src="logo1.jpg" alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-links">
          <a href="#home" className="nav-link">Solution</a>
          <a href="#about" className="nav-link">Members</a>
          <a href="#contact" className="nav-link">Collaboration</a>
          <a href="#contact" className="nav-link">Data Security</a>
          <a href="#contact" className="nav-link">Faqs</a>
          <a href="#contact" className="nav-link">Contact us</a>
          <button className="demo-button">
              Login Now
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
