import React from 'react'
import maggie from '../../img/maggie.jpg'
import homer from '../../img/homer.jpg'
import bart from '../../img/bart.jpg'
import './Cards.css'

const Cards = () => {
    return(
        <>
        <div className="row bg-warning row-cols-1 row-cols-md-3 g-4 p-5 bg-teal-500">
        <div className="col-sm-3">
            <div className="card">
            <img src={maggie} className="card-img-top" alt="maggie"/>
            <div className="card-body">
                <h5 className="card-title">Maggie</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                <a className="btn btn-danger">Leer más...</a>
            </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
            <img src={homer} className="card-img-top" alt="Homer"/>
            <div className="card-body">
                <h5 className="card-title">Homero</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. </p>
                <a className="btn btn-danger">Leer más...</a>
            </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
            <img src={bart} className="card-img-top" alt="Bart"/>
            <div className="card-body">
                <h5 className="card-title">Bart</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <a className="btn btn-danger">Leer más...</a>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Cards