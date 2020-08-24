import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as ls from '../components/Utils/localStorage';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Trybeer from '../context';
import InputsProfile from '../components/Profile/InputsProfile';
import SaveButton from '../components/Profile/SaveButton';
import AdminSidebar from '../components/Sidebar/AdminSidebar';
import '../styles/Profile.css';

const Profile = () => {
  const { setPage } = useContext(Trybeer);
  const history = useHistory();
  const { role } = ls.getItem('user') || {};
  const isAdmin = role === 'admin';

  useEffect(() => {
    setPage('Meu perfil');
  }, [setPage]);

  if (!role) {
    history.push('/login');
    return null;
  }

  return (
    <div>
      {!isAdmin && <Header />}
      {!isAdmin && <Sidebar />}
      {isAdmin && <AdminSidebar />}
      <div className={role !== 'admin' ? 'div-page-body-perfil' : 'Admin_Profile'}>
        <InputsProfile />
        <SaveButton />
      </div>
    </div>
  );
};

export default Profile;
