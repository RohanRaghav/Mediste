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
    },
    {
      name: 'Vishal Sarmah',
      bio: 'Hi, I\'m Vishal Sarmah, a dedicated machine learning professional with a strong focus on precision and innovation. I specialize in crafting advanced models that address complex challenges and drive meaningful insights. My expertise spans data preprocessing, model development, and deploying AI solutions across diverse applications. I am committed to exploring cutting-edge algorithms and continuously pushing the boundaries of machine learning to deliver impactful results.',
      linkedin: 'https://www.linkedin.com/in/developer-vishal-sarmah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Gourangi Madhukoilya',
      bio: 'I\'m Gourangi Madhukoilya, a machine learning enthusiast with a strong focus on innovation and precision. I specialize in developing advanced models that solve complex problems and provide actionable insights. Alongside my expertise in machine learning, I have a solid foundation in frontend development, enabling me to integrate AI solutions seamlessly with user interfaces. I am dedicated to pushing the boundaries of machine learning and continually exploring new techniques to enhance impact.',
      linkedin: 'https://www.linkedin.com/in/gourangi-madhukoilya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      image: 'https://via.placeholder.com/150'
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
