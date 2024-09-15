import React, { useState } from 'react';

const Contracts = () => {
  const [showMore, setShowMore] = useState({}); // State to track which section is expanded

  // Function to toggle the expanded state for a particular person
  const toggleShowMore = (name) => {
    setShowMore((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  // Data for each person
  const people = [
    {
      name: 'Rohan Rghav',
      bio: "Hi, I'm Rohan Raghav, a tech-savvy full-stack developer with a strong background in both front-end and back-end technologies. I've participated in numerous hackathons, where I've tackled challenging problems and crafted innovative solutions. My passion lies in creating seamless user experiences and optimizing functionality to build impactful tech solutions.",
      linkedin: 'https://www.linkedin.com/in/rohan-raghav-b0b07a24a/',
      image: 'rohan.png'
    },
    {
      name: 'Aryan Tomar',
      bio: 'Hi, I\'m Aryan Tomar, a passionate designer with a keen eye for detail and a love for creativity. I specialize in creating visually compelling designs that communicate effectively and resonate with audiences. My work ranges from branding and illustration to digital and print media, and I\'m always eager to explore new ideas and push the boundaries of design.',
      linkedin: 'https://www.linkedin.com/in/aryantomar28/',
      image: 'aryan.png'
    },
    {
      name: 'Kunal Chopra',
      bio: 'Hi, I\'m Kunal Chopra, a dedicated front-end developer with a strong focus on AI/ML. I’m driven by a passion for crafting seamless user experiences and leveraging technology to create intuitive interfaces. Alongside my technical skills, my communication and leadership abilities have been sharpened through active public speaking and event participation, allowing me to lead teams and projects effectively.',
      linkedin: 'https://www.linkedin.com/in/kunal-chopra-36714924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      image: 'kunal.jpg'
    },
    {
      name: 'Shreya',
      bio: 'Hi, I\'m Shreya, a dedicated content writer with a passion for crafting engaging and impactful stories. I specialize in creating clear, compelling content across various platforms, from blogs and articles to social media and web copy. My goal is to connect with readers through thoughtful, well-researched writing that informs, inspires, and drives action.',
      linkedin: 'https://www.linkedin.com/in/shreya-garg-596a48265/',
      image: 'shreya.jpg'
    }
  ];

  return (
    <div id='member'>
      <div className="padding-section-medium">
        <div className="div-block-87">
          <h2 className="heading-23">The Minds Behind the Solution</h2>
        </div>
        <div className="div-block-88">
          {people.map((person, index) => (
            <div key={index} className="container_with_gradient">
              <div className="div-block-89">
                <p className="paragraph-14">{person.name}</p>
                <p className="gr-15-400">
                  {showMore[person.name] ? person.bio : person.bio.slice(0, 350) + '... '}
                  <button
                    onClick={() => toggleShowMore(person.name)}
                    className="text-blue-500 underline ml-1"
                  >
                    {showMore[person.name] ? 'Show Less' : 'Know More'}
                  </button>
                </p>
              </div>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="learn_more w-inline-block"
              >
                <div>Learn More</div>
                <img
                  src="https://cdn.prod.website-files.com/59f37d05831e85000160b9b4/6584706107d534b8daf758ab_fi-ss-arrow-small-right%201.svg"
                  alt=""
                />
              </a>
              <img
                src={person.image}
                alt={person.name}
                className={`image-${index + 45}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contracts;
