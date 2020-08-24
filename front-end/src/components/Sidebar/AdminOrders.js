import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminOrders = () => {
  const history = useHistory();

  return (
    <button
      type="button"
      className="Sidebar_Button"
      onClick={() => history.push('/admin/orders')}
    >
      Pedidos
    </button>
  );
};
export default AdminOrders;
