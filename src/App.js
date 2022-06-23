import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </Router>
  );
}

export default App;
