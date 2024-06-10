import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import '../css/Pets.css';
import BackgroundImage from './Background';
import '../css/Card.css'
import { initialReports } from './MissingPetsReports';


function MissingPetCard({ pet }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const statusStyle = {
    backgroundColor: pet.status === 'Perdido' ? 'red' : 'green',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ height: '100%', margin: '0 10px' }}>
        <Card.Img variant="top" src={pet.image} alt={pet.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center">{pet.name}</Card.Title>
            <div style={statusStyle}>{pet.status}</div>
          </div>
          <Button variant="primary" className="btn-card align-self-center mt-2" onClick={handleOpenModal}>Ver</Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{pet.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Raza: {pet.breed}</p>
          <p>Edad: {pet.age}</p>
          <p>Descripción: {pet.description}</p>
          <p>Género: {pet.gender}</p>
          <p>Tamaño: {pet.size}</p>
          <p>Última vez visto en: {pet.lastSeen}</p>
          <p>Estado: {pet.status}</p>
          <p>Fecha de desaparición: {pet.dateMissing}</p>
          {pet.status === 'Encontrado' && <p>Fecha de encontrado: {pet.dateFound}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function ReportForm({ addReport }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    age: '',
    breed: '',
    description: '',
    gender: '',
    size: '',
    lastSeen: '',
    status: 'Perdido',
    dateMissing: '',
    dateFound: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      ...form,
      id: Date.now(),
      image: URL.createObjectURL(e.target.image.files[0]),
    };
    addReport(newReport);
    setForm({
      name: '',
      image: '',
      age: '',
      breed: '',
      description: '',
      gender: '',
      size: '',
      lastSeen: '',
      status: 'Perdido',
      dateMissing: '',
      dateFound: null
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" name="image" accept="image/*" required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" name="age" value={form.age} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Raza</Form.Label>
        <Form.Control type="text" name="breed" value={form.breed} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" name="description" value={form.description} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Género</Form.Label>
        <Form.Control as="select" name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Selecciona</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Tamaño</Form.Label>
        <Form.Control as="select" name="size" value={form.size} onChange={handleChange} required>
          <option value="">Selecciona</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Última vez visto en</Form.Label>
        <Form.Control type="text" name="lastSeen" value={form.lastSeen} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha de desaparición</Form.Label>
        <Form.Control type="date" name="dateMissing" value={form.dateMissing} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Generar Reporte</Button>
    </Form>
  );
}

function MissingPets() {
  const [reports, setReports] = useState(initialReports);
  const [showForm, setShowForm] = useState(false);

  const addReport = (report) => {
    setReports([report, ...reports]);
  };

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div>
      <Navbar />
      <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />
      <h1 className="text-center mt-4 mb-4">REPORTES DE MASCOTAS DESAPARECIDAS</h1>
      <div className="container">
        <div className="text-center mb-4">
          <Button className='btn-card' variant="primary" onClick={handleShowForm}>Generar Reporte</Button>
        </div>
        <div className="row justify-content-center">
          {reports.map((pet) => (
            <MissingPetCard key={pet.id} pet={pet} />
          ))}
        </div>
        {/* Modal para el formulario */}
        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>Generar Reporte de Mascota Desaparecida</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReportForm addReport={addReport} />
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-modal' variant="secondary" onClick={handleCloseForm}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MissingPets;
