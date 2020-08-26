import React from 'react';
import { changeToUTF } from '../Utils/dateUtils';

export default function AdminChatMessages({ messages }) {
  const { email } = messages[0];

  const messagesArray = messages.map(({ messages }) => messages)

  return (
    messagesArray[0].map(({ fromClient, timestamp, content }) =>
      (
        <>
          <div>{fromClient ? email : 'Loja'}</div>
          <div>{changeToUTF(timestamp)}</div>
          <div>{content}</div>
        </>
      )
    )
  );
}
