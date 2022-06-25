import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Course from './components/pages/Course';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/training' exact element={<Services />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/course/:id' exact element={<Course />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
