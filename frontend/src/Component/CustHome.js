import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import logo from "../Lush.png";
function CustHome() {
    return (
        <div>
            <div className='smain'>
                <img src={logo}
                    height="135" class="img" ></img>
                <div className='main1'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
                            <div class="nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/CustHome'>Home</Link></Nav.Link>
                                    <Nav.Link href="#Regiter"><Link class="btn btn-outline-light" aria-current="page" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                                    <Nav.Link href="#Login"><Link class="btn btn-outline-light" aria-current="page" to='/Cart_list'>Cart List</Link></Nav.Link>
                                    <Nav.Link href="#about"><Link class="btn btn-outline-light" aria-current="page" to='/Orderlist' >My Bag</Link></Nav.Link>
                                    <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to="/Home">Logout</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar>
                    <br>
                    </br>
                    <div style={{ height: '80vh' }} >
                        <Carousel autoPlay={true} showThumbs={false}>
                            <div>

                                <img style={{ height: "70vh", objectFit: "contain" }} src="https://images.pexels.com/photos/1601505/pexels-photo-1601505.jpeg?auto=compress&cs=tinysrgb&w=600" />

                            </div>
                            <div>
                                <img style={{ height: "70vh", objectFit: "contain" }} src="https://images.pexels.com/photos/931166/pexels-photo-931166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                            <div>
                                <img style={{ height: "70vh", objectFit: "contain" }} src="https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>

                        </Carousel>

                        <div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustHome