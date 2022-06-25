import React from 'react';
import '../core/styles/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contacts</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms And Conditions</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <div>
              <i className="fa fa-brands fa-instagram" style={{ "color": "white" }}></i>
              <Link to='/'>Instagram</Link>
            </div>
            <div>
              <i className="fa fa-brands fa-linkedin" style={{ "color": "white" }}></i>
              <Link to='/'>LinkedIn</Link>
            </div>
            <div>
              <i className="fa fa-brands fa-youtube" style={{ "color": "white" }}></i>
              <Link to='/'>Youtube</Link>
            </div>
            <div>
              <i className="fa fa-brands fa-twitter" style={{ "color": "white" }}></i>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Beginners Hub
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>BgHub © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
