import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import io from 'socket.io-client';
import { getClientMessages } from '../services';
import ChatMessages from '../components/Messages/ChatMessages';
import * as ls from '../components/Utils/localStorage';

const socket = io('http://localhost:4555');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);


  const { id } = useParams();
  const { token, role, id: userId } = ls.getItem('user', {});

  useEffect(() => {
    getClientMessages(token, id || userId).then(({ data: { messages } }) => {
      setTimeout(() => {
        setMessages(messages);
        setLoading(false);
      }, 1000)
    });
  }, [])

  socket.on('update message', ({ msg, email }) => {
    const checkId = id || userId;
    console.log(msg);
    console.log(checkId);
    if (role === 'admin' || checkId === msg[0].id) {
      setMessages([{ email: email, messages: msg }]);
    }
  });

  return (
    <section>
      {loading && <ReactLoading type={'spin'} color={'grey'} height={350} width={150} />}
      {!loading && <ChatMessages messages={messages} role={role} token={token} />}
    </section>
  );
}

export default Chat;
