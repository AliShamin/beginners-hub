import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../core/styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropDown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const courseList = [
    { course: "Course101", courseRoute: "/course/101" },
    { course: "Course102", courseRoute: "/course/102" },
    { course: "Course103", courseRoute: "/course/103" },
    { course: "Course104", courseRoute: "/course/101" },
    { course: "Course105", courseRoute: "/course/102" }
  ]

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
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
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
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropDown}
              >
                Courses
              </Link>
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
