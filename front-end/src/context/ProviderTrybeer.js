import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getCart } from '../components/Utils/cart';
import Trybeer from './index';

const ProviderTrybeer = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('Produtos');
  const [emailUser, setEmailUser] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSalesman, setIsSalesman] = useState(false);
  const [cartProducts, setCartProducts] = useState(getCart);
  const [profileUser, setProfileUser] = useState('');
  const [profileEmail, setProfileEmail] = useState('');
  const [pastOrders, setPastOrders] = useState([]);
  const [orderDetail, setOrderDetail] = useState({});

  const toProvider = {
    open,
    setOpen,
    page,
    setPage,
    emailUser,
    setEmailUser,
    userName,
    setUserName,
    password,
    setPassword,
    isSalesman,
    setIsSalesman,
    cartProducts,
    setCartProducts,
    profileUser,
    setProfileUser,
    profileEmail,
    setProfileEmail,
    pastOrders,
    setPastOrders,
    orderDetail,
    setOrderDetail,
  };

  return (
    <Trybeer.Provider value={toProvider}>
      {children}
    </Trybeer.Provider>
  );
};

export default ProviderTrybeer;

ProviderTrybeer.propTypes = {
  children: PropTypes.node.isRequired,
};
