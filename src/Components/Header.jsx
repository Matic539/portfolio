import React from 'react';
import './styles/headers/Header.css';
import imagen from './img/yo-img.jpg';
import menu from './img/menu.png';

export default function Header() {
    return (
        <header>
            <div className='back'>
                <div className='menu container'>
                    <a href="#" className='logo'><img src={imagen} alt="Logo" /></a>
                    <input type="checkbox" id='menu' />
                    <label htmlFor="menu">
                        <img src={menu} className='menu-icon' alt="menu" />
                    </label>

                    <nav className='navbar'>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#sobreMi">Sobre Mi</a></li>
                            <li><a href="#proyectos">Proyectos</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
