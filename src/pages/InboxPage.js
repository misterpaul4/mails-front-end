import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../css/inbox.css';
import preference from '../util/preference';
import userAvatar from '../img/avatar.png';
import checkIcon from '../img/checkIcon.png';
import dot from '../img/dot.png';

const Inbox = () => {
  const [messages, updateMessages] = useState([]);

  useEffect(() => {
    fetch(`${preference.HOST}/users/${preference.currentUser}/inbox`, {
      method: "GET",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    }).then(response => {
      if (response.status.toString() === '200') {
        response.json().then(data => {
          // action on data
          updateMessages(data)
        })
      } else {
        console.log('user not found');
      }
    }).catch(error => {
      console.log('looks like there was a problem ', error);
    })

    return null;
  }, []);

  const Attach = m => (
    <Link to={`/users/${preference.currentUser}/messages/${m.id}`} key={m.id}>
      <li key={m.id} className='flexed-between'>
      <div className='notTextBg'>
        <img src={dot} alt='notification dot' className={m.read ? 'notifDot hide' : 'notifDot reveal'} />
        <div>
          <h2 className='message-title'>{m.subject}</h2>
          <span className='receiver'>{m.creator.username}</span> 
        </div>
      </div>

        <img src={userAvatar} alt='user icon' className='user-icon' />
      </li>
    </Link>
  );

  return (
    <>
    {
      messages ?
      <div className='inboxPage'>
      <Header />
      <div className='message-bg'>
        <div className='message-container'>
          {/* quick actions */}
          <div className='flexed-between'>
            <div>Notifications</div>
            <div className='d-flexed'><img src={checkIcon} alt='icon' className='check-icon' /><div>Mark all as read</div></div>
          </div>

          <ul className='inbox-list'>
            {messages.map(Attach)}
          </ul>
        </div>
      </div>
    </div>
    :
    <span>...</span>
    }
    </>
  );
}

export default Inbox;
