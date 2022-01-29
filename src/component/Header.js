import React from 'react';
import {Link} from 'react-router-dom';
import homeIcon from '../img/home-icon.png';
import '../css/header.css';


const Header = () => (
  <header className="App-header flexed-between">
    <Link to='/'>
      <img src={homeIcon} className='home-icon' />
    </Link>

    <div className='mail-icon-container bg-img'>
      <div className='notification-counter'>
        10
      </div>
    </div>
  </header>
)

export default Header