import React, {useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Profile from '../Profile';
import WhatIOffer from '../WhatIOffer';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <Profile />
      <WhatIOffer/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
