import React from 'react'
import Navbar from '../../components/Navbar'
import Carrusel from '../../components/Carrusel'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <>
        <Navbar />
        <Carrusel />
        <Cards />
        <Footer/>
        </>
    );
}

export default Home