import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import logo from "../Lush.png";

function AdminHome() {
    return (
        <div className='smain'>
            <img src={logo}
                height="135" class="img" ></img>


            <div className='main1'>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Welcome Super Admin...</Navbar.Brand>
                        <div class="nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#products"><Link class="btn btn-outline-light" aria-current="page" to='/Pdt_add'>Addpdt</Link></Nav.Link>
                                <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/View_pdt'>Viewpdt</Link></Nav.Link>
                                <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/ViewCust'>Customer</Link></Nav.Link>
                                <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/CustOrder'>Orders</Link></Nav.Link>
                                <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/adminlogin'>Logout</Link></Nav.Link>
                            </Nav>
                        </div>
                    </Container>
                </Navbar>


            </div>
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

                <div></div>
                <br />
            </div>
        </div>
    )
}
export default AdminHome;