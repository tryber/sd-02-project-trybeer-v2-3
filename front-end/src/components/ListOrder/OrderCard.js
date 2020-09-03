import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard(order) {
  const {
    id, street, street_number: number, delivered, total
  } = order.order;
  return (
    <Link to={`/admin/orders/${id}`}>
      <div className="order-card">
        <h4>{`Pedido ${id}`}</h4>
        <p>{`${street}, ${number}`}</p>
        <h5>{`R$ ${total.toFixed(2)}`}</h5>
        <p>{delivered}</p>
      </div>
    </Link>
  );
}
