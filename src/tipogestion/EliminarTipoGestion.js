import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EliminarTipoGestion() {
  const [tipoGestion, setTipoGestion] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    cargarDatosTipoGestion();
  }, []);

  const cargarDatosTipoGestion = async () => {
    try {
      const response = await axios.get(
        `http://144.126.210.74:8080/api/tipo_gestion/${id}`
      );
      setTipoGestion(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://144.126.210.74:8080/api/tipo_gestion/${id}`);
      navigate("/tipogestion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Eliminar Tipo de Gestión</h1>
      <hr></hr>
      <div className="card">
        <div className="card-header">Seleccione la opción que corresponda</div>
        <div className="card-body">
          <h2>¿Desea eliminar este tipo de gestión?</h2>
          {tipoGestion && (
            <>
              <h3>Nombre: {tipoGestion.nombre_tipo_gestion}</h3>
              <button className="btn btn-danger" onClick={onSubmit}>
                Eliminar Tipo de Gestión
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EliminarTipoGestion;
