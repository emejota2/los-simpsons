import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contacto from './components/Contacto';
import Error from './pages/Error'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/los-simpsons" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
