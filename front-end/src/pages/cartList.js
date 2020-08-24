import React, { useState, useContext } from 'react';
import '../styles/checkout.css';
import '../styles/adminOrders.css';
import Trybeer from '../context';

const getTotal = (cart) => cart.reduce((ac, { price, quantity }) => (ac + (price * quantity)), 0);

const deleteItem = (id, setItens, setIds, setTotal, setCartProducts) => {
  const itens = JSON.parse(localStorage.getItem('cart'));
  delete itens[id];

  localStorage.setItem('cart', JSON.stringify(itens));
  setCartProducts(itens);

  setItens(Object.values(itens));
  setIds(Object.keys(itens));
  setTotal(getTotal(Object.values(itens)));
};

export default function CartList() {
  const [itens, setItens] = useState(Object.values(JSON.parse(localStorage.getItem('cart'))));
  const [ids, setIds] = useState(Object.keys(JSON.parse(localStorage.getItem('cart'))));
  const [total, setTotal] = useState(getTotal(itens));
  const { setCartProducts } = useContext(Trybeer);

  return (
    <div className="container-checkout">
      {itens.map(({ name, quantity, price }, index) => (
        <div className="container-detailed-checkout" key={name}>
          <div>{`${quantity} - ${name}`}</div>
          <div>{`R$ ${(quantity * price).toFixed(2)}`}</div>
          <button
            type="button"
            onClick={() => deleteItem(ids[index], setItens, setIds, setTotal, setCartProducts)}
          >
            X
          </button>
        </div>
      ))}
      <div>{`Total: R$ ${total.toFixed(2)}`}</div>
    </div>
  );
}
