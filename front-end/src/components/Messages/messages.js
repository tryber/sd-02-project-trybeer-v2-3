import React from 'react';
import { useHistory } from 'react-router-dom';

const addZero = (value, comparison, sum) => {
  return value + sum < comparison ? `0${value + sum}` : String.value;
}

const changeToUTF = (date) => {
  const createdDate = new Date(date);
  const day = addZero(createdDate.getDay(), 10, 0);
  const month = addZero(createdDate.getUTCMonth(), 10, 1);
  const dateAdjusted = `${day}/${month}/${new Date(date).getUTCFullYear()}`
  return dateAdjusted;
}

export default function MessageList(message) {
  const { messages } = message;
  console.log(message)
  const history = useHistory();
  return (
    <div>
      <div>Conversas</div>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message._id} onClick={() => history.push(`/messages/${message.messages[0].id}`)}>
            <p>{message._id}</p>
            <p>Última mensagem: {changeToUTF(message.messages[0].timestamp)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
