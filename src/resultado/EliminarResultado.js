import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EliminarResultado() {
  const [resultado, setResultado] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    cargarDatosResultado();
  }, []);

  const cargarDatosResultado = async () => {
    try {
      const response = await axios.get(
        `/api/resultado/${id}`
      );
      setResultado(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/resultado/${id}`);
      navigate("/resultados");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Eliminar Resultado</h1>
      <hr></hr>
      <div className="card">
        <div className="card-header">Seleccione la opción que corresponda</div>
        <div className="card-body">
          <h2>¿Desea eliminar este resultado?</h2>
          {resultado && (
            <>
              <h3>Nombre: {resultado.nombre_resultado}</h3>
              <button className="btn btn-danger" onClick={onSubmit}>
                Eliminar resultado
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EliminarResultado;
