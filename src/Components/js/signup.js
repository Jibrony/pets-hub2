import "../css/SignUp.css"
import BackgroundImage from './Background';
import NavBar from "./Navbar";

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function Signup() {
  const handlePhoneInput = (event) => {
    // Validar que solo se ingresen números
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }

    // Validar que no se excedan los 10 dígitos
    if (event.target.value.length > 9 && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
    }
  };

return (
  <>
    <NavBar />
    <BackgroundImage src="https://i.ibb.co/Sn9YBC4/fondo-pets-hub.jpg" />
    <div className="signup">
      <form className="form">
        <p className="title">Register</p>
        <p className="message">Registrate para tener acceso completo a la aplicación.</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Nombre</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Primer Apellido</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Segundo apellido</span>
          </label>
        </div>
        <label>
          <input required placeholder="dd/mm/aaaa" type="date" className="input" max={getCurrentDate()} />
          <span>Fecha de nacimiento</span>
        </label>
        <label>
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="tel"
            className="input"
            onKeyPress={handlePhoneInput}
            onInput={handlePhoneInput}
            maxLength={10}
          />
          <span>Número de teléfono</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button type="submit" className="submit">Submit</button>
        <p className="signin">Already have an account? <a href="/">Signin</a></p>

      </form>
    </div>
  </>
);
}

export default Signup;
