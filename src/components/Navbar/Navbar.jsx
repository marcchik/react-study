import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Feed</a>
            </div>
            <div>
                <a>Message</a>
            </div>
        </nav>
    )
}

export default Navbar;