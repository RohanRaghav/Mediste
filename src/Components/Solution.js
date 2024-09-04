import React, { useEffect, useState } from 'react';

// Define your SVG components
const SvgOne = () => (
  <svg fill="#66cccc" width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 14" id="Layer_14"> <path d="M29,15H26V9a1,1,0,0,0-1-1H22V5.89L28.71,8A.92.92,0,0,0,29,8a1,1,0,0,0,.29-2l-13-4a1.14,1.14,0,0,0-.58,0l-13,4A1,1,0,1,0,3.29,8L10,5.89V8H7A1,1,0,0,0,6,9v6H3a1,1,0,0,0-1,1V29a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V16A1,1,0,0,0,29,15ZM20,5.28V12H12V5.28l4-1.23ZM4,17H6V28H4Zm4-1V10h2v3a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V10h2V28H21V21a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1v7H8Zm5,12V22h6v6Zm15,0H26V17h2Z"></path> <path d="M14,9h1v1a1,1,0,0,0,2,0V9h1a1,1,0,0,0,0-2H17V6a1,1,0,0,0-2,0V7H14a1,1,0,0,0,0,2Z"></path> </g> </g></svg>
);

const SvgTwo = () => (
  <div>
   <svg fill="#66cccc" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#66cccc">
   <g id="SVGRepo_bgCarrier" strokeWidth="0">
   </g>
   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
   </g>
   <g id="SVGRepo_iconCarrier"> <g> 
   <g>
   <path d="M252.646,66.22c-2.362-2.363-4.75-4.853-7.06-7.26c-7.423-7.739-15.1-15.741-24.343-22.253 c-13.088-9.221-29.039-14.503-44.916-14.869c-9.382-0.216-18.719,1.238-27.728,4.323c-4.189,1.433-6.423,5.992-4.989,10.181 c1.434,4.189,5.992,6.423,10.18,4.989c7.216-2.47,14.665-3.632,22.167-3.462c12.731,0.294,25.534,4.536,36.049,11.946 c7.979,5.622,14.795,12.726,22.01,20.247c2.365,2.466,4.812,5.016,7.29,7.496c1.566,1.566,3.618,2.349,5.67,2.349 c2.051,0,4.102-0.782,5.668-2.347C255.774,74.427,255.776,69.351,252.646,66.22z">
   </path> </g> </g> <g> <g> 
   <path d="M271.558,85.619c-1.641-1.696-3.273-3.401-4.893-5.116c-1.985-2.099-0.692-0.732-0.003-0.003 c-3.041-3.213-8.113-3.356-11.331-0.313c-3.217,3.042-3.358,8.116-0.316,11.332c1.663,1.758,3.336,3.507,5.018,5.247 c3.264,3.376,8.898,3.167,11.913-0.431C274.545,93.233,274.37,88.528,271.558,85.619z"></path> </g>
    </g> <g> <g> 
    <path d="M464.619,247.961L355.786,139.126L246.951,30.291c-39.803-39.803-104.57-39.803-144.373,0 c-39.794,39.795-39.794,104.555,0.001,144.362l108.839,108.828c0.002,0.002,0.003,0.003,0.005,0.005l108.836,108.846 c19.903,19.896,46.044,29.845,72.183,29.845s52.28-9.949,72.177-29.846C504.422,352.529,504.422,287.763,464.619,247.961z M453.281,380.995c-33.543,33.544-88.132,33.544-121.686,0L228.429,277.818l52.975-52.974c3.131-3.131,3.131-8.207,0-11.337 c-3.131-3.131-8.206-3.131-11.338,0l-52.975,52.974L113.915,163.316c-33.544-33.555-33.544-88.143,0-121.688 c33.552-33.553,88.146-33.553,121.698,0l103.165,103.166l-45.158,45.158c-2.853,2.853-3.114,7.54-0.585,10.687 c2.948,3.667,8.593,3.979,11.922,0.651l45.156-45.156l103.166,103.165C486.834,292.85,486.834,347.443,453.281,380.995z"></path> </g> </g> <g> 
    <g> <path d="M488.604,23.898c-0.013-0.014-0.027-0.026-0.04-0.039c-0.011-0.012-0.019-0.025-0.031-0.036 c-0.032-0.034-0.068-0.064-0.101-0.097c-0.03-0.031-0.056-0.065-0.087-0.096c-31.463-31.44-82.652-31.432-114.11,0.023 c-31.315,31.316-31.437,82.333-0.308,113.807c0.015,0.015,0.028,0.032,0.042,0.047c0.02,0.02,0.042,0.041,0.062,0.062 c0.005,0.005,0.01,0.011,0.015,0.016c0.003,0.003,0.006,0.005,0.009,0.009c0.092,0.095,0.185,0.19,0.282,0.283 c15.227,15.18,35.451,23.539,56.96,23.539c21.557,0,41.823-8.396,57.061-23.64C503.604,122.537,512,102.272,512,80.714 C512,59.272,503.694,39.11,488.604,23.898z M477.02,126.439c-12.211,12.215-28.449,18.943-45.722,18.943 c-14.689,0-28.617-4.881-39.969-13.848c19.474-19.804,50.436-50.135,50.779-50.472c3.163-3.098,3.216-8.174,0.118-11.337 c-3.096-3.162-8.173-3.217-11.337-0.119c-0.344,0.337-31.211,30.577-50.83,50.522c-19.499-25.335-17.659-61.964,5.517-85.14 c23.238-23.239,59.909-25.042,85.254-5.437c-9.774,9.515-21.831,21.77-22.455,22.405c-2.889,2.938-3.046,7.738-0.353,10.856 c3.022,3.499,8.543,3.683,11.785,0.387c0.153-0.155,12.631-12.839,22.4-22.345c8.911,11.332,13.761,25.218,13.761,39.859 C495.967,97.988,489.239,114.226,477.02,126.439z"></path> </g> </g> <g>
       <g> <path d="M283.134,374.252c-15.24-15.246-35.505-23.642-57.063-23.642c-21.448,0-41.616,8.31-56.829,23.409 c-0.042,0.037-0.078,0.081-0.119,0.12c-0.045,0.043-0.093,0.08-0.138,0.124c-31.441,31.465-31.431,82.654,0.022,114.109 c15.715,15.715,36.384,23.576,57.062,23.573c20.537-0.002,41.081-7.761,56.764-23.282c0.012-0.011,0.025-0.02,0.036-0.032 c0.013-0.012,0.032-0.032,0.045-0.045c0.009-0.009,0.017-0.016,0.026-0.025c0.001-0.001,0.001-0.001,0.002-0.002 c0.002-0.002,0.005-0.004,0.008-0.006c0.006-0.006,0.012-0.013,0.018-0.019c0.088-0.084,0.175-0.168,0.283-0.282 c15.171-15.224,23.521-35.439,23.521-56.94C306.772,409.754,298.376,389.489,283.134,374.252z M276.964,471.188l-57.202-57.407 c-3.125-3.137-8.202-3.145-11.337-0.02c-3.136,3.125-3.145,8.202-0.02,11.338l57.175,57.38 c-11.59,8.954-25.543,13.448-39.51,13.446c-16.566-0.001-33.135-6.3-45.723-18.889c-23.285-23.285-25.048-60.055-5.322-85.402 c5.038,5.051,10.35,10.402,10.427,10.479c1.568,1.579,3.629,2.369,5.69,2.369c2.042,0,4.084-0.775,5.647-2.327 c3.143-3.119,3.162-8.195,0.043-11.337c-0.077-0.077-5.411-5.45-10.474-10.526c11.305-8.839,25.135-13.647,39.713-13.647 c17.273,0,33.512,6.728,45.724,18.945c12.216,12.211,18.944,28.449,18.944,45.722 C290.739,445.959,285.884,459.853,276.964,471.188z">
   </path> </g> </g> <g> <g> <g>
    <path d="M137.963,229.071c-0.002-0.002-0.004-0.003-0.005-0.005c-0.002-0.002-0.003-0.003-0.004-0.005 c-0.015-0.015-0.031-0.027-0.046-0.042c-0.021-0.02-0.039-0.044-0.06-0.064c-0.028-0.028-0.055-0.055-0.073-0.074 c-15.246-15.245-35.513-23.641-57.071-23.641s-41.824,8.396-57.062,23.64C8.396,244.119,0,264.384,0,285.942 c0,21.442,8.306,41.604,23.396,56.816c0.042,0.046,0.089,0.086,0.131,0.13c0.041,0.043,0.076,0.089,0.118,0.13 c0.002,0.002,0.004,0.004,0.007,0.006l0.001,0.001c15.728,15.716,36.383,23.572,57.043,23.572 c20.669,0,41.342-7.866,57.077-23.596C169.13,311.646,169.215,260.536,137.963,229.071z M126.436,331.665 c-11.631,11.627-5.856,5.853-0.052,0.049c-23.291,23.232-60.025,24.984-85.355,5.28l47.542-47.447 c3.134-3.128,3.139-8.204,0.012-11.337c-3.128-3.135-8.204-3.139-11.337-0.012l-47.559,47.464 c-8.843-11.306-13.654-25.139-13.654-39.721c0-17.273,6.728-33.512,18.946-45.725c12.211-12.215,28.449-18.943,45.723-18.943 c14.659,0,28.564,4.86,39.889,13.775L98.101,257.47c-2.857,2.849-3.127,7.536-0.601,10.686c2.943,3.672,8.586,3.992,11.92,0.669 l22.46-22.39c19.56,25.32,17.76,61.975-5.395,85.179C132.269,325.83,137.983,320.118,126.436,331.665z"></path>
     <path d="M126.436,331.665c0.017-0.017,0.032-0.035,0.049-0.052c-0.034,0.034-0.067,0.067-0.101,0.101 C126.401,331.697,126.419,331.682,126.436,331.665z"></path> </g> </g> </g> <g> <g> <path d="M357.01,199.896c-14.145,0-25.653,11.509-25.653,25.653c0,14.145,11.509,25.653,25.653,25.653 s25.653-11.509,25.653-25.653C382.664,211.405,371.155,199.896,357.01,199.896z M357.01,235.169c-5.305,0-9.62-4.316-9.62-9.62 c0-5.304,4.315-9.62,9.62-9.62s9.62,4.316,9.62,9.62C366.63,230.853,362.315,235.169,357.01,235.169z"></path> </g> </g> <g> <g> <path d="M357.01,311.061c-14.145,0-25.653,11.509-25.653,25.653c0,14.145,11.509,25.653,25.653,25.653 s25.653-11.509,25.653-25.653C382.664,322.57,371.155,311.061,357.01,311.061z M357.01,346.334c-5.305,0-9.62-4.316-9.62-9.62 c0-5.304,4.315-9.62,9.62-9.62s9.62,4.316,9.62,9.62C366.63,342.018,362.315,346.334,357.01,346.334z"></path> </g> </g> <g> <g> <path d="M305.704,247.996c-18.272,0-33.136,14.865-33.136,33.136s14.864,33.136,33.136,33.136s33.136-14.865,33.136-33.136 S323.975,247.996,305.704,247.996z M305.704,298.234c-9.43,0-17.102-7.672-17.102-17.102c0-9.43,7.673-17.102,17.102-17.102 s17.102,7.673,17.102,17.102C322.806,290.562,315.133,298.234,305.704,298.234z"></path> </g> </g> <g> <g> <path d="M406.18,243.72c-20.04,0-36.342,16.303-36.342,36.342c0,20.04,16.303,36.342,36.342,36.342s36.342-16.303,36.342-36.342 C442.522,260.023,426.219,243.72,406.18,243.72z M406.18,300.372c-11.199,0-20.309-9.11-20.309-20.309s9.11-20.309,20.309-20.309 s20.309,9.11,20.309,20.309S417.378,300.372,406.18,300.372z"></path> </g> </g> </g></svg>
  </div>
);

