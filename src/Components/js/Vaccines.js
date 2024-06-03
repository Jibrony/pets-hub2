import React from 'react';
import { vaccines } from './VaccinesList';
import '../css/Vaccines.css';
import Navbar from './Navbar';

const Vaccines = () => {
  return (
    <>
      <Navbar />
      <div>
        {vaccines.map((vacuna, index) => (
          <div key={index}>
            <img className='vacuna-imagen' src={vacuna.image} alt={vacuna.name} />
            <h2 className='vacuna-titulo'>{vacuna.name}</h2>
            <p className='vacuna-descripcion'>{vacuna.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Vaccines;