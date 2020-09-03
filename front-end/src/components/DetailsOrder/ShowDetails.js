import React, { useContext } from 'react';
import Trybeer from '../../context';

const ShowDetails = () => {
  const { orderDetail } = useContext(Trybeer);
  console.log(orderDetail)
  let total = 0;
  return orderDetail.products ? (
    <div className="Details_order">
      <div>
        <h2>{`Pedido ${orderDetail.orderId}`}</h2>
        <p>{`Data: ${orderDetail.day}/${orderDetail.month}`}</p>
      </div>
      {orderDetail.products.map((product, i) => {
        total += product.total;
        return (
          <div
            className="Details_order_beer"
            key={`${product.name} data`}
          >
            <h4>{`Cerveja ${i + 1}`}</h4>
            <p>{`${parseInt(product.qty, 10)} Unid. - ${product.name}`}</p>
            <p>{`Preço: R$ ${product.price.toFixed(2)}`}</p>
            <p>{`Total: R$ ${product.total.toFixed(2)}`}</p>
          </div>
        )
      })}
      <p>
        <b>Valor Total:</b>
        <span>{` R$ ${total.toFixed(2)}`}</span>
      </p>
    </div>
  ) : <p>Loading</p>;
};

export default ShowDetails;
