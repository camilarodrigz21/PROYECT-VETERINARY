import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'; // Usamos BrowserRouter
import './App.css';


function App() {
  return (
    <div>
      {/* Barra de Navegación con espacio abajo */}
      <ul className="nav justify-content-center" style={{ marginBottom: '20px' }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/inicio">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/turnos" target="_blank">Turnos</a>
        </li>
      </ul>

      {/* Carousel de Bootstrap */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{ marginBottom: '20px' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="https://via.placeholder.com/800x400?text=Imagen+1" 
              className="d-block w-100" 
              alt="Imagen 1" 
              style={{ height: '300px', objectFit: 'cover' }} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://via.placeholder.com/800x400?text=Imagen+2" 
              className="d-block w-100" 
              alt="Imagen 2"
              style={{ height: '300px', objectFit: 'cover' }} 
            />
          </div>
          <div className="carousel-item">
            <img 
              src="https://via.placeholder.com/800x400?text=Imagen+3" 
              className="d-block w-100" 
              alt="Imagen 3"
              style={{ height: '300px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>

      {/* Card Group de Bootstrap */}
      <div className="card-group">
        <div className="card">
          <img src="https://via.placeholder.com/300x200?text=Card+1" className="card-img-top" alt="Card 1" />
          <div className="card-body">
            <h5 className="card-title">Servicio de Peluqueria</h5>
            <p className="card-text">Realiza la belleza de tu mascota con nuestros servicios de peluqueria. Ofrecemos todo tipo de cortes de pelo al mismo precio que garantizan el bienestar y la estetica de tu companiero fiel. Adaptamos nuestro servicio a las necesidades especificas de cada raza.</p>
            <button type="button" className="btn btn-outline-warning">Solicitar</button>
          </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300x200?text=Card+2" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">Servicios de banio</h5>
            <p className="card-text">Brindamos un servicio completo de baño para tu mascota, con productos hipoalergénicos y adaptados a su tipo de piel y pelaje. Incluye limpieza profunda, secado cuidadoso y un toque final con aromas suaves y agradables.</p>
            <button type="button" className="btn btn-outline-warning">Solicitar</button>
          </div>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300x200?text=Card+3" className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <h5 className="card-title">Servicio de Emergencias</h5>
            <p className="card-text">Atendemos únicamente llamadas relacionadas con emergencias reales que afecten el bienestar de tu mascota. Por favor, contáctanos solo en casos urgentes para garantizar una atención rápida y eficaz.</p>
            <button type="button" className="btn btn-outline-warning">Llamar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


