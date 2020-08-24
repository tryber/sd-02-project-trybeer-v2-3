import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getOrderAdminDetail, changeToDelivered } from '../services';
import ListOrderDetailed from '../components/adminOrder/listOrderDetail';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import '../styles/adminOrders.css';

const renderButton = (setloading, id) => {
  const markAsDelivered = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await changeToDelivered(token, id);
    setloading(true);
  };

  return (
    <button type="button" onClick={() => markAsDelivered()}>Marcar como entregue!</button>
  );
};

export default function OrderDetail() {
  const [order, setOrder] = useState({ status: 'loading' });
  const [loading, setloading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user'));
        const orderAdmin = await getOrderAdminDetail(token, id);
        setOrder(orderAdmin.data);
        return setloading(false);
      } catch (error) {
        return setRedirect(true);
      }
    };
    fetchOrderDetail();
  }, [id, loading]);

  if (redirect) return <Redirect to="/login" />;

  return (
    <div>
      <AdminSidebar />
      <div>
        {loading ? 'Loading'
          : (
            <div className="Admin_detail_div_all">
              <ListOrderDetailed order={order.order[0]} />
              {!order.order[0].deliver ? renderButton(setloading, id) : ''}
            </div>
          )}
      </div>
    </div>
  );
}
