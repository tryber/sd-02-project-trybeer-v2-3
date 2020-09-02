import React from 'react';
import AdminOrders from './AdminOrders';
import ButtonProfile from './Profile';
import ButtonExit from './Exit';
import ButtonChat from './Chat';
import '../../styles/Sidebar.css';

const AdminSidebar = () => (
  <div className="Admin_Sidebar_All">
    <div className="Admin_Sidebar_User">
      <p>Trybeer</p>
      <AdminOrders />
      <ButtonProfile />
      <ButtonChat />
    </div>
    <ButtonExit />
  </div>
);

export default AdminSidebar;
