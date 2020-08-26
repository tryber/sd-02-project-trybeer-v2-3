import React from 'react';
import { useHistory } from 'react-router-dom';
import { changeToUTF } from '../Utils/dateUtils';

export default function MessageList(message) {
  const { messages } = message;
  console.log(message)
  const history = useHistory();
  return (
    <div>
      <div>Conversas</div>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message._id} onClick={() => history.push(`/admin/messages/${message.messages[0].id}`)}>
            <p>{message._id}</p>
            <p>Última mensagem: {changeToUTF(message.messages[0].timestamp)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
