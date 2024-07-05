import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './ui/Home';
import ListaCliente from './cliente/ListaCliente';
import TopBar from './ui/TopBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<ListaCliente />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
