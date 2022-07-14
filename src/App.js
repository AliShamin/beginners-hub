import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Training from './components/pages/Training';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Course from './components/pages/Course';
import TrainingDetails from './components/TrainingDetails';

function App() {
  return (
    <>
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
      </Router>
    </>
  );
}

export default App;
