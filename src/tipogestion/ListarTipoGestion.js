import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListaTiposGestion() {
  const [tiposGestion, setTiposGestion] = useState([]);

  useEffect(() => {
    const fetchTiposGestion = async () => {
      try {
        const response = await axios.get(
          "http://144.126.210.74:8080/api/tipo_gestion?_size=500"
        );
        setTiposGestion(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTiposGestion();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Tipos de Gestión</h1>
      <hr />
      <a href="/tipogestion/agregar" className="btn btn-primary">
        Agregar Tipo de Gestión
      </a>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>ID Tipo Gestión</th>
            <th>Nombre</th>
            <th>Fecha de Registro</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {tiposGestion.map((tipo) => (
            <tr key={tipo.id_tipo_gestion}>
              <td>{tipo.id_tipo_gestion}</td>
              <td>{tipo.nombre_tipo_gestion}</td>
              <td>{tipo.fecha_registro}</td>
              <td>
                <Link
                  to={`/tipogestion/eliminar/${tipo.id_tipo_gestion}`}
                  className="btn btn-danger"
                >
                  Eliminar
                </Link>
                <Link
                  to={`/tipogestion/actualizar/${tipo.id_tipo_gestion}`}
                  className="btn btn-warning"
                >
                  Actualizar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTiposGestion;
