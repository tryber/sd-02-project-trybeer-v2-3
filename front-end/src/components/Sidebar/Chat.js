import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ls from '../Utils/localStorage';

const ButtonChat = () => {
  const history = useHistory();
  const { role } = ls.getItem('user') || {};

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => history.push(role === 'admin' ? '/admin/messages' : '/messages')}
    >
      Messages
    </button>
  );
};

export default ButtonChat;
