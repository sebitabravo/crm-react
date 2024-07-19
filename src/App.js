import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './ui/Home';
import ListaCliente from './cliente/ListaCliente';
import TopBar from './ui/TopBar';
import Crearcliente from './cliente/CrearCliente';

import './App.css';

function App() {
  return (
    <Router>
      <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<ListaCliente />} />
        <Route path="/clientes/agregar" element={<Crearcliente/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
