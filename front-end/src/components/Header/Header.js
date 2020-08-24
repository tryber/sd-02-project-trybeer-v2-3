import React, { useContext } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Trybeer from '../../context';
import '../../styles/Header.css';

const Header = () => {
  const {
    open, setOpen, page,
  } = useContext(Trybeer);
  const handleClick = () => setOpen(!open);

  return (
    <div className="Menu_Sup_All">
      <div className="Menu_Sup">
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleClick}
          color="white"
        />
        <h2>
          {page}
        </h2>
      </div>
    </div>
  );
};

export default Header;
