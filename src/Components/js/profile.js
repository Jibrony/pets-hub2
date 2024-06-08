import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import NavBar from './Navbar';
import '../css/Profile.css';

export default function Profile() {
    return (
        <>
            <NavBar />
            <section style={{ backgroundColor: '#FFF', borderRadius: '8px', padding: '20px', marginTop: '50px'}}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol xs="12" sm="6" md="4" lg="4" xl="3">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://i.ibb.co/smbn31B/IMG-2035.jpg"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '500px' }}
                                        fluid />
                                    <p className="text-muted mb-1"></p>
                                    <p className="text mt-2">Frontend Developer</p>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol xs="12" sm="6" md="8" lg="8" xl="9">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">Andrey Julian Gutierrez Arce</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">andy@example.com</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Phone</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">(612) 121 3365</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Address</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">La Paz, B.C.S, MX</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol xs="12" sm="6" md="3" lg="3" xl="3">
                                            <MDBCardText>Status</MDBCardText>
                                        </MDBCol>
                                        <MDBCol xs="12" sm="6" md="9" lg="9" xl="9">
                                            <MDBCardText className="text-muted">Admin</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
}