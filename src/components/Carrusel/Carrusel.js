import React from 'react'
import carousel3 from '../../img/carrousel-3.jpg'
import './Carrusel.css'

const Carrusel = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="image">
                    <div className="img-fluid">
                        <img src={carousel3} className="w-100" alt="homersapien"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrusel