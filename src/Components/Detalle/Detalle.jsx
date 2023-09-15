import React, { useState } from 'react';
import './Detalle.css';
import { arrayProductos } from '../index'
import { useParams } from 'react-router-dom';
import { Header, Footer } from '../index'

const Detalle = () => {
  const { id } = useParams();
  const producto = arrayProductos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const [mainImage, setMainImage] = useState(producto.imagen);
  const [thumbnails, setThumbnails] = useState([
    producto.imagen,
    producto.imagen1,
    producto.imagen2,
  ]);

  return (
    <>
      <Header />
      <section className="detalle">
        <div className="detalle-container">
          <div className="detalle-badge">10% OFF</div>
          <div className="detalle-tumb">
            <div className="thumbnail-container">
                {thumbnails.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={thumbnail}
                    onClick={() => setMainImage(thumbnail)}
                  />
                ))}
              </div>

              <img src={mainImage} alt="Imagen principal" />
          </div>
          <div className="detalle-descripcion">
            <span className="detalle-catagory">{producto.categoria}</span>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>

            <div className="detalle-price"><small>${producto.precio}</small>${producto.precioDesc}</div> 
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export { Detalle }