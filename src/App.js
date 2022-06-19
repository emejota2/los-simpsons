import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Carrusel />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
