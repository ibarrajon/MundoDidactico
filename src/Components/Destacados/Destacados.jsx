import React from 'react';
import './Destacados.css';
import {arrayProductos} from '../index'

const Destacados = () => {
    return(
        <section id="destacados">
            <div className="container-destacados">
                <img src={arrayProductos[0].imagen} alt="" />       
                <img src={arrayProductos[1].imagen} alt="" />
                <img src={arrayProductos[2].imagen} alt="" />
            </div>
        </section>
    )
}

export { Destacados }