import React from 'react';
import './Header.css';
import RealMeLogo from '../../assets/images/RealMeLogo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={RealMeLogo} alt="RealMe Logo" className="header-logo" />
    </header>
  );
};

export default Header;