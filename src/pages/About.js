import React, { useEffect } from 'react';
import { Footer } from "../components/Footer";
import { AboutMe } from '../components/AboutMe';

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <AboutMe />
            <Footer />
        </>
    );
}

