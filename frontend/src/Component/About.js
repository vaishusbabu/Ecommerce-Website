import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function About() {
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
                </div>
            </div><br></br><h3>About us</h3><hr></hr>
            <iframe width="560" height="315" style={{ marginLeft: '18%' }} src="https://www.youtube.com/embed/Lxy4fLm-C5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iKm-9I2XVrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br></br><br></br><br></br>
            <div >
                <h5 style={{ textAlign: 'center' }}>ALL YOU NEED TO KNOW ABOUT US!</h5><hr></hr>
                <div className='content'>
                    <p>We are curating a legacy of Unrivaled skill, Impeccable Innovation & the spirit of Bespoke<br></br>craftsmanship through THE FASHION STORE.</p>
                    <br></br><br></br>
                    <p>We are about to take your alter<br></br>
                        ego to the next level.</p>
                    <p>A Bespoke Clothingr Brand that envisions to create a very distinctive footwear collection with the core of crafting a made-to-measure experience for every step that you take.<br></br>
                        <br></br>
                        The artisans at THE FASHION STORE atelier begin the metamorphic process of turning sustainable sourced materials into objects of ultimate luxury and designs that resonate with your personalities without compromising comfort over fashion.<br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        A Bespoke clothing Brand that envisions to create a very distinctive footwear collection with the core of crafting a made-to-measure experience for every step that you take.<br></br>
                        <br></br>
                        The artisans at THE FASHION STORE atelier begin the metamorphic process of turning sustainable sourced materials into objects of ultimate luxury and designs that resonate with your personalities without compromising comfort over fashion.<br></br>
                        <br></br>
                        <br></br>
                        A WIDE SPECTRUM OF FASHIONABLE CLOTHING IN CONTEMPORARY STYLES FOR YOUR EVERYDAY MOOD..<br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        At THE ALTER we thrive to create, cruelty–free, sustainable & premium quality clothing in unique silhouettes along with extraordinary comfort.<br></br>
                        <br></br>
                        Our capsule collections consist of aesthetic yet functional footwear that distinctively sets us apart from the norm<br></br>
                        <br></br>
                        We’re normalizing the zany personality, the weird ones, the crazy creative souls, the environmentalists, the ‘I’m different’ clan.<br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        THIS IS US AT THE ALTER AND YOU ARE OUR INSPIRATION</p></div>
            </div>
        </div>
    )
}

export default About