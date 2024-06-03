import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './Logo';
import '../css/Navbar.css'; // Asegúrate de que este archivo esté en la ubicación correcta

function NavBar() {
    return (
        <div className="navbar-container">
            <Navbar expand="lg" className="bg-body-tertiary mb-3 fixed-top">
                <Container fluid className='nav-bar'>
                    <div className="navbar-brand-container">
                        <Logo />
                        <Navbar.Brand href="home">Pets Hub</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar-expand-lg"
                        aria-labelledby="offcanvasNavbarLabel-expand-lg"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="home">Home</Nav.Link>
                                <Nav.Link href="news">News</Nav.Link>
                                <img className="profile-picture" src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"></img>
                                <NavDropdown title="User" id="offcanvasNavbarDropdown-expand-lg" className="dropdown">
                                    <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
