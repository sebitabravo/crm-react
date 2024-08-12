import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CrearTipoGestion() {
  const [nombre_tipo_gestion, setNombreTipoGestion] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fecha_registro = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
      await axios.post("/api/tipo_gestion", {
        nombre_tipo_gestion,
        fecha_registro,
      });
      navigate("/tipogestion");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Crear Tipo de Gestión</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Nombre del Tipo de Gestión</label>
          <input
            type="text"
            className="form-control"
            value={nombre_tipo_gestion}
            onChange={(e) => setNombreTipoGestion(e.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Crear Tipo de Gestión
        </button>
      </form>
    </div>
  );
}

export default CrearTipoGestion;
