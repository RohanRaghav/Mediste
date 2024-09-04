import React from 'react';
import HeroSection from '../Components/HeroSection';
import About from '../Components/About';
import Cards from '../Components/Cards';
import Contracts from '../Components/Contracts';
import Collabs from '../Components/Collabs';
import Solution from '../Components/Solution';
import Login from '../Components/Login';
import Faq from '../Components/Faq';
import Navbar from '../Components/Navbar';

const MainPage = () => {
  return (
    <div>
       <Navbar />
      <HeroSection />
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
