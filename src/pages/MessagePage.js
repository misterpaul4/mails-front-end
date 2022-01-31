import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import Header from "../component/Header";
import preference from "../util/preference";

const Message = () => {
  const [message, updateMessage] = useState();

  const currentPath = useLocation().pathname;
  const messageID = currentPath.replace(`/users/${preference.currentUser}/messages/`, '');

  useEffect(() => {
    fetch(`${preference.HOST}/messages/${messageID}`, {
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
          updateMessage(data)
        })
      } else {
        console.log('message not found');
      }
    }).catch(error => {
      console.log('looks like there was a problem ', error);
    })

    return null;
  }, []);


  return(
    <>
      {message ?
          <div>
          <Header />
          <div className="message-bg">
            <div className="message-container">
              <h2>{message.subject}</h2>
              <p>{message.content}</p>
            </div>
          </div>
        </div>
        
        :
        <span>...</span>
    }
    </>

  );
}

export default Message;