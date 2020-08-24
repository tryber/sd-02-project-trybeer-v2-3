import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Trybeer from '../../context';
import '../../styles/ShowCart.css';

const ShowCart = () => {
  const { cartProducts } = useContext(Trybeer);
  const [cartValue, setCartValue] = useState('0.00');
  const history = useHistory();

  useEffect(() => {
    const priceCalc = Object.values(cartProducts)
      .reduce((acc, { price, quantity }) => {
        const calc = price * quantity;
        return acc + calc;
      }, 0);
    setCartValue(priceCalc.toFixed(2));
  }, [cartProducts]);

  return (
    <div className="ShowCart">
      <button type="button" onClick={() => history.push('/checkout')}>
        {`Total: R$ ${cartValue} - Ver Carrinho`}
      </button>
    </div>
  );
};

export default ShowCart;
