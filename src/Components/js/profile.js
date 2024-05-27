import React from 'react';
import '../css/profile.css';
import ProfileTool from './profiletool';
import NavBar from './navbar';

const Profile = () => {
    return (
        <>
            <NavBar/>
            <div className="perfil-usuario">

                <section className="seccion-perfil-usuario">
                    <div className="perfil-usuario-header">
                        <div className="perfil-usuario-portada">
                            <div className="perfil-usuario-avatar">
                                <img src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" alt="img-avatar" />
                                <button type="button" className="boton-avatar">
                                    <i className="far fa-image"></i>
                                </button>
                            </div>
                            <button type="button" className="boton-portada">
                                <i className="far fa-image"></i> Cambiar fondo
                            </button>
                        </div>
                    </div>
                    <div className="perfil-usuario-body">
                        <div className="perfil-usuario-bio">
                            <h3 className="titulo">Maria Alejandra De la Cruz</h3>
                            <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="perfil-usuario-footer">
                            <ul className="lista-datos">
                                <li><i className="icono fas fa-map-signs"></i> Direccion de usuario:</li>
                                <li><i className="icono fas fa-phone-alt"></i> Telefono:</li>
                                <li><i className="icono fas fa-briefcase"></i> Trabaja en.</li>
                                <li><i className="icono fas fa-building"></i> Cargo</li>
                            </ul>
                            <ul className="lista-datos">
                                <li><i className="icono fas fa-map-marker-alt"></i> Ubicacion.</li>
                                <li><i className="icono fas fa-calendar-alt"></i> Fecha nacimiento.</li>
                                <li><i className="icono fas fa-user-check"></i> Registro.</li>
                                <li><i className="icono fas fa-share-alt"></i> Redes sociales.</li>
                            </ul>
                        </div>
                        <div className="redes-sociales">
                            <a href="" className="boton-redes facebook fab fa-facebook-f"><i className="icon-facebook"></i></a>
                            <a href="" className="boton-redes twitter fab fa-twitter"><i className="icon-twitter"></i></a>
                            <a href="" className="boton-redes instagram fab fa-instagram"><i className="icon-instagram"></i></a>
                        </div>
                    </div>
                </section>
                <ProfileTool />
            </div>
        </>
    );
}

export default Profile;
