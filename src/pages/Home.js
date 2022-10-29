import React, { useEffect } from 'react';
import { Cards } from '../components/Cards';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';
import { Profile } from '../components/Profile';
import { WhatIOffer } from '../components/WhatIOffer';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <Profile />
      <WhatIOffer />
      <Cards />
      <Footer />
    </>
  );
}

