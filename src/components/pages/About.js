import React, {useEffect} from 'react';
import '../../App.css';
import Profile from "../Profile";
import Footer from "../Footer";

function About(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <Profile/>
        <Footer/>
        </>
    );
}

export default About;