import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import * as ls from '../components/Utils/localStorage';
import { getAllMessages } from '../services';
import MessagesList from '../components/Messages/messages';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = ls.getItem('user', {});

  useEffect(() => {
    getAllMessages(token).then(({ data: { messages } }) => {
      setTimeout(() => {
        setMessages(messages);
        setLoading(false);
      }, 1000)
    });
  }, [token]);

  return (
    <section>
      {loading && <ReactLoading type={'spin'} color={'grey'} height={350} width={150} />}
      {!loading && <MessagesList messages={messages} />}
    </section>
  );
}
