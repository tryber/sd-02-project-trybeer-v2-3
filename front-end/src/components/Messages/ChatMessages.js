import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { changeToUTF } from '../Utils/dateUtils';
import { postMessage } from '../../services';
import Header from '../Header/Header';
import Trybeer from '../../context';
import Sidebar from '../Sidebar/Sidebar';
import AdminSidebar from '../Sidebar/AdminSidebar';

const socket = io('http://localhost:4555');

const handleClick = async (message, setInputMessage, token, id) => {
  const { data: { value: { messages, email } } } = await postMessage(token, id, message);
  socket.emit('new message', { messages, email });
  setInputMessage('');
};

export default function ChatMessages({ messages, role, token }) {
  const { setPage } = useContext(Trybeer);
  const [inputMessage, setInputMessage] = useState('');
  const isAdmin = role === 'admin';

  useEffect(() => {
    setPage('Chat da Loja');
  }, [setPage]);

  // solução scroll retirada de https://stackoverflow.com/a/55948518
  const el = useRef(null);

  useEffect(() => {
    el.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  });

  const { id } = messages.length && messages[0].messages[0];
  const { email } = messages.length && messages[0];
  const messagesArray = messages.length && messages.map((msg) => msg.messages);

  return (
    <section>
      {!isAdmin && <Header />}
      {!isAdmin && <Sidebar />}
      {isAdmin && <AdminSidebar />}
      {role === 'admin' && <h2 className="chat-title">{`Conversando com ${email}`}</h2>}
      <section className={role === 'admin' ? 'chat-messages-list-admin' : 'chat-messages-list'}>
        {messages.length && messagesArray[0].map(({ fromClient, timestamp, content }) => (
          <div className={!fromClient ? 'chat-messages-left' : 'chat-messages-right'} key={timestamp}>
            <div style={{ color: fromClient ? 'green' : 'indigo', fontSize: '0.9rem', fontWeight: '700' }}>
              {fromClient ? email : 'Loja'}
            </div>
            <div>{content}</div>
            <div style={{ color: 'gray', fontSize: '0.9rem' }}>{changeToUTF(timestamp)}</div>
          </div>
        ))}
      </section>
      <div id="el" ref={el} />
      <section className={role === 'admin' ? 'chat-section-admin' : 'chat-section'}>
        <input className="chat-input" value={inputMessage} onChange={({ target: { value } }) => setInputMessage(value)} />
        <button
          type="button"
          onClick={() => handleClick(inputMessage, setInputMessage, token, id)}
          disabled={!inputMessage}
          className="chat-button"
        >
          ➢
        </button>
      </section>
    </section>
  );
}

ChatMessages.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
  role: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
