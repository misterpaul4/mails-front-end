import React, { useState, useEffect } from "react";
import preference from "../util/preference";

const NotifCounter = () => {
  const [notifications, updateNotifications] = useState('.');
 
  useEffect(() => {
    fetch(`${preference.HOST}/users/${preference.currentUser}/unread_messages`, {
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
          updateNotifications(data)
        })
      } else {
        console.log('user not found');
      }
    }).catch(error => {
      console.log('looks like there was a problem ', error);
    })

    return null;
  }, []);

  return(
    <>
      {notifications}
    </>
  );
}

export default NotifCounter;
