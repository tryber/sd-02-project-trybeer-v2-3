import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Trybeer from '../../context';

const ButtonExit = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();

  const exitAndRedirect = () => {
    localStorage.clear();
    setOpen(false);
    return history.push('/login');
  };

  return (
    <div className="Sidebar_Exit">
      <button
        type="button"
        className="Sidebar_Button"
        onClick={() => exitAndRedirect(history)}
      >
        Sair
      </button>
    </div>
  );
};

export default ButtonExit;
