import React, { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getClientOrderDetail } from '../services';
import * as ls from '../components/Utils/localStorage';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import ShowDetails from '../components/DetailsOrder/ShowDetails';
import Trybeer from '../context';

const ClientOrderDetail = () => {
  const { setPage, setOrderDetail } = useContext(Trybeer);
  const { token } = ls.getItem('user', {});
  const { id } = useParams();
  setPage('Detalhes');

  useEffect(() => {
    const getDetailsOrder = async () => {
      const { data } = await getClientOrderDetail(token, id)
        .then((result) => result);
      setOrderDetail(data.order);
    };
    getDetailsOrder();
  }, [setOrderDetail, id, token]);

  if (!token) return <Redirect to="/login" />;

  return (
    <div>
      <Header />
      <Sidebar />
      <ShowDetails />
    </div>
  );
};

export default ClientOrderDetail;
