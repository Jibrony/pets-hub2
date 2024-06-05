import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import ProfileTool from './ProfileTool';
import NavBar from './Navbar';
import BackgroundImage from './Background';
import { users } from './Users';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userId = 1; // Replace with actual user ID fetching logic
        const user = users.find((u) => u.id === userId);
        setUser(user);
    }, []);

    return (
        <>
            <NavBar />
            <BackgroundImage src="https://cdn.discordapp.com/attachments/1061724942523191396/1244827857675489320/dog_22.jpg" />
            {user && (
                <div className="perfil-usuario">
                    <section className="seccion-perfil-usuario">
                        <div className="perfil-usuario-header">
                            <div className="perfil-usuario-portada">
                                <div className="perfil-usuario-avatar">
                                    <img src={user.foto} alt="Avatar" />
                                    <button type="button" className="boton-avatar">
                                        <i className="far fa-image"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="perfil-usuario-body">
                            <div className="perfil-usuario-bio">
                                <h3 className="titulo">{user.nombre} {user.primerApellido} {user.segundoApellido}</h3>
                                <p className="texto">{user.descripcion}</p>
                            </div>
                            <div className="perfil-usuario-footer">
                                <ul className="lista-datos">
                                    <li><i className="icono fas fa-phone-alt"></i>Telefono: {user.telefono}</li>
                                    <li><i className="icono fas fa-calendar-alt"></i>Fecha de Nacimiento: {user.fechaNacimiento}</li>
                                    <li><i className="icono fas fa-share-alt"></i>Red social: {user.redesSociales}</li>
                                </ul>
                            </div>
                            <div className="redes-sociales">
                                <a href={user.facebook} className="boton-facebook" target="_blank" rel="noopener noreferrer">
                                    <img className="icon-facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png" alt="Facebook" />
                                </a>
                            </div>
                        </div>
                    </section>

                </div>
            )}
        </>
    );
};

export default Profile;
