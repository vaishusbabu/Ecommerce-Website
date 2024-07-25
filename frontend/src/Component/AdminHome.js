import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AdminHome() {
    return (
        <div className='smain'>
            <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" class="img" ></img>


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
                <br />
            </div>
        </div>
    )
}
export default AdminHome;