import React from 'react';
import './Ofertas.css';
import { Container, Carousel } from 'react-bootstrap'
import { arrayProductos } from '../index'
import { Link } from "react-router-dom"

const Ofertas = () => {
    return (
        <section id="ofertas">
            <Container>
                <h2>OFERTAS</h2>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <div className="item">
                            <Link to={`/productos/1`} className='link'>
                                <div className="product-card">
                                    <div className="badge">10% OFF</div>
                                    <div className="product-tumb">
                                        <img src={arrayProductos[0].imagen} alt="" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">{arrayProductos[0].categoria}</span>
                                        <h3>{arrayProductos[0].nombre}</h3>
                                        <p>{arrayProductos[0].descripcion}</p>

                                        <div className="product-price"><small>${arrayProductos[0].precio}</small>${arrayProductos[0].precioDesc}</div>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/productos/2`} className='link'>
                                <div className="product-card">
                                    <div className="badge">10% OFF</div>
                                    <div className="product-tumb">
                                        <img src={arrayProductos[1].imagen} alt="" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">{arrayProductos[1].categoria}</span>
                                        <h3>{arrayProductos[1].nombre}</h3>
                                        <p>{arrayProductos[1].descripcion}</p>

                                        <div className="product-price"><small>${arrayProductos[1].precio}</small>${arrayProductos[1].precioDesc}</div>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/productos/3`} className='link'>
                                <div className="product-card">
                                    <div className="badge">10% OFF</div>
                                    <div className="product-tumb">
                                        <img src={arrayProductos[2].imagen} alt="" />
                                    </div>
                                    <div className="product-details">
                                        <span className="product-catagory">{arrayProductos[2].categoria}</span>
                                        <h3>{arrayProductos[2].nombre}</h3>
                                        <p>{arrayProductos[2].descripcion}</p>

                                        <div className="product-price"><small>${arrayProductos[2].precio}</small>${arrayProductos[2].precioDesc}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <div className="item">
                            <div className="product-card">
                                <div className="badge">10% OFF</div>
                                <div className="product-tumb">
                                    <img src={arrayProductos[0].imagen} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{arrayProductos[0].categoria}</span>
                                    <h3><a href="">{arrayProductos[0].nombre}</a></h3>
                                    <p>{arrayProductos[0].descripcion}</p>

                                    <div className="product-price"><small>${arrayProductos[0].precio}</small>${arrayProductos[0].precioDesc}</div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="badge">10% OFF</div>
                                <div className="product-tumb">
                                    <img src={arrayProductos[1].imagen} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{arrayProductos[1].categoria}</span>
                                    <h3><a href="">{arrayProductos[1].nombre}</a></h3>
                                    <p>{arrayProductos[1].descripcion}</p>

                                    <div className="product-price"><small>${arrayProductos[1].precio}</small>${arrayProductos[1].precioDesc}</div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="badge">10% OFF</div>
                                <div className="product-tumb">
                                    <img src={arrayProductos[2].imagen} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{arrayProductos[2].categoria}</span>
                                    <h3><a href="">{arrayProductos[2].nombre}</a></h3>
                                    <p>{arrayProductos[2].descripcion}</p>

                                    <div className="product-price"><small>${arrayProductos[2].precio}</small>${arrayProductos[2].precioDesc}</div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="item">
                            <div className="product-card">
                                <div className="badge">10% OFF</div>
                                <div className="product-tumb">
                                    <img src={arrayProductos[0].imagen} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{arrayProductos[0].categoria}</span>
                                    <h3><a href="">{arrayProductos[0].nombre}</a></h3>
                                    <p>{arrayProductos[0].descripcion}</p>

                                    <div className="product-price"><small>${arrayProductos[0].precio}</small>${arrayProductos[0].precioDesc}</div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="badge">10% OFF</div>
                                <div className="product-tumb">
                                    <img src={arrayProductos[1].imagen} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{arrayProductos[1].categoria}</span>
                                    <h3><a href="">{arrayProductos[1].nombre}</a></h3>
                                    <p>{arrayProductos[1].descripcion}</p>

                                    <div className="product-price"><small>${arrayProductos[1].precio}</small>${arrayProductos[1].precioDesc}</div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="badge">10% OFF</div>
                                <div className="product-tumb">
                                    <img src={arrayProductos[2].imagen} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{arrayProductos[2].categoria}</span>
                                    <h3><a href="">{arrayProductos[2].nombre}</a></h3>
                                    <p>{arrayProductos[2].descripcion}</p>

                                    <div className="product-price"><small>${arrayProductos[2].precio}</small>${arrayProductos[2].precioDesc}</div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>*/}
                </Carousel>
            </Container>


            {/* <div className="item">
                <div className="product-card">
                    <div className="badge">Hot</div>
                    <div className="product-tumb">
                        <img src={cocina} alt="" />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">hola</span>
                        <h3><a href="">Women leather bag</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>

                        <div className="product-price"><small>$9999.99</small>$8999.99</div>

                    </div>
                </div>
                <div className="product-card">
                    <div className="badge">Hot</div>
                    <div className="product-tumb">
                        <img src={cocina} alt="" />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">hola</span>
                        <h3><a href="">Women leather bag</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>

                        <div className="product-price"><small>$9999.99</small>$8999.99</div>

                    </div>
                </div>
                <div className="product-card">
                    <div className="badge">Hot</div>
                    <div className="product-tumb">
                        <img src={cocina} alt="" />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">hola</span>
                        <h3><a href="">Women leather bag</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>

                        <div className="product-price"><small>$9999.99</small>$8999.99</div>

                    </div>
                </div>
            </div> */}


        </section>
    )
}

export { Ofertas }