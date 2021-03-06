import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Contacto.css'

const Contacto = () => {
    return (
        <>
        <Navbar />
            <div className="background-form">
                <div className="container rounded">
                    <form className="py-5 px-4">
                        <div className="mb-3 flex-nowrap">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3 flex-nowrap">
                            <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-outline-danger">ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default Contacto
