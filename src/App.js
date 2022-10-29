import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Training from './pages/Training';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Course from './pages/Course';
import TrainingDetails from './components/TrainingDetails';
import SocialMediaWidget from './components/SocialMediaWidget';
import ViewCourseContent from './components/ViewCourseContent';
import Courses from './pages/Courses';

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
