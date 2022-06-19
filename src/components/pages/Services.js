import React, {useEffect} from 'react';
import '../../App.css';
import Footer from "../Footer";
import ServiceOfferings from '../ServiceOffering';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ServiceOfferings />
      <Footer />
    </>);
}
