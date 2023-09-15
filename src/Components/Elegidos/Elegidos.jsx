import React from 'react';
import './Elegidos.css';
import cocina from '../assets/Cocina_Amelia.jpg'

const Elegidos = () => {
    return (
        <section id="elegidos">
            
            <div className="product-card">
                <div className="badge">Hot</div>
                <div className="product-tumb">
                    <img src={cocina} alt="" />
                </div>
                <div className="product-details">
                    <span className="product-catagory">Women,bag</span>
                    <h3><a href="">Women leather bag</a></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                        <div className="product-price"><small>$9999.99</small>$8999.99</div>
                </div>
            </div>

            <img src={cocina} alt="" />

        </section>
    )
}

export { Elegidos }