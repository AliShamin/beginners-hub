import React, {useEffect} from 'react';
import {Footer} from "../components/Footer";
import {ContactInfo} from '../components/ContactInfo';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (<>
        <ContactInfo/>
        <Footer/>
    </>);
}

