import React from 'react';

import img2 from '../assets/a.png';
import img3 from '../assets/b.png';
import img4 from '../assets/c.png';
import img5 from '../assets/d.jpg';
import img7 from '../assets/e.jpg';
import img9 from '../assets/j.png';
import img8 from '../assets/f.png';
import img6 from '../assets/g.png';

const images = [img2, img3, img4, img5, img7, img8, img9, img6];

const Collabs = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className='collabs'>
        Prospective associate
        </h2>
      </div>
      <div className="slider-container">
        <div className="slider-track">
          {images.map((src, index) => (
            <div key={index} className="slider-item">
              <img
                className='def'
                src={src}
                alt={`collab-${index}`}
              />
            </div>
          ))}

          {images.map((src, index) => (
            <div key={`duplicate-${index}`} className="slider-item">
              <img
                className='def'
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
