import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as ls from '../Utils/localStorage';
import { changePage } from '../Utils/cart';
import Trybeer from '../../context';

const ButtonProfile = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();
  const { role } = ls.getItem('user') || {};
  const route = role === 'admin' ? '/admin/profile' : '/profile';

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage(setOpen, history, route)}
    >
      Meu Perfil
    </button>
  );
};

export default ButtonProfile;
