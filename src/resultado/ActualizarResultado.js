import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActualizarResultado() {
  const [resultado, setResultado] = useState({
    id_resultado: "",
    nombre_resultado: "",
    fecha_registro: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatosResultado = async () => {
      try {
        const response = await axios.get(
          `/api/resultado/${id}`
        );
        if (response.data && response.data.length > 0) {
          const resultadoData = response.data[0];
          setResultado({
            ...resultadoData,
            fecha_registro: formatFecha(resultadoData.fecha_registro),
          });
        } else {
          console.error("No se encontraron datos del resultado.");
        }
      } catch (error) {
        console.error("Error al cargar los datos del resultado:", error);
      }
    };
    cargarDatosResultado();
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
    setResultado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `/api/resultado/${id}`,
        resultado
      );
      navigate("/resultados", { replace: true, state: { refresh: Date.now() } });
    } catch (error) {
      console.error("Error al actualizar el resultado:", error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Resultado</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>ID Resultado</label>
          <input
            type="number"
            className="form-control"
            name="id_resultado"
            value={resultado.id_resultado}
            onChange={onChange}
            disabled
          />
          <br />
          <label>Nombre del Resultado</label>
          <input
            type="text"
            className="form-control"
            name="nombre_resultado"
            value={resultado.nombre_resultado}
            onChange={onChange}
          />
          <br />
          <label>Fecha de Registro</label>
          <input
            type="date"
            className="form-control"
            name="fecha_registro"
            value={resultado.fecha_registro}
            onChange={onChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Actualizar resultado
        </button>
      </form>
    </div>
  );
}

export default ActualizarResultado;
