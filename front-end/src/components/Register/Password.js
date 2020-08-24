import React, { useContext } from 'react';
import Trybeer from '../../context';

const InputPassword = () => {
  const { setPassword } = useContext(Trybeer);
  return (
    <div className="Register_Inputs">
      <label htmlFor="InputPassword">Senha</label>
      <input
        onChange={({ target }) => setPassword(target.value)}
        type="password"
        id="InputPassword"
      />
    </div>
  );
};

export default InputPassword;
