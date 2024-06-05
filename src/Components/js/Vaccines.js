import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
import { vaccines } from './VaccinesList'; // Asegúrate de que este archivo exporte correctamente el arreglo de vacunas
import '../css/Vaccines.css';
import BackgroundImage from './Background';

function VaccinesList({ vacuna }) {
  const [showModal, setShowModal] = useState(false); // Estado para controlar si el modal está abierto o cerrado

  const handleOpenModal = () => setShowModal(true); // Función para abrir el modal
  const handleCloseModal = () => setShowModal(false); // Función para cerrar el modal

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ height: '100%', margin: '0 10px' }}>
        <Card.Img variant="top" src={vacuna.image} alt={vacuna.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center">{vacuna.name}</Card.Title>
            <Card.Text>{vacuna.description}</Card.Text>
          </div>
          <Button variant="primary" className="align-self-center" onClick={handleOpenModal}>Ver</Button> {/* Abrir modal al hacer clic */}
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{vacuna.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{vacuna.descripcionExtensa}</p>
          <p>Efectos Secundarios: {vacuna.efectosSecundarios}</p>
          <p>Edad mínima de aplicación: {vacuna.edadMinima}</p>
          <p>Para: {vacuna.mascotasAplicacion}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

// Componente principal que renderiza todas las vacunas
function Vaccines() {
  return (
    <div>
      <Navbar />
      <BackgroundImage src="https://i.ibb.co/Sn9YBC4/fondo-pets-hub.jpg" />
      <h1 className="vacuna-titulo">VACUNAS</h1>
      <div className="container">
        <div className="row justify-content-center">
          {vaccines.map((vacuna) => (
            <VaccinesList key={vacuna.id} vacuna={vacuna} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vaccines;
