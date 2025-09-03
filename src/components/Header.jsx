import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Reset scroll position on page load/refresh
    window.scrollTo(0, 0);
    
    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__nav">
        {/* Brand/Logo */}
        <div className="header__brand">
          <Link 
            to="/" 
            className="header__brand-link" 
            onClick={closeMenu}
          >
            Daniela Porta
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}>
          <li className="header__menu-item">
            <Link 
              to="/" 
              className={`header__menu-link ${location.pathname === '/' ? 'header__menu-link--active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="header__menu-item">
            <Link 
              to="/servicios" 
              className={`header__menu-link ${location.pathname === '/servicios' ? 'header__menu-link--active' : ''}`}
              onClick={closeMenu}
            >
              Servicios
            </Link>
          </li>
          <li className="header__menu-item">
            <Link 
              to="/manifesto" 
              className={`header__menu-link ${location.pathname === '/manifesto' ? 'header__menu-link--active' : ''}`}
              onClick={closeMenu}
            >
              Manifesto
            </Link>
          </li>
          <li className="header__menu-item">
            <Link 
              to="/sobre-mi" 
              className={`header__menu-link ${location.pathname === '/sobre-mi' ? 'header__menu-link--active' : ''}`}
              onClick={closeMenu}
            >
              Sobre mi
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className={`header__toggle ${isMenuOpen ? 'header__toggle--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
          <span className="header__toggle-line"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;