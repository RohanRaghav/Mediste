import React from 'react';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-content">
          <img src="logo1.jpg" alt="Logo" className="navbar-logo" />
        </div>
        <div className="navbar-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#sol" className="nav-link">Solution</a>
          <a href="#member" className="nav-link">Members</a>
          <a href="#faq" className="nav-link">Faqs</a>
          <a href="#contact" className="nav-link">Contact us</a>
        <a href="#login" style={{textDecoration:'none'}}>  <button className="demo-button">
              Login Now
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button></a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
