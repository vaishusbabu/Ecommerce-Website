import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function Orderlist() {
  const id = localStorage.getItem('userid');
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios.post(`http://localhost:4003/ordpdt/${id}`)
      .then(res => {
        console.log(res, "res");
        if (res.data) {
          setData1(res.data.data1);
          setData2(res.data.data2);
        }
      })
      .catch(e => console.error(e));
  }, [id]);

  const cancelOrder = (orderId) => {
    axios.delete(`http://localhost:4003/cancelOrder/${orderId}`)
      .then(() => {
        setData2(prevData => prevData.filter(order => order._id !== orderId));
      })
      .catch(e => console.error(e));
  };

  return (
    <div>
      <div className='smain'>
        <img src="https://ar.happyvalentinesday2020.online/pics/thumbs.dreamstime.com/b/logo-store-fashion-hanger-vector-design-clothes-clothing-shop-icon-symbol-online-illustration-background-white-style-sale-isolated-148064914.jpg" height="135" className="img" alt="Store Logo"></img>
        <div className='main1'>
          <Navbar bg="dark">
            <Container>
              <Navbar.Brand href="#fashionstore">Fashion Store</Navbar.Brand>
              <div className="nav">
                <Nav className="me-auto">
                  <Nav.Link><Link className="btn btn-outline-light" to='/CustHome'>Home</Link></Nav.Link>
                  <Nav.Link><Link className="btn btn-outline-light" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                  <Nav.Link><Link className="btn btn-outline-light" to='/Cart_list'>Cart Lists</Link></Nav.Link>
                  <Nav.Link><Link className="btn btn-outline-light" to='/Orderlist'>My Bag</Link></Nav.Link>
                  <Nav.Link><Link className="btn btn-outline-light" to="/Home">Logout</Link></Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
          <br />
        </div>
      </div>
      <div className='reg'>
        <h1> My Orders</h1><hr />

        {data1.map(e => (
          <div key={e._id} className='card col-12 mb-3'>
            <div className='card-body'>
              <h6 className="card_title2">{e.pdtid.pdtname}</h6>
              <br />
              Quantity: {e.quantity}<br /><hr />
              Delivery Date: {new Date(e.deliverydate).toLocaleDateString()}<br />
              Total amount: {e.totalamount}<br />
              Payment type: {e.paymenttype}<br /><hr />
              Shipping Address: {e.shippingaddress}<br />
              <hr />
            </div>
          </div>
        ))}

        {data2.map(e => (
          <div key={e._id} className='card col-12 mb-3'>
            <div className='card-body'>
              <h6 className="card_title2">{e.pdtid.pdtname}</h6>
              Quantity: {e.quantity}<br /><hr />
              Delivery Date: {new Date(e.deliverydate).toLocaleDateString()}<br />
              Total amount: {e.totalamount}<br />
              Payment type: {e.paymenttype}<br /><hr />
              Shipping Address: {e.shippingaddress}<br /><hr />
              <Button variant='warning' onClick={() => cancelOrder(e._id)}>Cancel</Button>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orderlist;
