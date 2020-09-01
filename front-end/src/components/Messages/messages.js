import React from 'react';
import { useHistory } from 'react-router-dom';
import { changeToUTF } from '../Utils/dateUtils';

export default function MessageList(message) {
  const { messages } = message;
  const history = useHistory();
  return (
    <div>
      <div>Conversas</div>
      <div className="messages-container">
        {messages.sort((a, b) => b - a).map(({ _id: email, messages: msg }) => (
          <button
            type="button"
            key={email}
            onClick={() => history.push(`/admin/messages/${msg[0].id}`)}
          >
            <p>{email}</p>
            <p>{`Última mensagem: ${changeToUTF(msg[0].timestamp)}`}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
