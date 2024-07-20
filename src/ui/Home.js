import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Bienvenido al CRM</h1>
        <p className="home-description">
          Administra tus clientes, gestiones, resultados y más desde una sola
          plataforma.
        </p>
        <div className="home-buttons">
          <Link to="/clientes" className="home-button home-button-blue">
            Ver Clientes
          </Link>
          <Link to="/gestiones" className="home-button home-button-green">
            Ver Gestiones
          </Link>
          <Link to="/resultados" className="home-button home-button-yellow">
            Ver Resultados
          </Link>
          <Link to="/tipogestion" className="home-button home-button-purple">
            Ver Tipos de Gestión
          </Link>
          <Link to="/usuarios" className="home-button home-button-red">
            Ver Usuarios
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
