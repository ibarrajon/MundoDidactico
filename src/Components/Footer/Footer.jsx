import React from 'react';
import './Footer.css';
import { AiOutlineUp} from "react-icons/ai";
import wsp from '../assets/whatsapp.png';
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return(
        <footer>
            <div className='inicio'>
                <HashLink smooth to="/#top"><button className='arriba'><AiOutlineUp/></button></HashLink>
                {/* <a href="#inicio"><button className='arriba'><AiOutlineUp/></button></a> */}
                <p>Mundo Didáctico 2023. Desarrollado por Jon Ibarra.</p>
            </div>
            <div className="terminos"> 
                <p><a href="#">Terminos y condiciones</a></p>
                <p><a href="#">Política de privacidad</a> </p>
                <Link to="whatsapp://send?phone=+542324644177" target="_blank"><img src={wsp} className='wsp' alt="whatsapp" /></Link>
            </div>
        </footer>
    )
}

export { Footer }