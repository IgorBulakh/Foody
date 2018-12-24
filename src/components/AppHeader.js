import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import appLogo from '../logo.png';
import avatar from '../user.png';

const itemNav = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo img={appLogo} width={100} heigth={100} />
    </div>
    <div className="menu">
      <Navigation items={itemNav} />
    </div>
    <div className="Header__usermenu">
      <UserMenu avatar={avatar} name="client" />
    </div>
  </header>
);

export default AppHeader;
