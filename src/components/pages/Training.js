import React, {useEffect} from 'react';
import '../../App.css';
import Footer from "../Footer";
import TrainingSection from '../TrainingSection';

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
