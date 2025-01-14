import { useState, useEffect, useCallback } from 'react';
import { FaBars } from 'react-icons/fa';
import './index.css';

const Topbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = useCallback(() => {
    setShowMenu(!showMenu);
  }, [scrollPosition]);


  return (
    <div className={`topbar ${scrollPosition > 0 ? 'scroll' : ''}`}>
      <div className='topbar-container'>
        <div className="logo-container">
        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.605 8.05002C20.605 7.61502 20.75 7.18002 20.75 6.60002C20.75 3.41002 18.14 0.800018 14.95 0.800018C12.63 0.800018 10.745 2.10502 9.73001 3.99002C9.44001 3.84502 8.86001 3.70002 8.42501 3.70002C6.39501 3.70002 4.80001 5.29502 4.80001 7.32502C4.80001 7.61502 4.80001 7.90502 4.94501 8.05002C2.33501 8.48502 0.450012 10.515 0.450012 13.125C0.450012 15.88 2.77001 18.2 5.52501 18.2H20.025C22.78 18.2 25.1 15.88 25.1 13.125C25.1 10.515 23.215 8.34002 20.605 8.05002Z" fill="white"/>
        </svg>

          <h1 className="name">CLOUDBUDGET</h1>
        </div>

        <div className={`menu ${showMenu ? 'show' : ''}`}>
          <a className="link" href="#">OVERVIEW</a>
          <a className="link" href="#features">FEATURES</a>
          <a className="link" href="#technology">TECHNOLOGY</a>
          <a className="link" href="#contact">CONTACT</a>
          <a className="link" href="#">SIGN UP</a>
        </div>

        <div className="burger-menu" onClick={handleMenuClick}>
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
