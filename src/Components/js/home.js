import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../css/Home.css'
import NavBar from './Navbar'
import CarouselHome from './Carousel';
import BackgroundImage from './Background';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <NavBar />
      <BackgroundImage src="https://i.ibb.co/Sn9YBC4/fondo-pets-hub.jpg" />
      <div className="home-container">
        <div className="carousel-container">
          <CarouselHome />
        </div>
        <Container>
          <div className="banner-container">
            <div className="banner banner-left-top">
              <img src="https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-02-a-las-15.33.21.png" alt="Banner 1" />
              <h2>Mascotas</h2>
              <p>Description for Banner 1</p>
              <Link to="/pets">
                <Button variant="primary">Explore</Button>
              </Link>
            </div>
            <div className="banner banner-right-top">
              <img src="https://www.msd-animal-health.es/wp-content/uploads/sites/20/2021/02/noticia_vacunacion1.jpg" alt="Banner 2" />
              <h2>Vacunas</h2>
              <p>Description for Banner 2</p>
              <Link to="/vaccines">
                <Button variant="primary">Explore</Button>
              </Link>
            </div>
            <div className="banner banner-left-bottom">
              <img src="https://nupec.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-08-02-a-las-15.11.57.png" alt="Banner 3" />
              <h2>Adopciones</h2>
              <p>Description for Banner 3</p>
              <Link to="/adoption">
                <Button variant="primary">Explore</Button>
              </Link>
            </div>
            <div className="banner banner-right-bottom">
              <img src="https://marketplace.canva.com/EAFN6H48baE/1/0/1131w/canva-rojo-y-amarillo-divertido-cartel-de-perro-perdido-Ka0Juu6VELE.jpg" alt="Banner 4" />
              <h2>Reportes desapariciones</h2>
              <p>Description for Banner 4</p>
              <Link to="/missingpets">
                <Button variant="primary">Explore</Button>
              </Link>            </div>
          </div>
        </Container>
        <AboutUs/>
      </div>
    </>
  );
}

export default Home;