import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EliminarUsuario() {
  const [usuario, setUsuario] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    cargarDatosUsuario();
  }, []);

  const cargarDatosUsuario = async () => {
    try {
      const response = await axios.get(
        `/api/usuario/${id}`
      );
      setUsuario(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/usuario/${id}`);
      navigate("/usuarios");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Eliminar Usuario</h1>
      <hr></hr>
      <div className="card">
        <div className="card-header">Seleccione la opción que corresponda</div>
        <div className="card-body">
          <h2>¿Desea eliminar este usuario?</h2>
          {usuario && (
            <>
              <h3>ID Usuario: {usuario.id_usuario}</h3>
              <h3>
                Nombre: {usuario.nombres} {usuario.apellidos}
              </h3>
              <button className="btn btn-danger" onClick={onSubmit}>
                Eliminar Usuario
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EliminarUsuario;
