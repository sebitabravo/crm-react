import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearGestion() {
  const [id_usuario, setIdUsuario] = useState("");
  const [id_cliente, setIdCliente] = useState("");
  const [id_tipo_gestion, setIdTipoGestion] = useState("");
  const [id_resultado, setIdResultado] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [tiposGestion, setTiposGestion] = useState([]);
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const usuariosResponse = await axios.get(
        "/api/usuario"
      );
      const clientesResponse = await axios.get(
        "/api/cliente"
      );
      const tiposGestionResponse = await axios.get(
        "/api/tipo_gestion"
      );
      const resultadosResponse = await axios.get(
        "/api/resultado"
      );

      setUsuarios(usuariosResponse.data);
      setClientes(clientesResponse.data);
      setTiposGestion(tiposGestionResponse.data);
      setResultados(resultadosResponse.data);
    };

    fetchData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fecha_registro = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      await axios.post("/api/gestion", {
        id_usuario,
        id_cliente,
        id_tipo_gestion,
        id_resultado,
        comentarios,
        fecha_registro,
      });
      navigate("/gestiones");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Crear Gestión</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Usuario</label>
          <select
            className="form-control"
            value={id_usuario}
            onChange={(e) => setIdUsuario(e.target.value)}
          >
            {usuarios.map((usuario) => (
              <option key={usuario.id_usuario} value={usuario.id_usuario}>
                {usuario.nombres} {usuario.apellidos}
              </option>
            ))}
          </select>
          <br />
          <label>Cliente</label>
          <select
            className="form-control"
            value={id_cliente}
            onChange={(e) => setIdCliente(e.target.value)}
          >
            {clientes.map((cliente) => (
              <option key={cliente.id_cliente} value={cliente.id_cliente}>
                {cliente.nombres} {cliente.apellidos}
              </option>
            ))}
          </select>
          <br />
          <label>Tipo de Gestión</label>
          <select
            className="form-control"
            value={id_tipo_gestion}
            onChange={(e) => setIdTipoGestion(e.target.value)}
          >
            {tiposGestion.map((tipo) => (
              <option key={tipo.id_tipo_gestion} value={tipo.id_tipo_gestion}>
                {tipo.nombre_tipo_gestion}
              </option>
            ))}
          </select>
          <br />
          <label>Resultado</label>
          <select
            className="form-control"
            value={id_resultado}
            onChange={(e) => setIdResultado(e.target.value)}
          >
            {resultados.map((resultado) => (
              <option
                key={resultado.id_resultado}
                value={resultado.id_resultado}
              >
                {resultado.nombre_resultado}
              </option>
            ))}
          </select>
          <br />
          <label>Comentarios</label>
          <textarea
            className="form-control"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Crear Gestión
        </button>
      </form>
    </div>
  );
}

export default CrearGestion;
