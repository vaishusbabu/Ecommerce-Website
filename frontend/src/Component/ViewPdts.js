import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function View_pdt() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    axios.post(`http://localhost:4003/allpdt`)
      .then((res) => {
        console.log(res, "res");
        if (res.data.data !== undefined) {
          setValues(res.data.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const dltpdt = (id) => {
    setValues(prevArray => prevArray.filter(item => item._id !== id));
    console.log(id);
    axios.post(`http://localhost:4003/delpdt/${id}`, values)
      .then((a) => {
        alert("Deleted Successfully");
      })
      .catch((e) => {
        alert("error");
        console.log(e);
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
                  <Nav.Link href="#products"><Link className="btn btn-outline-light" aria-current="page" to='/Pdt_add'>Add Pdt</Link></Nav.Link>
                  <Nav.Link href="#customers"><Link className="btn btn-outline-light" aria-current="page" to='/View_pdt'>View Pdt</Link></Nav.Link>
                  <Nav.Link href="#customers"><Link className="btn btn-outline-light" aria-current="page" to='/ViewCust'>Customers</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link className="btn btn-outline-light" aria-current="page" to='/CustOrder' >Orders</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link className="btn btn-outline-light" aria-current="page" to='/Admin_login'>Logout</Link></Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
          <br />
        </div>
      </div>
      <div>
        <h1 style={{ color: "darkred", backgroundColor: "lavenderblush" }}> Products Lists</h1><hr />
        <div className="row">
          {
            values.map((product, key) => (
              <div className="col-4" key={key}>
                <div className="card" style={{ width: "28rem", margin: "13px", textAlign: "center" }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "darkblue" }}>{product.pdtname}</h5>
                    <label>Quantity :</label> {product.quantity}<br />
                    <label>Price :</label> {product.price}<br />
                    <div>
                      <Carousel autoPlay={true} showThumbs={false}>
                        {product.img.map((imgPath, idx) => {
                          const imageName = imgPath.split('/').pop();
                          const newImageUrl = `http://localhost:4003/${imageName}`;
                          return (
                            <div>

                              <img key={idx} src={newImageUrl} alt={product.pdtname} width={100} style={{ margin: '10px', objectFit: 'contain', height: '300px', width: '250px' }} />

                            </div>

                            // <img key={idx} src={newImageUrl} alt={product.pdtname} width={200} style={{ margin: '10px' }} />
                          );
                        })}
                      </Carousel>
                    </div>
                    <Button variant='outline-danger' onClick={() => dltpdt(product._id)}>Delete</Button>
                    <Link to={`/Edit/${product._id}`}><Button variant='outline-warning' className='Submit'>Edit</Button></Link>
                    <hr />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default View_pdt;
