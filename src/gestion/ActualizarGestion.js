import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActualizarGestion() {
  const [gestion, setGestion] = useState({
    id_gestion: "",
    id_usuario: "",
    id_cliente: "",
    id_tipo_gestion: "",
    id_resultado: "",
    comentarios: "",
    fecha_registro: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatosGestion = async () => {
      try {
        const response = await axios.get(
          `/api/gestion/${id}`
        );
        if (response.data && response.data.length > 0) {
          const gestionData = response.data[0];
          setGestion({
            ...gestionData,
            fecha_registro: formatFecha(gestionData.fecha_registro),
          });
        } else {
          console.error("No se encontraron datos de la gestión.");
        }
      } catch (error) {
        console.error("Error al cargar los datos de la gestión:", error);
      }
    };
    cargarDatosGestion();
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
    setGestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `/api/gestion/${id}`,
        gestion
      );
      navigate("/gestiones");
    } catch (error) {
      console.error("Error al actualizar la gestión:", error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Gestión</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>ID Gestión</label>
          <input
            type="number"
            className="form-control"
            name="id_gestion"
            value={gestion.id_gestion}
            onChange={onChange}
            disabled
          />
          <br />
          <label>ID Usuario</label>
          <input
            type="number"
            className="form-control"
            name="id_usuario"
            value={gestion.id_usuario}
            onChange={onChange}
          />
          <br />
          <label>ID Cliente</label>
          <input
            type="number"
            className="form-control"
            name="id_cliente"
            value={gestion.id_cliente}
            onChange={onChange}
          />
          <br />
          <label>ID Tipo de Gestión</label>
          <input
            type="number"
            className="form-control"
            name="id_tipo_gestion"
            value={gestion.id_tipo_gestion}
            onChange={onChange}
          />
          <br />
          <label>ID Resultado</label>
          <input
            type="number"
            className="form-control"
            name="id_resultado"
            value={gestion.id_resultado}
            onChange={onChange}
          />
          <br />
          <label>Comentarios</label>
          <input
            type="text"
            className="form-control"
            name="comentarios"
            value={gestion.comentarios}
            onChange={onChange}
          />
          <br />
          <label>Fecha de Registro</label>
          <input
            type="date"
            className="form-control"
            name="fecha_registro"
            value={gestion.fecha_registro}
            onChange={onChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Actualizar gestión
        </button>
      </form>
    </div>
  );
}

export default ActualizarGestion;
