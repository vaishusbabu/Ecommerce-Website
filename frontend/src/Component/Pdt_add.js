import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

function Pdt_add() {
  const Navigate = useNavigate()
  const [values, setValues] = useState({
    pdtname: "",
    quantity: "",
    price: "",
    img: ""
  })
  const Change = (e) => {
    if (e.target.name == "img") {
      setValues({ ...values, img: e.target.files[0] });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const Submit = (e) => {
    console.log(e)
    e.preventDefault()
    console.log(values)
    axios.post(`http://localhost:4003/addpdt`, values, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((a) => {
        if (a.status === 200) {
          alert("Added Sucessfully")
          Navigate("/Pdt_add")
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
              <Navbar.Brand href="#home">Welcome Super Admin...</Navbar.Brand>
              <div class="nav">
                <Nav className="me-auto">

                  <Nav.Link href="#products"><Link class="btn btn-outline-light" aria-current="page" to='/Pdt_add'>AddPdt</Link></Nav.Link>
                  <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/View_pdt'>ViewPdts</Link></Nav.Link>
                  <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/ViewCust'>Customer</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/CustOrder'>Orders</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/Admin_login'>Logout</Link></Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
          <br />
        </div>
      </div>
      <div className='reg'>
        <Form onSubmit={Submit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <h3 style={{ textAlign: 'center' }}>Add Product</h3>
            <Form.Control type="text" placeholder="Product name" onChange={Change} name="pdtname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">

            <Form.Control type="number" placeholder="Quantity" onChange={Change} name="quantity" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">

            <Form.Control type="number" placeholder="Price" onChange={Change} name="price" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" onChange={Change} name="img" />
          </Form.Group>
          <Button variant="dark" type='Submit'>Add</Button>
        </Form>
      </div>
    </div>
  )
}

export default Pdt_add