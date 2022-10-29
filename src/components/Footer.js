import React from 'react';
import '../core/styles/Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h4>About Us</h4>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Me</Link>
            <Link to='/'>Privacy and Terms</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h4>Offerings</h4>
            <Link to='/'>Online Classes</Link>
            <Link to='/'>Training</Link>
            <Link to='/'>Blogs</Link>
          </div>
        </div>
      </div>
      <section className="footer-rights-wrap">
        <span>© BHub 2022</span>
      </section>
    </div>
  );
}

export default Footer;
