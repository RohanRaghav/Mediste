import React from 'react';

const DashNaav = () => {
  const storedUsername = localStorage.getItem('username');

  return (
    <div>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-content">
          <img src="logo1.jpg" alt="Logo" className="navbar-logo" />
          </div>
          <div className='nav-link' ><a className="nav-link" href='mediste pdf.pdf'>Rates</a></div>
          <div className="navbar-links">
            <div  className="nav-link" style={{cursor:"pointer", fontSize:'1.5rem'}}>
            <svg width="25px" height="25px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M16,31C7.729,31,1,24.271,1,16S7.729,1,16,1s15,6.729,15,15S24.271,31,16,31z M16,2C8.28,2,2,8.28,2,16      s6.28,14,14,14s14-6.28,14-14S23.72,2,16,2z" fill="white"/>
<path d="M23.64,20.713l-4.762-1.652l-0.323-2.584c-0.215,0.307-0.523,0.546-0.924,0.671l0.293,2.345         c0.023,0.189,0.152,0.349,0.332,0.41l5.055,1.756c0.9,0.314,1.689,1.427,1.689,2.381v-0.007c0,0.276,0.224,0.5,0.5,0.5         c0.275,0,0.499-0.223,0.5-0.498C25.997,22.656,24.94,21.168,23.64,20.713z" fill="white"/>
<path d="M6.5,24.532c-0.276,0-0.5-0.224-0.5-0.5v0.007c0-1.379,1.059-2.871,2.359-3.326l4.762-1.641         l0.012-0.28c0.034-0.274,0.289-0.465,0.559-0.434c0.273,0.034,0.468,0.284,0.434,0.559l-0.051,0.589         c-0.023,0.189-0.153,0.348-0.333,0.41l-5.054,1.742C7.789,21.973,7,23.086,7,24.039v-0.007C7,24.309,6.776,24.532,6.5,24.532         z" fill="white"/>
<path d="M16,18.039c-2.779,0-4.192-1.844-4.201-6.469c-0.002-1.174,0.123-2.363,1.227-3.469          C13.729,7.396,14.729,7.039,16,7.039s2.271,0.357,2.975,1.063c1.104,1.105,1.229,2.295,1.227,3.469          C20.192,16.195,18.779,18.039,16,18.039z M16,8.039c-1.009,0-1.75,0.252-2.267,0.769c-0.632,0.633-0.938,1.2-0.935,2.761          c0.008,4.018,1.055,5.471,3.201,5.471s3.193-1.453,3.201-5.471c0.003-1.561-0.303-2.128-0.935-2.761          C17.75,8.291,17.009,8.039,16,8.039z" fill="white"/>
</svg>
&nbsp; {storedUsername}</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashNaav;
