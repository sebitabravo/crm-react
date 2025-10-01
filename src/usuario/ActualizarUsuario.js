import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ActualizarUsuario() {
  const [usuario, setUsuario] = useState({
    id_usuario: "",
    dv: "",
    nombres: "",
    apellidos: "",
    email: "",
    celular: "",
    username: "",
    password: "",
    fecha_registro: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatosUsuario = async () => {
      try {
        const response = await axios.get(
          `/api/usuario/${id}`
        );
        if (response.data && response.data.length > 0) {
          const usuarioData = response.data[0];
          setUsuario({
            ...usuarioData,
            fecha_registro: formatFecha(usuarioData.fecha_registro),
          });
        } else {
          console.error("No se encontraron datos del usuario.");
        }
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
    };
    cargarDatosUsuario();
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
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `/api/usuario/${id}`,
        usuario
      );
      navigate("/usuarios");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Usuario</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>ID Usuario</label>
          <input
            type="number"
            className="form-control"
            name="id_usuario"
            value={usuario.id_usuario}
            onChange={onChange}
            disabled
          />
          <br />
          <label>DV</label>
          <input
            type="text"
            className="form-control"
            name="dv"
            value={usuario.dv}
            onChange={onChange}
          />
          <br />
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            name="nombres"
            value={usuario.nombres}
            onChange={onChange}
          />
          <br />
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            name="apellidos"
            value={usuario.apellidos}
            onChange={onChange}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={usuario.email}
            onChange={onChange}
          />
          <br />
          <label>Celular</label>
          <input
            type="number"
            className="form-control"
            name="celular"
            value={usuario.celular}
            onChange={onChange}
          />
          <br />
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={usuario.username}
            onChange={onChange}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={usuario.password}
            onChange={onChange}
          />
          <br />
          <label>Fecha de Registro</label>
          <input
            type="date"
            className="form-control"
            name="fecha_registro"
            value={usuario.fecha_registro}
            onChange={onChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Actualizar usuario
        </button>
      </form>
    </div>
  );
}

export default ActualizarUsuario;
