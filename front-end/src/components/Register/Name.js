import React, { useContext } from 'react';
import Trybeer from '../../context';

const InputName = () => {
  const { setUserName } = useContext(Trybeer);
  return (
    <div className="Register_Inputs">
      <label htmlFor="InputName">Nome</label>
      <input
        id="InputName"
        onChange={({ target }) => setUserName(target.value)}
        type="text"
      />
    </div>
  );
};

export default InputName;
