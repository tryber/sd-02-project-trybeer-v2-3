import React, { useState, useEffect } from 'react';
import * as services from '../../services';
import * as ls from '../Utils/localStorage';

export default function ListOrderDetailed(order) {
  const statusDeliver = ['Pendente', 'Preparando', 'Entregue'];
  const {
    orderId,
    delivered,
    total,
    products,
  } = order.order;

  const [status, setStatus] = useState(delivered);
  const { token } = ls.getItem('user');

  useEffect(() => {
    const setAndSend = async () => {
      await services.changeToDelivered(token, orderId, status);
      await services.getOrderAdminDetail(token, orderId);
    };
    setAndSend();
  }, [status]);

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
        <select onChange={({ target }) => setStatus(target.value)}>
          <option hidden>Status Delivery</option>
          {statusDeliver.map((changeStatus) => (
            <option value={changeStatus}>{changeStatus}</option>
          ))}
        </select>
        <h4>{`Total: ${total.toFixed(2)}`}</h4>
      </div>
    </div>
  );
}
