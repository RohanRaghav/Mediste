import React, { useEffect, useState } from 'react';

// Define your SVG components
const SvgOne = () => (
  <div>
    <svg width="100" height="100" viewBox="0 0 100 100">
      {/* SVG content for SvgOne */}
    </svg>
  </div>
);

const SvgTwo = () => (
  <div>
    <svg width="100" height="100" viewBox="0 0 100 100">
      {/* SVG content for SvgTwo */}
    </svg>
  </div>
);

const SvgThree = () => (
  <div>
    <svg width="100" height="100" viewBox="0 0 100 100">
      {/* SVG content for SvgThree */}
    </svg>
  </div>
);

const Solution = () => {
  const [rotation, setRotation] = useState(0);
  const [currentSvg, setCurrentSvg] = useState(<SvgOne />);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('solution-component');
      
      // Check if component is null
      if (component) {
        const componentTop = component.offsetTop;
        const componentBottom = componentTop + component.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Check if the component is in view
        if (scrollPosition > componentTop && window.scrollY < componentBottom) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }

        if (isInView) {
          const maxScroll = window.innerHeight;
          const scrollTop = Math.min(scrollPosition - componentTop, maxScroll);
          const scrollFraction = scrollTop / maxScroll;
          const rotationDegree = scrollFraction * 360;

          setRotation(rotationDegree);

          // Update the SVG based on the current rotation degree
          if (rotationDegree < 120) {
            setCurrentSvg(<SvgOne />);
          } else if (rotationDegree < 240) {
            setCurrentSvg(<SvgTwo />);
          } else {
            setCurrentSvg(<SvgThree />);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

  return (
    <div>
      <div id="solution-component" className='cat'>
        <div 
          className='timeLine'
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="circle"></div>
          <div className='arc-segment'></div>
          <div className="svg-container">
            {currentSvg}
          </div>
        </div>
      </div>
      <div className='parasolv'>
        <h1 className='heading-23'>Solutions</h1>
        <p className='parasol'>
          The MediLedger network prioritizes industry alignment, accuracy, privacy, and decentralization. Network member trading partners find a unified view of transaction-related data, automatically enforced accuracy, control over private data, and a decentralized network that allows for direct transacting with no intermediary. MediLedger modules include:
        </p>
      </div>
    </div>
  );
};

export default Solution;
