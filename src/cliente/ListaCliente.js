import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListaClientes() {
  const [clientes, setCliente] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get(
          "http://144.126.210.74:8080/api/cliente?_size=500"
        );
        setCliente(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClientes();
  }, []);

  return (
    <div className="container">
      <h1>Lista de clientes</h1>
      <hr />
      <a href="/clientes/agregar" className="btn btn-primary">
        Agregar Cliente
      </a>
      <br />
      <br />
      <table className="table">
        <thead>
          <th>ID</th>
          <th>DV</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Celular</th>
          <th>Opciones</th>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr>
              <td>{cliente.id_cliente}</td>
              <td>{cliente.dv}</td>
              <td>{cliente.nombres}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.email}</td>
              <td>{cliente.celular}</td>
              <td>
                <Link
                  to={`/clientes/eliminar/${cliente.id_cliente}`}
                  className="btn btn-danger"
                >
                  Eliminar
                </Link>
                <Link to={`/clientes/actualizar/${cliente.id_cliente}`} className="btn btn-warning"  >
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
export default ListaClientes;
