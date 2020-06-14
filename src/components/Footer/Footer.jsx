import React from 'react';
import s from './Footer.module.css';


const Footer = () => {
    return (
        <footer className={`${s.footer} py-3`}>
            <p className={s.item}>FOOTER</p>
        </footer>)
}

export default Footer;