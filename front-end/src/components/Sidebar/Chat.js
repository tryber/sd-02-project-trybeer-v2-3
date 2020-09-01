import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ls from '../Utils/localStorage';
import { changePage } from '../Utils/cart';
import Trybeer from '../../context';

const ButtonChat = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();
  const { role } = ls.getItem('user') || {};
  const route = role === 'admin' ? '/admin/messages' : '/messages';

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage(setOpen, history, route)}
    >
      Messages
    </button>
  );
};

export default ButtonChat;