const SvgThree = () => (
  <div>
   <svg fill="#66cccc" width="64px" height="64px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0">
   </g>
   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
   </g><g id="SVGRepo_iconCarrier"><path d="M2.7695312 9C1.2570955 9 2.9605947e-16 10.236207 0 11.75L0 36.25C0 37.763793 1.2570954 39 2.7695312 39L5 39C5 40.472222 5.4853474 41.957881 6.5019531 43.101562C7.5185588 44.245244 9.0833339 45 11 45C14.301865 45 17 42.301863 17 39L31 39C31 40.472222 31.485347 41.957881 32.501953 43.101562C33.518559 44.245244 35.083334 45 37 45C40.301865 45 43 42.301863 43 39L47.230469 39C48.742905 39 50.001953 37.763793 50.001953 36.25L50.001953 29.25C50.001953 28.148784 49.593823 27.163655 49.21875 26.414062C48.843677 25.664472 48.458984 25.130859 48.458984 25.130859L39.457031 11.207031 A 1.0001 1.0001 0 0 0 39.382812 11.105469C38.992467 10.641481 38.629613 10.154875 38.09375 9.7304688C37.557887 9.3060627 36.812821 9 35.960938 9L2.7695312 9 z M 2.7695312 11L35.960938 11C36.410053 11 36.586925 11.08728 36.851562 11.296875C37.108309 11.50022 37.420214 11.882834 37.822266 12.361328L38.234375 13L32 13 A 1.0001 1.0001 0 0 0 31 14L31 25 A 1.0001 1.0001 0 0 0 32 26L46.167969 26 A 1.0001 1.0001 0 0 0 46.583984 25.914062L46.806641 26.257812 A 1.0001 1.0001 0 0 0 46.835938 26.300781C46.835938 26.300781 47.127759 26.705186 47.429688 27.308594C47.731614 27.912002 48.001953 28.693216 48.001953 29.25L48.001953 36.25C48.001953 36.664207 47.668033 37 47.230469 37L42.802734 37 A 1.0001 1.0001 0 0 0 42.652344 37.011719C41.827024 34.682096 39.604482 33 37 33C35.083334 33 33.518559 33.754756 32.501953 34.898438C31.952451 35.516627 31.570537 36.238109 31.324219 37L16.703125 37 A 1.0001 1.0001 0 0 0 16.648438 37.001953C15.82031 34.677488 13.600782 33 11 33C9.0833339 33 7.5185588 33.754756 6.5019531 34.898438C5.9524513 35.516627 5.5705373 36.238109 5.3242188 37L2.7695312 37C2.3319672 37 2 36.664207 2 36.25L2 11.75C2 11.335793 2.3319672 11 2.7695312 11 z M 33 15L39.519531 15 A 1.0001 1.0001 0 0 0 39.527344 15L45.347656 24L33 24L33 15 z M 14 17L14 21L10 21L10 23L14 23L14 27L16 27L16 23L20 23L20 21L16 21L16 17L14 17 z M 11 35C13.220986 35 15 36.779015 15 39C15 41.220985 13.220986 43 11 43C9.5833342 43 8.6481071 42.504756 7.9980469 41.773438C7.3479866 41.042119 7 40.027778 7 39C7 37.972222 7.3479866 36.957881 7.9980469 36.226562C8.6481071 35.495244 9.5833342 35 11 35 z M 37 35C39.220986 35 41 36.779015 41 39C41 41.220985 39.220986 43 37 43C35.583334 43 34.648107 42.504756 33.998047 41.773438C33.347987 41.042119 33 40.027778 33 39C33 37.972222 33.347987 36.957881 33.998047 36.226562C34.648107 35.495244 35.583334 35 37 35 z"></path>
   </g></svg>
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
          const rotationDegree = 360 - (scrollFraction * 360); // Rotate in anticlockwise direction
    
          setRotation(rotationDegree);
    
          // Update the SVG based on the current rotation degree
          if (rotationDegree > 240) { 
            setCurrentSvg(<SvgOne />);
          } else if (rotationDegree > 120) {
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
        Our solution is more than just a management tool—it's a proactive approach to solving some of the most pressing challenges in healthcare supply chain management. By combining the power of AI. we ensure that the Government of NCT of Delhi can efficiently manage its drug inventory, minimize waste, and, most importantly, provide timely access to essential medicines for all.
        </p>
      </div>
    </div>
  );
};

export default Solution;
