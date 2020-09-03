import React, { useState } from 'react';
import * as services from '../../services';

const setAndSend = async (status, order) => {
  console.log(status, order);
};

export default function ListOrderDetailed(order) {
  const statusDeliver = ['Pendente', 'Preparando', 'Entregue'];
  const {
    orderId,
    delivered,
    total,
    products,
  } = order.order;
  const [status, setStatus] = useState(delivered);
  return (
    <div className="List_Order_Detail_all">
      <div className="title-orders">
        <h5>{`Pedido ${orderId} - ${status}`}</h5>
      </div>
      <div className="container-big-border">
        {products.map((product) => (
          <div className="container-detail-admin" key={product.name}>
            <h5>{`${parseInt(product.qty, 10)} - ${product.name}`}</h5>
            <p>{(product.total).toFixed(2)}</p>
          </div>
        ))}
        <select onChange={({ target }) => setAndSend(target.value, order.order, setStatus)}>
          {statusDeliver.map((changeStatus) => (
            <option value={changeStatus}>{changeStatus}</option>
          ))}
        </select>
        <h4>{`Total: ${total.toFixed(2)}`}</h4>
      </div>
    </div >
  );
}
