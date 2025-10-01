import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListaResultados() {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const response = await axios.get(
          "/api/resultado?_size=500"
        );
        setResultados(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error);
        setResultados([]);
      }
    };
    fetchResultados();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Resultados</h1>
      <hr />
      <a href="/resultados/agregar" className="btn btn-primary">
        Agregar Resultado
      </a>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado) => (
            <tr key={resultado.id_resultado}>
              <td>{resultado.id_resultado}</td>
              <td>{resultado.nombre_resultado}</td>
              <td>{resultado.fecha_registro}</td>
              <td>
                <Link
                  to={`/resultados/eliminar/${resultado.id_resultado}`}
                  className="btn btn-danger"
                >
                  Eliminar
                </Link>
                <Link
                  to={`/resultados/actualizar/${resultado.id_resultado}`}
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

export default ListaResultados;
