import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../core/styles/Navbar.css';
import { getCourseList } from '../core/services/CourseService';

const STYLES = [
  "navbar",
  "navbar position-sticky nav-shadow-and-color",
  "navbar nav-shadow-and-color position-fixed",
];

export const Navbar = () => {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [navBarStyle, setNavbarStyle] = useState(STYLES[0])
  const [dropDown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const courseList = getCourseList();
  const [hideNavBar, setHideNavBar] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    /**
     * We want navbar css to position sticky for all the route except for home page
     */
    if (window.location.hash == '#/') {
      if (window.scrollY > 600) {
        setNavbarStyle(STYLES[2]);
      } else {
        setNavbarStyle(STYLES[0]);
      }
    } else {
      setNavbarStyle(STYLES[1]);
    }
  };

  const showDropdown = () => {
    setDropdown(true);
  }

  const hideDropDown = () => {
    setDropdown(false);
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav className={navBarStyle}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            beg<span>;</span>nnershub
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fas fa-times' : 'fa fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/courses'
                className='nav-links'
                onClick={closeMobileMenu}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropDown}
              >
                Courses
              </Link>
              {/* {dropDown && <div className="dropdown-container"
                onMouseLeave={hideDropDown}
                onMouseEnter={showDropdown}
              >
                {courseList.map((e) =>
                  <Link to={e.courseRoute}
                    style={{ "color": "#242424", "textDecoration": "none" }}
                  >
                    <div className="dropdown-container-item">
                      <div>
                        <h3>{e.courseId}</h3>
                        <span>{e.courseTitle}</span>
                      </div>
                    </div>
                  </Link>
                )
                }
              </div>
              } */}
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/training'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Training
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
