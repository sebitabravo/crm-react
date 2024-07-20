import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActualizarCliente() {
  const [cliente, setCliente] = useState({
    id_cliente: "",
    dv: "",
    nombres: "",
    apellidos: "",
    email: "",
    celular: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    cargarDatosCliente();
  }, []);

  const cargarDatosCliente = async () => {
    try {
      const response = await axios.get(`http://144.126.210.74:8080/api/cliente/${id}`);
      if (response.data && response.data.length > 0) {
        setCliente(response.data[0]);
      } else {
        console.error("No se encontraron datos del cliente.");
      }
    } catch (error) {
      console.error("Error al cargar los datos del cliente:", error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://144.126.210.74:8080/api/cliente/${id}`, cliente);
      console.log("Cliente actualizado exitosamente:", response.data);
      navigate("/clientes");
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Cliente</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>RUT</label>
          <input
            type="number"
            className="form-control"
            name="id_cliente"
            value={cliente.id_cliente}
            onChange={onChange}
            disabled
          />
          <br />
          <label>Dv</label>
          <input
            type="text"
            className="form-control"
            name="dv"
            value={cliente.dv}
            onChange={onChange}
          />
          <br />
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            name="nombres"
            value={cliente.nombres}
            onChange={onChange}
          />
          <br />
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            name="apellidos"
            value={cliente.apellidos}
            onChange={onChange}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={cliente.email}
            onChange={onChange}
          />
          <br />
          <label>Celular</label>
          <input
            type="number"
            className="form-control"
            name="celular"
            value={cliente.celular}
            onChange={onChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Actualizar cliente
        </button>
      </form>
    </div>
  );
}

export default ActualizarCliente;