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
        {messages.map(({ _id: id, messages: msg }) => (
          <button
            type="button"
            key={id}
            onClick={() => history.push(`/admin/messages/${msg[0].id}`)}
          >
            <p>{id}</p>
            <p>{`Última mensagem: ${changeToUTF(msg[0].timestamp)}`}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
