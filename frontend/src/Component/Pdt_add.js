import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Pdt_add() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    pdtname: "",
    quantity: "",
    price: "",
    img: []
  });

  const change = (e) => {
    if (e.target.name.startsWith("img")) {
      const index = parseInt(e.target.name.split("_")[1], 10);
      const newImgs = [...values.img];
      newImgs[index] = e.target.files[0];
      setValues({ ...values, img: newImgs });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const addImageInput = () => {
    setValues({ ...values, img: [...values.img, null] });
  };

  const removeImageInput = (index) => {
    const newImgs = values.img.filter((_, i) => i !== index);
    setValues({ ...values, img: newImgs });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(values);

    const formData = new FormData();
    formData.append('pdtname', values.pdtname);
    formData.append('quantity', values.quantity);
    formData.append('price', values.price);
    values.img.forEach((image, index) => {
      if (image) {
        formData.append('img', image);
      }
    });

    axios.post('http://localhost:4003/addpdt', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Added Successfully");
          navigate("/Pdt_add");
        }
        console.log(response);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };

  return (
    <div>
      <div className='smain'>
        <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" className="img" alt="logo" />

        <div className='main1'>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Welcome Super Admin...</Navbar.Brand>
              <div className="nav">
                <Nav className="me-auto">
                  <Nav.Link href="#products">
                    <Link className="btn btn-outline-light" aria-current="page" to='/Pdt_add'>Add </Link>
                  </Nav.Link>
                  <Nav.Link href="#customers">
                    <Link className="btn btn-outline-light" aria-current="page" to='/View_pdt'>View</Link>
                  </Nav.Link>
                  <Nav.Link href="#customers">
                    <Link className="btn btn-outline-light" aria-current="page" to='/ViewCust'>Customers</Link>
                  </Nav.Link>
                  <Nav.Link href="#logout">
                    <Link className="btn btn-outline-light" aria-current="page" to='/CustOrder'>Orders</Link>
                  </Nav.Link>
                  <Nav.Link href="#logout">
                    <Link className="btn btn-outline-light" aria-current="page" to='/adminlogin'>Logout</Link>
                  </Nav.Link>
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
            <img src='https://images.pexels.com/photos/4277099/pexels-photo-4277099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{ marginLeft: '1', width: '100%' }} alt="product"></img>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-8' >

            <Form onSubmit={submit}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <h3 style={{ textAlign: 'center' }}>Add Product</h3>
                <Form.Control type="text" placeholder="Product name" onChange={change} name="pdtname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupQuantity">
                <Form.Control type="number" placeholder="Quantity" onChange={change} name="quantity" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPrice">
                <Form.Control type="number" placeholder="Price" onChange={change} name="price" />
              </Form.Group>
              {values.img.map((_, index) => (
                <Form.Group controlId={`formFile_${index}`} className="mb-3" key={index}>
                  <div className='d-flex' >
                    <Form.Control type="file" onChange={change} name={`img_${index}`} />
                    <Button variant="danger" onClick={() => removeImageInput(index)}>x</Button>
                  </div>
                </Form.Group>
              ))}
              <Button variant="dark" type="button" onClick={addImageInput}>+</Button>
              <Button variant="dark" type='submit'>Add</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdt_add;
