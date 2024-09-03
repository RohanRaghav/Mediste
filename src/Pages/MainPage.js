import React from 'react';
import HeroSection from '../Components/HeroSection';
import Events from '../Components/Events';
import About from '../Components/About';
import Cards from '../Components/Cards';
import Contracts from '../Components/Contracts';
import Collabs from '../Components/Collabs';
import Solution from '../Components/Solution';
import Login from '../Components/Login';
import Faq from '../Components/Faq';

const MainPage = () => {
  return (
    <div>
      <HeroSection />
      <Events />
      <About />
      <Cards />
      <Contracts />
      <Collabs />
      <Solution />
      <Login />
      <Faq />
    </div>
  );
};

export default MainPage;
