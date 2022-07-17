import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Profile from '../components/Profile';

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
