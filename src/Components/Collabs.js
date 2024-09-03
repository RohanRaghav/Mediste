import React from 'react';

import img2 from '../assets/collab1.png';
import img3 from '../assets/collab3.jpeg';
import img4 from '../assets/collab4.png';
import img5 from '../assets/collab5.jpg';
import img7 from '../assets/collab2.jpg';
import img9 from '../assets/collab7.jpg';
import img8 from '../assets/collab8.png';
import img6 from '../assets/collab6.png';

const images = [img2, img3, img4, img5, img7, img8, img9, img6];

const Collabs = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className='collabs'>
          Collaboration Clubs and Partners
        </h2>
      </div>
      <div className="slider-container">
        <div className="slider-track">
          {images.map((src, index) => (
            <div key={index} className="slider-item">
              <img
                className='abc'
                src={src}
                alt={`collab-${index}`}
              />
            </div>
          ))}

          {images.map((src, index) => (
            <div key={`duplicate-${index}`} className="slider-item">
              <img
                className='abc'
                src={src}
                alt={`collab-duplicate-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collabs;
