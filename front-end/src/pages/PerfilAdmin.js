import React, { useContext, useEffect } from 'react';
import Trybeer from '../context';
import Sidebar from '../components/Sidebar/Sidebar';
import '../styles/PerfilAdmin.css';

export default function PerfilAdmin() {
  const { setOpen } = useContext(Trybeer);
  useEffect(() => { setOpen(true); }, []);

  const renderPerfilAdmin = () => (
    <article className="page-perfil-admin">
      <h1 className="admin-perfil-title">Perfil</h1>
      <div className="campos-perfil-admin">Nome: </div>
      <div className="campos-perfil-admin">Email: </div>
    </article>
  );

  return (
    <div>
      <Sidebar />
      {renderPerfilAdmin()}
    </div>
  );
}
