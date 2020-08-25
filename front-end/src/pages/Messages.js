import React, { useEffect, useState } from 'react';
import io from 'socket.io';
import * as ls from '../components/Utils/localStorage';
import { getAllMessages } from '../services';

export default function Messages() {
  const [messages, setMessages] = useState();

  const { token } = ls.getItem('user', {});

  useEffect(() => {
    // const socket = io('http://localhost:4555');
    getAllMessages(token).then(({ data: { messages } }) => setMessages(messages));
  }, []);

  return (
    <section>
      {messages.map(({ }))}
    </section>
  );
}
