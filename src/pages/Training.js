import React, { useEffect } from 'react';
import { Footer } from "../components/Footer";
import { TrainingSection } from '../components/TrainingSection';

export default function Training() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <TrainingSection />
      <Footer />
    </>);
}
