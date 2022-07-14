import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../core/styles/Navbar.css';

const STYLES = ["navbar", "navbar position-sticky"];

function Navbar() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [navBarStyle, setNavbarStyle] = useState(STYLES[0])
  const [button, setButton] = useState(true);
  const [dropDown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const courseList = [
    { course: "Course 101", courseRoute: "/course/101" },
    { course: "Course 102", courseRoute: "/course/102" },
    { course: "Course 103", courseRoute: "/course/103" },
    { course: "Course 104", courseRoute: "/course/101" },
    { course: "Course 105", courseRoute: "/course/102" }
  ]

  const handleScroll = () => {
    /**
     * We want navbar css to position sticky for all the route except for home page
     */
    if (window.location.pathname == '/') {
      if (window.scrollY > 590) {
        setNavbarStyle(STYLES[1]);
      } else {
        setNavbarStyle(STYLES[0]);
      }
    }else{
      setNavbarStyle(STYLES[1]);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const showDropdown = () => {
    setDropdown(true);
  }

  const hideDropDown = () => {
    setDropdown(false);
  }

  useEffect(() => {
    showButton();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={navBarStyle}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            beg<span>;</span>nnershub
          </Link>
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
              <a
                className='nav-links'
                onClick={closeMobileMenu}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropDown}
              >
                Courses
              </a>
              {dropDown && <div className="dropdown-container"
                onMouseLeave={hideDropDown}
                onMouseEnter={showDropdown}
              >
                {courseList.map((e) =>
                  <div>
                    <Link to={e.courseRoute}
                      style={{ "color": "#242424", "textDecoration": "none" }}
                    >
                      {e.course}
                    </Link>
                  </div>
                )
                }
              </div>
              }
            </li>
            <li className='nav-item'>
              <Link
                to='/training'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Training
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
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
