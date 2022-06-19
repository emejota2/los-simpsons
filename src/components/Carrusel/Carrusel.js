import React from 'react'
import carousel1 from '../../img/carrousel-1.jpg'
import carousel2 from '../../img/carrousel-2.jpg'
import carousel3 from '../../img/carrousel-3.jpg'
import './Carrusel.css'

const Carrusel = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active img-fluid">
                        <img src={carousel1} className=" w-100" alt="homersapien"/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className=" w-100" alt="simpsons"/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className=" w-100" alt="simpsons"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrusel