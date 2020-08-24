import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getOrders } from '../../services';
import * as ls from '../Utils/localStorage';
import Trybeer from '../../context';
import '../../styles/ShowOrders.css';

const ShowOrders = () => {
  const { pastOrders, setPastOrders } = useContext(Trybeer);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      const { token } = ls.getItem('user', {});
      const { data: { orders } } = await getOrders(token).then((data) => data);
      setPastOrders(orders);
    };
    fetchOrders();
  }, [setPastOrders]);

  return pastOrders && (
    <div className="PastOrders_all">
      {pastOrders.map(({
        day,
        month,
        orderId,
        total,
      }) => (
        <div
          className="PastOrders_order"
          key={`${orderId} buy info`}
        >
          <h4>{`Pedido ${orderId}`}</h4>
          <i><p>{`${day}/${month}`}</p></i>
          <p className="Total_word">
            <b>Total:</b>
            <span>{` R$ ${total.toFixed(2)}`}</span>
          </p>
          <button
            className="Orders_Button"
            type="button"
            onClick={() => history.push(`/orders/${orderId}`)}
          >
            Ver Detalhes
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowOrders;
