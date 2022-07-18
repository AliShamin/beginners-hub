import React, {useEffect} from 'react';
import '../../App.css';
import Footer from "../Footer";
import AboutMe from '../AboutMe';
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