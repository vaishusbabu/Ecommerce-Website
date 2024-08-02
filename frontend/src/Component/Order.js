import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../Lush.png';

function Order() {
  const { id } = useParams();
  const location = useLocation();
  const { order } = location.state || { order: {} };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    order[name] = value;
  };

  return (
    <div>
      <div className='smain'>
        <img src={logo} height="135" className="img" alt="logo" />
        <div className='main1'>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#fashionstore">Lush Blooms</Navbar.Brand>
              <div className="nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home"><Link className="btn btn-outline-light" aria-current="page" to='/CustHome'>Home</Link></Nav.Link>
                  <Nav.Link href="#Regiter"><Link className="btn btn-outline-light" aria-current="page" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                  <Nav.Link href="#Login"><Link className="btn btn-outline-light" aria-current="page" to='/Cart_list'>CartList</Link></Nav.Link>
                  <Nav.Link href="#about"><Link className="btn btn-outline-light" aria-current="page" to='/Orderlist' >My Bag</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link className="btn btn-outline-light" aria-current="page" to="/Home">Logout</Link></Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
          <br />
        </div>
      </div>
      <div className='reg'>
        <h1>Order</h1>
        <hr />
        {order.products && order.products.length > 0 ? (
          order.products.map((product, index) => (
            <div key={index}>
              <p>Product ID: {product.pdtid}</p>
              <p>Quantity: {product.quantity}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No products in the order</p>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPaymentType">
            <Form.Label>Payment Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter payment type"
              name="paymenttype"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formShippingAddress">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter shipping address"
              name="shippingaddress"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTotalAmount">
            <Form.Label>Total Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Total amount"
              name="totalamount"
              value={order.totalamount}
              readOnly
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Place Order
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Order;
