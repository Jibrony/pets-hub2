import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import '../css/Login.css';
import BackgroundImage from './Background';
import Logo from './Logo';
import Navbar from './Navbar';
import { users } from './Users';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false); // Estado para controlar si el usuario está autenticado
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        const userId = 2; // Replace with actual user ID fetching logic
        const user = users.find((u) => u.id === userId);
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }, []);

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir la recarga de la página por defecto

        // Aquí iría la lógica de validación del formulario
        if (username === 'usuario' && password === 'contraseña') {
            setLoggedIn(true); // Usuario autenticado, cambiar el estado a true
        } else {
            alert('Credenciales incorrectas');
        }
    };

    // Si el usuario está autenticado, redirigir a /home
    if (loggedIn) {
        return <Navigate to="/home" replace />;
    }


    return (
        <>
           <Navbar/>
           <BackgroundImage src="https://i.ibb.co/Sn9YBC4/fondo-pets-hub.jpg" />

            <div className="login-container">
                <div className="form-container">
                    
                    <p className="title">Pets-Hub</p>
                    <Logo/>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-username">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-password">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
                            
                        </div>
                        {/* Usamos type="submit" en lugar de type="button" para que el botón envíe el formulario */}
                        <button type="submit" className="sign">Sign up</button>
                    </form>
                    <br/>
                    <br/>
                    <p className="signup">Don't have an account?
                        <a rel="noopener noreferrer" href="signup" className=""> Sign up</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
