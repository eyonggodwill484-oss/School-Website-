import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <div className={`menu-overlay ${mobileMenu ? 'active' : ''}`} onClick={toggleMenu}></div>
      <nav className={`navbar ${sticky ? 'dark-nav' : ''} ${mobileMenu ? 'menu-open' : ''}`}>
        <img src={logo} alt="Edusity Logo" className="logo" />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li><Link to='programs' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Programs</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
        <div className='menu-icon' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  )
}

export default Navbar;