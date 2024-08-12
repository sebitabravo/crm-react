import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearResultado() {
  const [nombre_resultado, setNombreResultado] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fecha_registro = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      await axios.post("/api/resultado", {
        nombre_resultado,
        fecha_registro,
      });
      navigate("/resultados");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Crear Resultado</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nombre del Resultado</label>
          <input
            type="text"
            className="form-control"
            value={nombre_resultado}
            onChange={(e) => setNombreResultado(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Crear Resultado
        </button>
      </form>
    </div>
  );
}

export default CrearResultado;
