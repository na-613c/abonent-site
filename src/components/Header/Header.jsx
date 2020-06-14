import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className={`${s.header} py-3`}>
            <span>ABONENT</span>
            <NavLink className={s.item} activeClassName={s.active} to="/main">Главная</NavLink>
            <NavLink className={s.item} activeClassName={s.active} to="/admin">Admin</NavLink>

        </header>)
}

export default Header;
