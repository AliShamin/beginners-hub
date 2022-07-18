import React, {useEffect} from 'react';
import Footer from "../Footer";
import ContactInfo from '../ContactInfo';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (<>
        <ContactInfo/>
        <Footer/>
    </>);
}

export default Contact;