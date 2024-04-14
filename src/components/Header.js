import React from 'react';
import {Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/primereact.min.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '/node_modules/primeflex/primeflex.css';
import brand from '../assets/logo.png';


export default function Header() {
    const items = [
        {
            template: () => (
                <Link to="/" className='no-underline nav-link'>Home</Link>
            )
        },
        {
            template: () => (
                <Link to="/About" className='no-underline nav-link'>About Us</Link>
            )
            
        },
        {
            template: () => (
                <Link to="/Service" className='no-underline nav-link'>Service</Link>
            )
        },
        {
            template: () => (
                <Link to="/Blogs"className='no-underline nav-link'>Blogs</Link>
            )
            
        },
        {
            template: () => (
                <Link to="/Contact"className='no-underline nav-link'>Contact</Link>
            )
            
        }
    ];
    

    const start = (
        <div className='brand'>
        <img alt="logo" src={brand} height="40" className="ms-5 ps-5" />
        </div>
    );



    return (
        
            <div className="head-nav ml-0">
                <Menubar model={items} start={start} className='flex  justify-content-between p-5 z-5' />
            </div>
        
    );
}
