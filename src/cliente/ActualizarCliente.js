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
    fecha_registro: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatosCliente = async () => {
      try {
        const response = await axios.get(
          `/api/cliente/${id}`
        );
        if (response.data && response.data.length > 0) {
          const clienteData = response.data[0];
          setCliente({
            ...clienteData,
            fecha_registro: formatFecha(clienteData.fecha_registro),
          });
        } else {
          console.error("No se encontraron datos del cliente.");
        }
      } catch (error) {
        console.error("Error al cargar los datos del cliente:", error);
      }
    };
    cargarDatosCliente();
  }, [id]);

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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
      await axios.patch(
        `/api/cliente/${id}`,
        cliente
      );
      // Forzar navegación con replace para evitar caché
      navigate("/clientes", { replace: true, state: { refresh: Date.now() } });
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
          <br />
          <label>Fecha de Registro</label>
          <input
            type="date"
            className="form-control"
            name="fecha_registro"
            value={cliente.fecha_registro}
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
