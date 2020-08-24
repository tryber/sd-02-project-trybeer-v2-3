import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Trybeer from '../../context';
import { postRegister } from '../../services';

const validEmail = /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i;
const validName = /[A-Z ]{12,}/i;
const validPassword = /[0-9]{6,}/;

const doRequest = async (obj, history) => {
  const { data: { status: _, ...user } } = await postRegister(obj);
  localStorage.setItem('user', JSON.stringify(user));
  if (user.role === 'admin') return history.push('/admin/orders');
  return history.push('/products');
};

const counter = (setWrongData) => {
  setWrongData(true);
  setTimeout(() => {
    setWrongData(false);
  }, 3000);
};

const CheckData = () => {
  const {
    userName, emailUser, password, isSalesman,
  } = useContext(Trybeer);

  const [wrongData, setWrongData] = useState(false);
  const userObj = {
    email: emailUser, password, name: userName, admin: isSalesman,
  };

  const history = useHistory();

  const checkValues = () => (
    validEmail.test(emailUser)
      && validPassword.test(password)
      && validName.test(userName)
      ? doRequest(userObj, history)
      : counter(setWrongData)
  );

  return (
    <div className="Register_CheckData">
      <div className="Register_Button">
        <button type="button" onClick={() => history.push('/login')}>Voltar</button>
        <button type="button" onClick={() => checkValues()}>Cadastrar</button>
      </div>
      {wrongData ? <p>Confira novamente seus dados.</p> : null}
    </div>
  );
};

export default CheckData;
