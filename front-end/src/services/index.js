import axios from 'axios';

const APIPostRegister = 'http://localhost:3001/user/register';
const APIPostLogin = 'http://localhost:3001/user/login';
const APIGetProducts = 'http://localhost:3001/products';
const APIPatchProfile = 'http://localhost:3001/user/profile';
const APIGetOrders = 'http://localhost:3001/user/orders/';
const APIGetAdminOrders = 'http://localhost:3001/orders/admin';
const APIOrderAdminDetail = 'http://localhost:3001/orders/admin/';
const APICheckout = 'http://localhost:3001/orders/';
const APIGetDetailsOrder = 'http://localhost:3001/orders/';

const headers = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

const patchHeaders = (token) => ({
  Accept: '*/*',
  'Access-Control-Allow-Headers': '*',
  Authorization: token,
  'Content-Type': 'application/json',
});

export const postRegister = async (obj) => (
  axios
    .post(APIPostRegister, obj, { headers })
);

export const getProducts = async () => (
  axios
    .get(APIGetProducts)
);

export const postLogin = async (obj) => (
  axios
    .post(APIPostLogin, obj, { headers })
);

export const patchProfile = async (obj) => {
  const { token } = obj;
  return (
    axios
      .patch(APIPatchProfile, obj, { headers: patchHeaders(token) })
  );
};

export const getOrders = async (token) => axios
  .get(APIGetOrders, { headers: patchHeaders(token) });

export const getAdminOrders = async (token) => axios
  .get(APIGetAdminOrders, { headers: patchHeaders(token) });

export const getOrderAdminDetail = async (token, id) => axios
  .get(`${APIOrderAdminDetail}${id}`, { headers: patchHeaders(token) });

export const changeToDelivered = async (token, id) => axios
  .patch(`http://localhost:3001/orders/admin/${id}/delivered`,
    undefined, { headers: patchHeaders(token) });

export const sendToOrderAPI = async (token, obj) => axios
  .post(APICheckout, obj, { headers: patchHeaders(token) });

export const getClientOrderDetail = (token, id) => axios
  .get(`${APIGetDetailsOrder}${id}`, { headers: patchHeaders(token) });
