import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EliminarGestion() {
  const [gestion, setGestion] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatosGestion = async () => {
      try {
        const response = await axios.get(
          `/api/gestion/${id}`
        );
        setGestion(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    cargarDatosGestion();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/gestion/${id}`);
      navigate("/gestiones");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Eliminar Gestión</h1>
      <hr></hr>
      <div className="card">
        <div className="card-header">Seleccione la opción que corresponda</div>
        <div className="card-body">
          <h2>¿Desea eliminar esta gestión?</h2>
          {gestion && (
            <>
              <h3>ID Gestión: {gestion.id_gestion}</h3>
              <h3>Comentarios: {gestion.comentarios}</h3>
              <button className="btn btn-danger" onClick={onSubmit}>
                Eliminar gestión
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EliminarGestion;
