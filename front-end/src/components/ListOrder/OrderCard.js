import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard(order) {
  const {
    orderId, adress, total, deliver,
  } = order.order;
  return (
    <Link to={`/admin/orders/${orderId}`}>
      <div className="order-card">
        <h4>{`Pedido ${orderId}`}</h4>
        <p>{adress}</p>
        <h5>{`R$ ${total.toFixed(2)}`}</h5>
        <p>{deliver ? 'Entregue' : 'Pendente'}</p>
      </div>
    </Link>
  );
}
