import React, { useContext } from 'react';
import Trybeer from '../context';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ShowOrders from '../components/ClientOrders/ShowOrders';

const MyOrders = () => {
  const { setPage } = useContext(Trybeer);
  setPage('Meus Pedidos');

  return (
    <div>
      <Header />
      <Sidebar />
      <ShowOrders />
    </div>
  );
};

export default MyOrders;
