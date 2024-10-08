import React from 'react';

const CardRow = () => {
  const cards = [
    {
      image: 'bs.png',
      head:'Reduce Drug Shortages',
      description: ' Automated processes ensure that stock levels are maintained, reducing the likelihood of shortages.'
    },
    {
      image: 'eff.png',
      head:'Increase Efficiency',
      description: 'Streamlined operations free up valuable time for healthcare professionals, allowing them to focus more on patient care.'
    },
    {
      image: 'dk.png',
      head:'Improve Transparency',
      description: 'Our solution provides a clear, real-time view of the entire supply chain, ensuring that every step is accountable and transparent.'
    }
  ];

  return (
    <>
      <div className="card-row" id='sol'>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
            <h1 style={{color:'white'}}>{card.head}</h1>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="div-block-83">
        <div className="div-block-85">
          <div className="div-block-84">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 442.3 64.4">
<path className="st0" d="M53.6,18.3l-20,26.7h-2.3L11.7,18.2V63H0.1V1.5h13.4l19.2,26.5L51.9,1.5h13.3V63H53.6V18.3z"/>
<path className="st0" d="M122,62.9H76c0-20.5,0-41,0-61.5H122v11.3H87.5v14.2h33.3v10.8H87.5v13.9H122V62.9z"/>
<path className="st0" d="M185.2,31.6c0.3,15.6-9.2,31.3-30.8,31.3c-7.6,0-16.6,0-24.2,0V1.4c7.6,0,16.6,0,24.2,0
	C175.5,1.4,184.9,16.4,185.2,31.6z M141.7,51.7h12.7c14,0,19.5-10.2,19.2-20.2c-0.3-9.6-5.9-19.2-19.2-19.2h-12.7V51.7z"/>
<path className="st0" d="M193.9,62.9V1.4h11.5v61.5H193.9z"/>
<path className="st0" d="M235.1,11.9h-19.5V1.4c17.8,0,32.8,0,50.6,0v10.5h-19.5v51h-11.6V11.9z"/>
<path className="st0" d="M319.1,62.9h-46.1c0-20.5,0-41,0-61.5h46.1v11.3h-34.5v14.2h33.3v10.8h-33.3v13.9h34.5V62.9z"/>
<path className="st0" d="M382.3,55.2c-6.3,6.2-14.5,9.1-23.4,9.1c-22.9,0-32.5-15.7-32.6-31.7C326.3,16.5,336.7,0.1,359,0.1
	c8.3,0,16.3,3.2,22.6,9.4l-7.7,7.5c-4-4-9.5-5.8-14.9-5.8c-14.9,0-21.3,11.1-21.2,21.4c0.1,10.2,6,20.8,21.2,20.8
	c5.4,0,11.4-2.2,15.5-6.2L382.3,55.2z"/>
<path className="st0" d="M430.8,63V38.1h-30.2V63H389V1.5h11.6v25.9h30.2V1.5h11.5V63H430.8z"/>
</svg>

            <p className="gr-15-400">
            Meditech - Offers comprehensive electronic health record (EHR) systems, including inventory management features.
            </p>
          </div>
          <a
            href=" https://www.meditech.com"
            className="learn_more w-inline-block"
            previewlistener="true"
          >
            <div>Learn More</div>
            <img
              src="https://cdn.prod.website-files.com/59f37d05831e85000160b9b4/6584706107d534b8daf758ab_fi-ss-arrow-small-right%201.svg"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
        <div id="w-node-_8be67c48-5415-56c1-73aa-f9f37dfd81c0-2174ad59" className="div-block-86"></div>
        <div className="div-block-85">
          <div className="div-block-84">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/12/Epic-Systems-Logo.png"
              loading="lazy"
              width="176.5"
              alt=""
            />
            <p className="gr-15-400">
            Epic Systems - Provides EHR solutions with integrated inventory and supply chain management.
            </p>
          </div>
          <a
            href=" https://www.epic.com"
            className="learn_more w-inline-block"
            previewlistener="true"
          >
            <div>Learn More</div>
            <img
              src="https://cdn.prod.website-files.com/59f37d05831e85000160b9b4/6584706107d534b8daf758ab_fi-ss-arrow-small-right%201.svg"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
        <div id="w-node-_7f9b6cac-24f9-65a6-ca24-9e7bac473c28-2174ad59" className="div-block-86"></div>
        <div className="div-block-85">
          <div className="div-block-84">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.wDjnBt29TwwsVSJAh4f0jwHaD4&pid=Api&P=0&h=220"
              width="176.5"
              alt=""
            />
            <p className="gr-15-400">
            Cerner - Offers health information technology solutions, including resource management systems.
            </p>
          </div>
          <a
            href="https://www.cerner.com "
            className="learn_more w-inline-block"
            previewlistener="true"
          >
            <div>Learn More</div>
            <img
              src="https://cdn.prod.website-files.com/59f37d05831e85000160b9b4/6584706107d534b8daf758ab_fi-ss-arrow-small-right%201.svg"
              loading="lazy"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default CardRow;
