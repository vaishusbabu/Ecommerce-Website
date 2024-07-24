import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Register() {
    const Navigate = useNavigate()
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const Change = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const Submit = (e) => {
        console.log(e)
        e.preventDefault()
        console.log(values)
        axios.post("http://localhost:4002/insertdata", values)
            .then((a) => {
                if (a.status === 200) {
                    alert("Registered Sucessfully")
                    Navigate("/Home")
                }
                console.log(a)
            })
            .catch((e) => {
                alert("Error")
                console.log(e)
            })
    }

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
                    <br />
                </div>

                <div className='reg'>
                    <Form onSubmit={Submit} >
                        <br></br>
                        <h3 style={{ textAlign: 'center' }}>Registration Form</h3>
                        <hr></hr>
                        <div className='forms'>
                            <Form.Group className="mb-3 field" style={{ display: "flex", alignItems: "center" }} controlId="formGroupEmail">

                                <Form.Label style={{ width: "130px" }}>First Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" onChange={Change} name="firstname" />
                            </Form.Group>
                            <Form.Group className="mb-3 field" controlId="formGroupPassword">
                                <Form.Label style={{ width: "130px" }}>Last Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" onChange={Change} name="lastname" />

                            </Form.Group>

                            <Form className="mb-3 field">
                                <Form.Label style={{ width: "130px" }}>Gender :</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3 field">
                                        <Form.Check
                                            inline
                                            label="Female"

                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Form>

                            <Form.Group className="mb-3 field" controlId="formGroupEmail">
                                <Form.Label style={{ width: "130px" }}>Email :</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" onChange={Change} name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3 field" controlId="formGroupPassword">
                                <Form.Label style={{ width: "130px" }}>Password :</Form.Label>
                                <Form.Control type="password" placeholder="Enter your Password" onChange={Change} name="password" />
                            </Form.Group>
                            <div className='register'>
                                <Button variant="dark" type='Submit'>Submit</Button>
                            </div>


                        </div>
                    </Form>
                </div>
            </div >
        </div >
    )
}

export default Register