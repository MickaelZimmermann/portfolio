import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : '')}>Présentation</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'is-active' : '')}>Projets</NavLink></li>
        <li><NavLink to="/resources" className={({ isActive }) => (isActive ? 'is-active' : '')}>Ressources</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'is-active' : '')}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
