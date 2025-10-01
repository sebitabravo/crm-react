import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActualizarTipoGestion() {
  const [tipoGestion, setTipoGestion] = useState({
    id_tipo_gestion: "",
    nombre_tipo_gestion: "",
    fecha_registro: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatosTipoGestion = async () => {
      try {
        const response = await axios.get(
          `/api/tipo_gestion/${id}`
        );
        if (response.data && response.data.length > 0) {
          const tipoGestionData = response.data[0];
          setTipoGestion({
            ...tipoGestionData,
            fecha_registro: formatFecha(tipoGestionData.fecha_registro),
          });
        } else {
          console.error("No se encontraron datos del tipo de gestión.");
        }
      } catch (error) {
        console.error("Error al cargar los datos del tipo de gestión:", error);
      }
    };
    cargarDatosTipoGestion();
  }, [id]);

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setTipoGestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `/api/tipo_gestion/${id}`,
        tipoGestion
      );
      navigate("/tipogestion");
    } catch (error) {
      console.error("Error al actualizar el tipo de gestión:", error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Tipo de Gestión</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>ID Tipo de Gestión</label>
          <input
            type="number"
            className="form-control"
            name="id_tipo_gestion"
            value={tipoGestion.id_tipo_gestion}
            onChange={onChange}
            disabled
          />
          <br />
          <label>Nombre del Tipo de Gestión</label>
          <input
            type="text"
            className="form-control"
            name="nombre_tipo_gestion"
            value={tipoGestion.nombre_tipo_gestion}
            onChange={onChange}
          />
          <br />
          <label>Fecha de Registro</label>
          <input
            type="date"
            className="form-control"
            name="fecha_registro"
            value={tipoGestion.fecha_registro}
            onChange={onChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Actualizar tipo de gestión
        </button>
      </form>
    </div>
  );
}

export default ActualizarTipoGestion;
