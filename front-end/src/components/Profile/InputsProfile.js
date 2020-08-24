import React, { useContext, useEffect } from 'react';
import * as ls from '../Utils/localStorage';
import Trybeer from '../../context';

const OnlyShows = (profileUser) => (
  <input
    id="name"
    name="name"
    type="text"
    readOnly
    data-testid="email-input"
    defaultValue={profileUser}
  />
);

const InputsProfile = () => {
  const {
    profileUser,
    setProfileUser,
    profileEmail,
    setProfileEmail,
  } = useContext(Trybeer);

  useEffect(() => {
    const userData = ls.getItem('user');
    setProfileUser(userData.name);
    setProfileEmail(userData.email);
  }, [setProfileEmail, setProfileUser]);

  return (
    <div className="profile-campo">
      <label htmlFor="email">Nome</label>
      {
        ls.getItem('user', {}).role === 'admin'
          ? OnlyShows(profileUser)
          : (
            <input
              id="name"
              name="name"
              type="text"
              data-testid="email-input"
              defaultValue={profileUser}
              onChange={({ target }) => setProfileUser(target.value)}
            />
          )
      }
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="text"
        data-testid="profile-email-input"
        readOnly
        value={profileEmail}
      />
    </div>
  );
};

export default InputsProfile;
