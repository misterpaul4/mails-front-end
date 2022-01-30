import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import './css/inbox.css';
import notesIcon from './img/notes.png';
import preference from './util/preference';
import userAvatar from './img/avatar.png';
import checkIcon from './img/checkIcon.png';

const Inbox = () => {
  // const [messages, updateMessages] = useState([])

  // useEffect(() => {
  //   fetch(`${preference.HOST}/users/${preference.currentUser}/received_messages`, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     }
  //   }).then(response => {
  //     if (response.status.toString() === '200') {
  //       response.json().then(data => {
  //         // action on data
  //         updateMessages(data)
  //       })
  //     } else {
  //       console.log('user not found');
  //     }
  //   }).catch(error => {
  //     console.log('looks like there was a problem ', error);
  //   })

  //   return null;
  // }, []);
  const messages = [
    {
      id: 1,
      subject: 'Aliqua laborum voluptate mollit ullamco tempor ut.',
      receiver: 'john',
      updated_at: '2022-01-29T02:22:51.633Z',
    },
    {
      id: 2,
      subject: 'Occaecat quis officia sunt nulla sunt aute ipsum.',
      receiver: 'sarah',
      updated_at: '2022-01-29T02:22:51.633Z',
    },
    {
      id: 3,
      subject: 'Nisi amet est occaecat mollit deserunt mollit ut ad qui aute laboris.',
      receiver: 'helen',
      updated_at: '2022-01-29T02:22:51.633Z',
    },
    {
      id: 4,
      subject: 'Dolor enim amet velit minim veniam non laborum et dolor pariatur.',
      receiver: 'sandra',
      updated_at: '2022-01-29T02:22:51.633Z',
    },
    {
      id: 5,
      subject: 'Culpa Lorem dolor do minim.',
      receiver: 'linda',
      updated_at: '2022-01-29T02:22:51.633Z',
    }
  ]

  const Attach = m => (
    <li key={m.id} className='flexed-between'>
      <div>
        <h2 className='message-title'>{m.subject}</h2>
        <span className='receiver'>{m.receiver}</span> 
      </div>

      <img src={userAvatar} alt='user icon' className='user-icon' />
    </li>
  );

  return (
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
            {/* messages to self */}
            <li className='flexed-between'>
              <h2 className='message-title'>NOTE TO SELF</h2>
              <img src={notesIcon} className='inboxIcons' alt='notes icon' />
            </li>
            {messages.map(Attach)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Inbox;