import React, {useEffect} from 'react';
import '../App.css';
import Footer from "../components/Footer";
import AboutMe from '../components/AboutMe';
function About(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>
        <AboutMe/>
        <Footer/>
        </>
    );
}

export default About;