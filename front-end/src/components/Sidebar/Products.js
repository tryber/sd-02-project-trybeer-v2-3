import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Trybeer from '../../context';
import { changePage } from '../Utils/cart';

const ButtonProducts = () => {
  const { setOpen } = useContext(Trybeer);
  const history = useHistory();

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => changePage(setOpen, history, '/products')}
    >
      Produtos
    </button>
  );
};

export default ButtonProducts;
