import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import homeIcon from '../img/home-icon.png';
import NotifCounter from './NotificationCounter';
import '../css/header.css';

const Header = () => {
  // test users already in the database
  const testUsers = [
    'paul',
    'favour'
  ];


  const [user] = useState(testUsers[1]);

  return (<header className="App-header flexed-between">
    <Link to='/'>
      <img src={homeIcon} className='home-icon' />
    </Link>

    <div className='greet-user'>Hello, <span className='user'>{user}</span></div>

    <div className='mail-icon-container bg-img'>
      <div className='notification-counter'>
        <NotifCounter currentUser={user} />
      </div>
    </div>
  </header>);
};

export default Header