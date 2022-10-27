import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Training from './components/pages/Training';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blogs from './components/pages/Blogs';
import Blog from './components/pages/Blog';
import Course from './components/pages/Course';
import TrainingDetails from './components/TrainingDetails';
import SocialMediaWidget from './components/SocialMediaWidget';
import ViewCourseContent from './components/ViewCourseContent';
import Courses from './components/pages/Courses';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/blogs' exact element={<Blogs />} />
          <Route path='/blog/:id' exact element={<Blog />} />
          <Route path='/courses' exact element={<Courses/>}/>
          <Route path='/course/:id' exact element={<Course />} />
          <Route path='/view/:id' exact element={<ViewCourseContent />} />
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
