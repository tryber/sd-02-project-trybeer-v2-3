import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ls from '../components/Utils/localStorage';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import AllProducts from '../components/Products/AllProducts';
import ShowCart from '../components/Products/ShowCart';
import Trybeer from '../context';

const Products = () => {
  const { setPage } = useContext(Trybeer);
  const history = useHistory();

  useEffect(() => {
    if (!ls.getItem('user')) return history.push('/login');
    return setPage('Produtos');
  }, [setPage, history]);

  return (
    <div>
      <Header />
      <Sidebar />
      <AllProducts />
      <ShowCart />
    </div>
  );
};

export default Products;
