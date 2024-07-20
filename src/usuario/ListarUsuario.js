import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(
          "http://144.126.210.74:8080/api/usuario?_size=500"
        );
        setUsuarios(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsuarios();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Usuarios</h1>
      <hr />
      <a href="/usuarios/agregar" className="btn btn-primary">
        Agregar Usuario
      </a>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Rut</th>
            <th>Dv</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Username</th>
            <th>Fecha</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id_usuario}>
              <td>{usuario.id_usuario}</td>
              <td>{usuario.dv}</td>
              <td>{usuario.nombres}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.email}</td>
              <td>{usuario.celular}</td>
              <td>{usuario.username}</td>
              <td>{usuario.fecha_registro}</td>
              <td>
                <Link
                  to={`/usuarios/eliminar/${usuario.id_usuario}`}
                  className="btn btn-danger"
                >
                  Eliminar
                </Link>
                <Link
                  to={`/usuarios/actualizar/${usuario.id_usuario}`}
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

export default ListaUsuarios;
