import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({ isActive }) => isActive ? s.activeLink : ""} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({ isActive }) => isActive ? s.activeLink : ""} to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({ isActive }) => isActive ? s.activeLink : ""} to="/">Message</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;