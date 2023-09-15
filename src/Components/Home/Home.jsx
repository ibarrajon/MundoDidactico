import React from 'react';
import './Home.css';
import {Header,Destacados,Elegidos,Ofertas,Reels,Footer} from '../index'

const Home = () => {
    return(
        <>
            <Header/>
            <Destacados/>
            {/* <Elegidos/> */}
            <Ofertas/>
            {/* <Reels/> */}
            <Footer/>
        </>
    )
}

export { Home }