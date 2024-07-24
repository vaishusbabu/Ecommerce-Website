import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>

            <div className='smain'>
                <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" class="img" ></img>

                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
                            <div class="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/'>Home</Link></Nav.Link>
                                    <Nav.Link href="#about"><Link class="btn btn-outline-light" aria-current="page" to='/about'>About</Link></Nav.Link>
                                    <Nav.Link href="#register"><Link class="btn btn-outline-light" aria-current="page" to='/register'>Register</Link></Nav.Link>
                                    <Nav.Link href="#login"><Link class="btn btn-outline-light" aria-current="page" to='/login'>Log In</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br>
                    </br>
                    <div class="homeimg" >
                        <img src="https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-144405.jpg?w=1380&t=st=1690724130~exp=1690724730~hmac=ab2fa3c9096ef6801d823771489476bad1f04389a6e125ba04634eed592f798b" width="1700" style={{ marginLeft: '6%' }}></img>
                        <img src="https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?w=1380&t=st=1690723251~exp=1690723851~hmac=1f1126485d24378768cdcfb372db94477cfc7d098c4d6db36de074588f5cd3f0" width="1700" style={{ marginLeft: '6%' }} ></img> <br />
                    </div> </div>
            </div>

        </div>
    )
}

export default Home