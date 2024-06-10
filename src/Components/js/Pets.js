import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import { MyPets as initialPets } from './PetsList'; // Asegúrate de que este archivo exporte correctamente el arreglo de mascotas
import '../css/Pets.css'; // Asegúrate de que el archivo CSS se importe correctamente
import BackgroundImage from './Background';
import '../css/Card.css';

// Mock function to get user ID. Replace this with actual implementation.
const getUserID = () => 1;

function PetCard({ pet }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={pet.image} alt={pet.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center">{pet.name}</Card.Title>
            <Card.Text className="text-center">{pet.age} años / {pet.gender}</Card.Text>
          </div>
          <Button variant="primary" className="btn-card align-self-center" onClick={handleOpenModal}>Ver Detalles</Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{pet.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Raza: {pet.breed}</p>
          <p>Edad: {pet.age} años</p>
          <p>Género: {pet.gender}</p>
          <p>Tamaño: {pet.size}</p>
          <p>Vacunas: {pet.vaccines.join(', ')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-modal' variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Pets() {
  const userId = getUserID();
  const [pets, setPets] = useState(initialPets);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPet, setNewPet] = useState({
    id: null,
    name: '',
    image: '',
    age: '',
    breed: '',
    gender: '',
    size: '',
    vaccines: ''
  });
  const [imageFile, setImageFile] = useState(null);

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPet({ ...newPet, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Por favor, sube una imagen.");
      return;
    }
    const newPetData = {
      ...newPet,
      id: Date.now(),
      image: URL.createObjectURL(imageFile),
      vaccines: newPet.vaccines.split(',').map(vaccine => vaccine.trim()) // Convertir a array
    };
    const updatedPets = [...pets, newPetData];
    setPets(updatedPets);
    setShowAddModal(false);
    setNewPet({
      id: null,
      name: '',
      image: '',
      age: '',
      breed: '',
      gender: '',
      size: '',
      vaccines: ''
    });
    setImageFile(null);
  };
  

  return (
    <div>
      <Navbar />
      <BackgroundImage src="https://i.ibb.co/D7pVW8y/bg-pethub-2.jpg" />
      <h1 className="text-center mt-4 mb-4">MIS MASCOTAS</h1>
      <div className="container">
        <div className="row justify-content-center">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Button variant="primary" onClick={handleShowAddModal}>Añadir Nueva Mascota</Button>
        </div>
      </div>

      {/* Add Pet Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Nueva Mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddPet}>
            <Form.Group controlId="formPetName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="name" value={newPet.name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formPetImage">
              <Form.Label>Foto</Form.Label>
              <Form.Control type="file" name="image" accept="image/*" onChange={handleImageChange} required />
            </Form.Group>
            <Form.Group controlId="formPetAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" name="age" value={newPet.age} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formPetBreed">
              <Form.Label>Raza</Form.Label>
              <Form.Control type="text" name="breed" value={newPet.breed} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formPetGender">
              <Form.Label>Género</Form.Label>
              <Form.Control as="select" name="gender" value={newPet.gender} onChange={handleInputChange} required>
                <option value="">Selecciona</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPetSize">
              <Form.Label>Tamaño</Form.Label>
              <Form.Control as="select" name="size" value={newPet.size} onChange={handleInputChange} required>
                <option value="">Selecciona</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPetVaccines">
              <Form.Label>Vacunas</Form.Label>
              <Form.Control type="text" name="vaccines" value={newPet.vaccines} onChange={handleInputChange} placeholder="Separadas por comas" required />
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseAddModal}>Cerrar</Button>
            <Button variant="primary" type="submit">Guardar Mascota</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Pets;
