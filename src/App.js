import './core/styles/App.css';
import './core/styles/Common.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { TrainingDetails } from './components/TrainingDetails';
import { SocialMediaWidget } from './components/SocialMediaWidget';
import { ViewCourseContent } from './components/ViewCourseContent';
import { Navbar } from "./components/Navbar";
import Training from './pages/Training';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Home from './pages/Home';

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
          <Route path='/courses' exact element={<Courses />} />
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
