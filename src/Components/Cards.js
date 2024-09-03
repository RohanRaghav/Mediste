import React from 'react';

const CardRow = () => {
  const cards = [
    {
      image: 'https://via.placeholder.com/150',
      description: 'This is the description for card 1.'
    },
    {
      image: 'https://via.placeholder.com/150',
      description: 'This is the description for card 2.'
    },
    {
      image: 'https://via.placeholder.com/150',
      description: 'This is the description for card 3.'
    }
  ];

  return (
    <>
      <div className="card-row">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="div-block-83">
        <div className="div-block-85">
          <div className="div-block-84">
            <img
              src="https://via.placeholder.com/150"
              loading="lazy"
              width="176.5"
              alt=""
            />
            <p className="gr-15-400">
              Baptist Health Partners With MediLedger to Ensure Correct Pricing via Contract
              Management
            </p>
          </div>
          <a
            href="https://via.placeholder.com/150"
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
              src="https://via.placeholder.com/150"
              loading="lazy"
              width="176.5"
              alt=""
            />
            <p className="gr-15-400">
              AmerisourceBergen Partners with Chronicled to Optimize Pharmaceutical Chargeback
              Accuracy Using Blockchain-Powered Technology.
            </p>
          </div>
          <a
            href="/"
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
              src="https://via.placeholder.com/150"
              width="94.5"
              alt=""
            />
            <p className="gr-15-400">
              Cardinal Health Partners with Chronicled to Enhance Pharmaceutical Chargeback Accuracy
              for Customers through Blockchain-Powered Technology.
            </p>
          </div>
          <a
            href="/"
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
