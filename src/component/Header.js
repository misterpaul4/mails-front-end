import React from 'react';
import {Link} from 'react-router-dom';
import homeIcon from '../img/home-icon.png';
import NotifCounter from './NotificationCounter';
import global from '../util/global';
import preference from '../util/preference';
import '../css/header.css';

const Header = () => {
  return (
  <header className="App-header flexed-between">
    <Link to='/'>
      <img src={homeIcon} className='home-icon' />
    </Link>

    <div className='greet-user'>Hello, <span className='user'>{preference.currentUser}</span></div>

    <Link to={global.inboxPath} className='mail-icon-container bg-img'>
      <div className='notification-counter'>
        <NotifCounter />
      </div>
    </Link>
  </header>);
};

export default Header