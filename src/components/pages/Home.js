import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Profile from '../Profile';

function Home() {
  return (
    <>
      <HeroSection />
      <Profile />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
