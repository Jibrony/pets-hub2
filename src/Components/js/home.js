import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/home.css'
import NavBar from './navbar'

function Home() {
  return (
    <>
      <NavBar/>  

      <Container>
        <div className="banner-container">
          <div className="banner banner-left-top">
            <img src="https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-02-a-las-15.33.21.png" alt="Banner 1" />
            <h2>Mascotas</h2>
            <p>Description for Banner 1</p>
            <Button variant="primary">Explore</Button>
          </div>
          <div className="banner banner-right-top">
            <img src="https://www.msd-animal-health.es/wp-content/uploads/sites/20/2021/02/noticia_vacunacion1.jpg" alt="Banner 2" />
            <h2>Vacunas</h2>
            <p>Description for Banner 2</p>
            <Button variant="primary">Explore</Button>
          </div>
          <div className="banner banner-left-bottom">
            <img src="https://nupec.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-08-02-a-las-15.11.57.png" alt="Banner 3" />
            <h2>Adopciones</h2>
            <p>Description for Banner 3</p>
            <Button variant="primary">Explore</Button>
          </div>
          <div className="banner banner-right-bottom">
            <img src="https://marketplace.canva.com/EAFN6H48baE/1/0/1131w/canva-rojo-y-amarillo-divertido-cartel-de-perro-perdido-Ka0Juu6VELE.jpg" alt="Banner 4" />
            <h2>Reportes desapariciones</h2>
            <p>Description for Banner 4</p>
            <Button variant="primary">Explore</Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;