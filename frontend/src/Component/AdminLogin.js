import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function AdminLogin() {
    const Navigate = useNavigate()
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const Change = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const Submit = (e) => {
        e.preventDefault()
        console.log(values)
        if (values.email === 'admin@gmail.com' && values.password === 'admin123') {
            alert("Welcome Admin")
            Navigate("/adminHome")
        }
        else {
            alert("Invalid Login")
        }
    }

    return (

        <div className='smain'>
            <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" class="img" ></img>
            <div className='main1'>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
                        <div class="nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" >Home</Link></Nav.Link>
                                <Nav.Link href="#about"><Link class="btn btn-outline-light" aria-current="page">About</Link></Nav.Link>
                                <Nav.Link href="#login"><Link class="btn btn-outline-light" aria-current="page" to='/adminlogin'>Login</Link></Nav.Link>

                            </Nav>
                        </div>
                    </Container>
                </Navbar>
            </div>
            <div className='main'>

                <Form onSubmit={Submit}>
                    <br></br>
                    <h3>Welcome Super Admin...</h3>
                    <hr></hr>
                    <br></br>
                    <Form.Group className="mb-3" controlId="formGroupEmail"  >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={Change} name="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={Change} name="password" />
                        <br></br>
                        <Button variant="dark" type='Submit'>LOGIN</Button>
                    </Form.Group>
                </Form>
            </div>

        </div>
    );
}

export default AdminLogin;