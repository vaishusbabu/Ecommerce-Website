import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React, { useState } from 'react';
import logo from "../Lush.png";

function Login() {
  const Navigate = useNavigate()

  const [values, setValues] = useState({
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
    axios.post("http://localhost:4003/custlogin", values)
      .then((a) => {
        if (a.data.status === 200) {
          alert("Login Successull")
          Navigate("/CustHome")
          localStorage.setItem("userid", a.data.data._id)      //storing data to local storage
        }
        console.log(a)
      })
      .catch((e) => {
        alert("error")
        console.log(e)
      })
  }

  return (
    <div>
      <div className='smain'>
        <img src={logo} height="135" class="img" ></img>

        <div className='main1'>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand >Fashion Store</Navbar.Brand>
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
      </div>
      <div className='container' >
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <img src='https://images.pexels.com/photos/3392718/pexels-photo-3392718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{ marginLeft: '1', width: '100%' }}></img>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-8' >
            <Form onSubmit={Submit} >
              <br></br>
              <h3 style={{ textAlign: 'center' }}> Log In</h3>
              <hr></hr>
              <br></br>
              <Form.Group className="mb-3 field" controlId="formGroupEmail"  >
                <Form.Label style={{ width: "130px" }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={Change} name="email" />
              </Form.Group>
              <Form.Group className="mb-3 field" controlId="formGroupPassword">
                <Form.Label style={{ width: "130px" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={Change} name="password" />
                <br></br>
              </Form.Group>
              <div className='register'>
                <Button variant="dark" className='submit' type="Submit">LOGIN</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login