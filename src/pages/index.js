import React from "react";
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"
import { SEO } from "../components/SEO";
import Navbar from "../components/Navbar";
import Home from './Home';
import Training from './Training';
import About from "./About";
import Contact from "./Contact";
import Course from './Course';
import TrainingDetails from '../components/TrainingDetails';
import SocialMediaWidget from '../components/SocialMediaWidget';

function App() {
  return (
    <>
      <SEO/>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/course/:id' exact element={<Course />} />
          <Route path='/training' exact element={<Training />} >
            <Route path=':id' element={<TrainingDetails />} />
          </Route>
        </Routes>
        <SocialMediaWidget />
      </Router>
    </>
  );
}

export default App;
