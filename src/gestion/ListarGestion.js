import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListaGestiones() {
  const [gestiones, setGestiones] = useState([]);

  useEffect(() => {
    const fetchGestiones = async () => {
      try {
        const response = await axios.get(
          "http://144.126.210.74:8080/api/gestion?_size=500"
        );
        setGestiones(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGestiones();
  }, []);

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
            <th>ID Gestión</th>
            <th>Usuario</th>
            <th>Cliente</th>
            <th>Tipo de Gestión</th>
            <th>Resultado</th>
            <th>Comentarios</th>
            <th>Fecha de Registro</th>
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
