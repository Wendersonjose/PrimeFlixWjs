import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';         // Aponta para src/pages/Home/index.js
import Filme from './pages/Filme';       // Aponta para src/pages/Filme/index.js
import Favoritos from './pages/Favoritos'; // Aponta para src/pages/Favoritos/index.js
import Erro from './pages/Erro';         // Aponta para src/pages/Erro/index.js
import Header from './components/Header'; // Aponta para src/components/Header/index.js

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
