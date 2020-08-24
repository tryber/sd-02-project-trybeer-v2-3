import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import OrderCard from '../components/ListOrder/OrderCard';
import { getAdminOrders } from '../services/index';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import '../styles/adminOrders.css';

const sortingFunc = (a, b) => {
  if (a.deliver > b.deliver) {
    return 1;
  }
  if (a.deliver < b.deliver) {
    return -1;
  }
  return 0;
};

export default function Login() {
  const [orders, setOrders] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const ordersAdmin = await getAdminOrders(token);
        return setOrders(ordersAdmin.data.orders.sort(sortingFunc));
      } catch (error) {
        return setRedirect(true);
      }
    };
    fetchOrders();
  }, []);

  if (redirect) return <Redirect to="/login" />;

  return (
    <div className="Admin_orders">
      <AdminSidebar />
      <div className="container-orders">
        <h3 className="title-orders">Pedidos</h3>
        <div className="Order_Card_All">
          {orders.map((order) => (
            <OrderCard key={order.orderId} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
