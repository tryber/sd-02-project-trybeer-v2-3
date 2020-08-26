import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { getClientMessages } from '../services';
import AdminChatMessages from '../components/Messages/AdminChatMessages';
import * as ls from '../components/Utils/localStorage';


function Chat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { token } = ls.getItem('user', {});

  useEffect(() => {
    getClientMessages(token, id).then(({ data: { messages } }) => {
      setTimeout(() => {
        setMessages(messages);
        setLoading(false);
      }, 1000)
    });
  }, [])

  return (
    <section>
      {loading && <ReactLoading type={'spin'} color={'grey'} height={350} width={150} />}
      {!loading && <AdminChatMessages messages={messages} />}
    </section>
  );
}

export default Chat;
