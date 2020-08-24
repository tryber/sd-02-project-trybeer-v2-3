import React from 'react';

export default function ListOrderDetailed(order) {
  const {
    orderId,
    deliver,
    total,
    products,
  } = order.order;
  return (
    <div className="List_Order_Detail_all">
      <div className="title-orders">
        <h5>{`Pedido ${orderId} - ${deliver ? 'Entregue' : 'Pendente'}`}</h5>
      </div>
      <div className="container-big-border">
        {products.map((product) => (
          <div className="container-detail-admin" key={product.name}>
            <h5>{`${parseInt(product.qty, 10)} - ${product.name}`}</h5>
            <p>{(product.total).toFixed(2)}</p>
          </div>
        ))}
        <h4>{`Total: ${total.toFixed(2)}`}</h4>
      </div>
    </div>
  );
}
