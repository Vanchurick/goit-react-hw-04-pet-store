import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { navigation, navItem, link, active } = styles;

  return (
    <ul className={navigation}>
      <li className={navItem}>
        <NavLink exact className={link} activeClassName={active} to="/">
          Home
        </NavLink>
      </li>
      <li className={navItem}>
        <NavLink exact className={link} activeClassName={active} to="/pets">
          Pets
        </NavLink>
      </li>
      <li className={navItem}>
        <NavLink exact className={link} activeClassName={active} to="/about">
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
