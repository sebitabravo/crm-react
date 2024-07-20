import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearCliente() {
  const [id_cliente, setIdCliente] = useState("");
  const [dv, setDv] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fecha_registro = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      await axios.post("http://144.126.210.74:8080/api/cliente", {
        id_cliente,
        dv,
        nombres,
        apellidos,
        email,
        celular,
        fecha_registro,
      });
      navigate("/clientes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Crear Cliente</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Rut</label>
          <input
            type="number"
            className="form-control"
            value={id_cliente}
            onChange={(e) => setIdCliente(e.target.value)}
          />
          <br />
          <label>Dv</label>
          <input
            type="text"
            className="form-control"
            value={dv}
            onChange={(e) => setDv(e.target.value)}
          />
          <br />
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
          <br />
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Celular</label>
          <input
            type="number"
            className="form-control"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Agregar cliente
        </button>
      </form>
    </div>
  );
}

export default CrearCliente;
