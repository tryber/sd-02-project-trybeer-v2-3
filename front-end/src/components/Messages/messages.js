import React from 'react';
import { useHistory } from 'react-router-dom';
import { changeToUTF } from '../Utils/dateUtils';
import AdminSidebar from '../Sidebar/AdminSidebar';
import '../../styles/Messages.css';

// solução retirada de: https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
const sortMessages = (messages) => messages.sort((a, b) => {
  const dateA = new Date(a.messages[0].timestamp);
  const dateB = new Date(b.messages[0].timestamp);
  return dateB - dateA;
});

export default function MessageList(message) {
  const { messages } = message;
  const messagesSorted = messages.length && sortMessages(messages);
  const history = useHistory();
  return (
    <div className="messages-page">
      <AdminSidebar />
      <div className="messages-container">
        <h2>Conversas</h2>
        {messages.length
          ? messagesSorted.map(({ _id: email, messages: msg }) => (
            <button
              type="button"
              key={email}
              onClick={() => history.push(`/admin/messages/${msg[0].id}`)}
            >
              <p>{email}</p>
              <p>{`Última mensagem: ${changeToUTF(msg[0].timestamp)}`}</p>
            </button>
          ))
          : <h2>Nenhuma conversa por aqui.</h2>}
      </div>
    </div>
  );
}
