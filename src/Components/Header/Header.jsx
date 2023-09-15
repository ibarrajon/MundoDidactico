import React, { useState, useEffect } from 'react';
import './Header.css';
import { BsTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { AiFillFacebook, AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <header id="inicio">
            <div className='inicio-datos'>
                <div className='inicio-info'>
                    <BsTelephoneFill />
                    <Link to="whatsapp://send?phone=+542324644177" target="_blank">(2324) 644177</Link>
                    <GoMail />
                    <Link to="#" target="_blank">mundo-didactico@hotmail.com</Link>
                </div>
                <div>
                    <Link to="#" target="_blank"><AiFillInstagram style={{ color: 'white' }} /></Link>
                    <Link to="https://www.facebook.com/mundodidacticosuipacha" target="_blank"><AiFillFacebook style={{ color: 'white' }} /></Link>
                </div>
            </div>

            <div className="logo" >
                <Link to="/"><img src={logo} alt="" /></Link>    
            </div>

            <div className="navbar">
                <input type="checkbox" />

                <GiHamburgerMenu className="fas fa-bars" />
                <AiOutlineClose className="fas fa-times" />

                <nav>
                    <ul className="navbar-links">
                        <li><Link to="/">INICIO</Link></li>
                        <li className="dropdown"><Link to={`/productos`}>PRODUCTOS</Link>
                            <ul className="dropdown-contenido">
                                <li><HashLink smooth to="/#ofertas">OFERTAS</HashLink></li>
                                <li><HashLink smooth to="/#ofertas">MESAS</HashLink></li>
                                <li><HashLink smooth to="/#ofertas">CUBOS</HashLink></li>
                            </ul>
                        </li>
                        <li><a href="#">CONTACTO</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export { Header }