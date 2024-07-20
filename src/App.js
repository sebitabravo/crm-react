import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './ui/Home';
import TopBar from './ui/TopBar';
import ListaCliente from './cliente/ListaCliente';
import Crearcliente from './cliente/CrearCliente';
import EliminarCliente from './cliente/EliminarCliente';
import ActualizarCliente from './cliente/ActualizarCliente';
import ListarGestion from './gestion/ListarGestion';
import CrearGestion from './gestion/CrearGestion';
import EliminarGestion from './gestion/EliminarGestion';
import ActualizarGestion from './gestion/ActualizarGestion';
import ListarResultado from './resultado/ListarResultado';
import CrearResultado from './resultado/CrearResultado';
import EliminarResultado from './resultado/EliminarResultado';
import ActualizarResultado from './resultado/ActualizarResultado';
import ListarTipoGestion from './tipogestion/ListarTipoGestion';
import CrearTipoGestion from './tipogestion/CrearTipoGestion';
import EliminarTipoGestion from './tipogestion/EliminarTipoGestion';
import ActualizarTipoGestion from './tipogestion/ActualizarTipoGestion';
import ListarUsuario from './usuario/ListarUsuario';
import CrearUsuario from './usuario/CrearUsuario';
import EliminarUsuario from './usuario/EliminarUsuario';
import ActualizarUsuario from './usuario/ActualizarUsuario';

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
        <Route path='/clientes/actualizar/:id' element={<ActualizarCliente/>}/>
        <Route path='/clientes/eliminar/:id' element={<EliminarCliente/>}/>
        <Route path="/gestiones" element={<ListarGestion />} />
        <Route path="/gestiones/agregar" element={<CrearGestion />} />
        <Route path='/gestiones/actualizar/:id' element={<ActualizarGestion/>}/>
        <Route path='/gestiones/eliminar/:id' element={<EliminarGestion/>}/>
        <Route path="/resultados" element={<ListarResultado />} />
        <Route path="/resultados/agregar" element={<CrearResultado />} />
        <Route path='/resultados/actualizar/:id' element={<ActualizarResultado/>}/>
        <Route path='/resultados/eliminar/:id' element={<EliminarResultado/>}/>
        <Route path="/tipogestion" element={<ListarTipoGestion />} />
        <Route path="/tipogestion/agregar" element={<CrearTipoGestion />} />
        <Route path='/tipogestion/actualizar/:id' element={<ActualizarTipoGestion/>}/>
        <Route path='/tipogestion/eliminar/:id' element={<EliminarTipoGestion/>}/>
        <Route path="/usuarios" element={<ListarUsuario />} />
        <Route path="/usuarios/agregar" element={<CrearUsuario />} />
        <Route path='/usuarios/actualizar/:id' element={<ActualizarUsuario/>}/>
        <Route path='/usuarios/eliminar/:id' element={<EliminarUsuario/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
