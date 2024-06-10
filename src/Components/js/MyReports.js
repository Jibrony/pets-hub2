import React, { useState } from 'react';
import NavBar from './Navbar';
import BackgroundImage from './Background';
import { initialReports } from './MissingPetsReports';
import '../css/MyReports.css';
import '../css/Card.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ReportTable() {
  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  return (
    <>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th style={{textAlign: 'center'}}>ID</th>
              <th style={{textAlign: 'center'}}>NOMBRE</th>
              <th style={{textAlign: 'center'}}>STATUS</th>
              <th style={{textAlign: 'center'}}>TIPO</th>
              <th style={{textAlign: 'center'}}>DETALLES DE LA MASCOTA</th>
            </tr>
          </thead>
          <tbody>
            {initialReports.map((report, index) => (
              <tr key={report.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td style={{textAlign: 'center'}}>{report.id}</td>
                <td>{report.name}</td>
                <td>{report.status}</td>
                <td>{report.status === 'Perdido' ? 'Perdido' : 'Encontrado'}</td>
                <td style={{textAlign: 'center'}}>
                  <button onClick={() => handleOpenModal(report)} className="btn-card btn-primary" style={{borderRadius: '8px'}}>Ver Detalles</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPet && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPet.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedPet.image} alt={selectedPet.name} style={{ maxWidth: '100%' }} />
            <p><strong>Raza:</strong> {selectedPet.breed}</p>
            <p><strong>Edad:</strong> {selectedPet.age}</p>
            <p><strong>Descripción:</strong> {selectedPet.description}</p>
            <p><strong>Género:</strong> {selectedPet.gender}</p>
            <p><strong>Tamaño:</strong> {selectedPet.size}</p>
            <p><strong>Última vez visto en:</strong> {selectedPet.lastSeen}</p>
            <p><strong>Estado:</strong> {selectedPet.status}</p>
            <p><strong>Fecha de desaparición:</strong> {selectedPet.dateMissing}</p>
            {selectedPet.status === 'Encontrado' && <p><strong>Fecha de encontrado:</strong> {selectedPet.dateFound}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

function MyReports() {
  return (
    <>
      <NavBar />
      <div className="text-center">
        <h1 className="title-report" style={{color: 'white'}}>MIS REPORTES</h1>
      </div>
      <div className="content">
        <ReportTable />
      </div>
      <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />
    </>
  );
}

export default MyReports;
