import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function ListaGestiones() {
  const [gestiones, setGestiones] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchGestiones = async () => {
      try {
        const response = await axios.get(
          "/api/gestion?_size=500"
        );
        setGestiones(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error);
        setGestiones([]);
      }
    };
    fetchGestiones();
  }, [location.state]);

  return (
    <div className="container">
      <h1>Lista de Gestiones</h1>
      <hr />
      <a href="/gestiones/agregar" className="btn btn-primary">
        Agregar Gestión
      </a>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Cliente</th>
            <th>Tipo</th>
            <th>Resultado</th>
            <th>Comentarios</th>
            <th>Fecha</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {gestiones.map((gestion) => (
            <tr key={gestion.id_gestion}>
              <td>{gestion.id_gestion}</td>
              <td>{gestion.id_usuario}</td>
              <td>{gestion.id_cliente}</td>
              <td>{gestion.id_tipo_gestion}</td>
              <td>{gestion.id_resultado}</td>
              <td>{gestion.comentarios}</td>
              <td>{gestion.fecha_registro}</td>
              <td>
                <Link
                  to={`/gestiones/eliminar/${gestion.id_gestion}`}
                  className="btn btn-danger"
                >
                  Eliminar
                </Link>
                <Link
                  to={`/gestiones/actualizar/${gestion.id_gestion}`}
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

export default ListaGestiones;
