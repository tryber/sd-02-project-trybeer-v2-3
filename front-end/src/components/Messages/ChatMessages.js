import React, { useState, useEffect } from 'react';
import io from 'socket.io';
import { changeToUTF } from '../Utils/dateUtils';
import { postMessage } from '../../services';

const socket = io('http://localhost:4555');

const handleClick = async (message, setInputMessage, token, id) => {
  await postMessage(token, id, message);

  setInputMessage('');
}


export default function ChatMessages({ messages, role, token }) {
  const [inputMessage, setInputMessage] = useState('');
  const { id } = messages[0].messages[0]
  const { email } = messages[0];

  const messagesArray = messages.map(({ messages }) => messages);

  return (
    <>
      {role === 'admin' && <h2>Conversando com {email}</h2>}
      {messagesArray[0].map(({ fromClient, timestamp, content }) =>
        (
          <div key={timestamp}>
            <div>{fromClient ? email : 'Loja'}</div>
            <div>{changeToUTF(timestamp)}</div>
            <div>{content}</div>
          </div>
        )
      )}
      <input onChange={({ target: { value } }) => setInputMessage(value)} />
      <button type='button' value={inputMessage} onClick={() => handleClick(inputMessage, setInputMessage, token, id)}>➢</button>
    </>
  );
}
