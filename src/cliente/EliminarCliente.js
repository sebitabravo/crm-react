import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EliminarCliente() {
  const [cliente, setCliente] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatosCliente = async () => {
      try {
        const response = await axios.get(
          `/api/cliente/${id}`
        );
        setCliente(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    cargarDatosCliente();
  }, [id]);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/cliente/${id}`);
      navigate("/clientes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Eliminar Cliente</h1>
      <hr></hr>
      <div className="card">
        <div className="card-header">Seleccione la opción que corresponda</div>
        <div className="card-body">
          <h2>¿Desea eliminar a este usuario?</h2>
          <h3>
            {cliente && cliente.nombres} {cliente.apellidos}
          </h3>
          <button className="btn btn-danger" onClick={onSubmit}>
            Eliminar cliente
          </button>
        </div>
      </div>
    </div>
  );
}
export default EliminarCliente;
