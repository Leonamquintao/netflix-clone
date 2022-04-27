import React from 'react';
import './Header.css';

interface HeaderProps {
  showHeaderGround: boolean;
}

const Header: React.FC<HeaderProps> = ({ showHeaderGround }) => {
  const logo = require('../assets/logo.png');
  const userImage = require('../assets/user-image.png');

  return (
    <header className={showHeaderGround ? 'header' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={userImage} alt="User" />
        </a>
      </div>
    </header>
  );
};

export default Header;
