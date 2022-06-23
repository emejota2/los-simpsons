import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import blog1 from "../../img/noche-de-brujas.png";
import blog2 from "../../img/lucha-educativa.jpg";
import './Blog.css'

const Blog = () => {
    return (
        <>
            <Navbar/>
                <div className="background">
                        <div className="container">
                            <div className="card">
                                <h2>Episodio "Especial de Noche de Brujas VII", Octubre 27, 1996</h2>
                                <img src={blog1} width="450" height="380" alt="imagen del episodio noche de brujas de los simpsons"/>
                                <p className="pt-3">
                                Marge le advierte a ustedes, la audiencia que este episodio puede
                                provocar mucho miedo en algunos espectadores y le dice a los padres
                                que manden a sus niños a dormir. Luego, se muestra a Homer, quien
                                acababa de robarle sus dulces a un grupo de niños, espiando a Bart y a
                                Lisa, quienes están en la casita del árbol, dispuestos a contar tres
                                historias de terror.
                                </p>
                            </div>
                            <div className="card">
                                <h2>Episodio "Lucha educativa", Abril 16, 195</h2>
                                <img src={blog2} width="450" height="380" alt="imagen del episodio de lucha educativa de los simpsons"/>
                                <p className="pt-3">
                                Edna Krabappel convoca a huelga para protestar contra el bajo
                                presupuesto que invertía el director Skinner en la escuela. Bart
                                extiende la huelga haciendo que los maestros se pongan en contra de
                                Skinner. Los padres de Springfield finalmente deciden dar clases ellos
                                mismos, y Marge se convierte en la maestra de Bart, luego de que éste
                                se hubiese deshecho de todos los suplentes. Bart decide resolver la
                                huelga, y encierra a Krabappel y a Skinner en la oficina del director.
                                La experiencia les da la idea de alquilar la escuela y los salones a
                                la prisión de la ciudad, para conseguir más dinero.
                                </p>
                            </div>
                        </div>
                    </div>
            <Footer />
        </>
    );
};

export default Blog;
