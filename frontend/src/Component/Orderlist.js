import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function Orderlist() {

  const id = localStorage.getItem('userid')

  const [values, setValues] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const date = new Date()

  const Cancel = () => {

  }

  useEffect(() => {
    axios.post(`http://localhost:4003/ordpdt/${id}`)
      .then((res) => {
        console.log(res, "res");
        if (res.data != undefined) {
          // setValues(res.data.data1)
          console.log("data", res.data.data1)
          console.log('ysh');
          setData1(res.data.data1)
          setData2(res.data.data2)
        }
      })
      .catch((e) => {
        //alert("error")
        console.log(e)
      })
  }, [])

  // useEffect(() => {
  //     axios.post(`http://localhost:4002/orders`)
  //       .then((res) => {
  //         console.log(res, "res");
  //         if (res.data.data != undefined) {
  //           setValues(res.data.data)
  //         }
  //       })
  //       .catch((e) => {
  //         //alert("error")
  //         // console.log(e)
  //       })
  //   }, [])


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
                  <Nav.Link href="#home"><Link class="btn btn-outline-light" aria-current="page" to='/CustHome'>Home</Link></Nav.Link>
                  <Nav.Link href="#Regiter"><Link class="btn btn-outline-light" aria-current="page" to='/Cust_all_pdt'>Collections</Link></Nav.Link>
                  <Nav.Link href="#Login"><Link class="btn btn-outline-light" aria-current="page" to='/Cart_list'>Cart Lists</Link></Nav.Link>
                  <Nav.Link href="#about"><Link class="btn btn-outline-light" aria-current="page" to='/Orderlist' >My Bag</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to="/Home">Logout</Link></Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
          <br>
          </br>
        </div>
      </div>
      <div className='reg'>
        <h1> My Orders</h1><hr></hr>

        {
          data1.map((e) => {
            return (
              <>

                <div className='card col-12 mb-3'>
                  <div className='card-body'>
                    {/* <h6>{e.custid.firstname}</h6><br></br> */}
                    <h6 class="card_title2">{e.pdtid.pdtname}</h6><br></br>
                    Quantity: {e.quantity}<br></br><hr />
                    Delivery Date : {e.deliverydate}<br></br>
                    Total amount: {e.totalamount}<br></br>
                    paymenttype : {e.paymenttype}<br></br><hr />
                    Shipping Address : {e.shippingaddress}<br></br>

                    <hr></hr>
                  </div>
                </div>
              </>
            )
          })
        }

        {
          data2.map((e) => {
            return (
              <>

                <div className='card col-12 mb-3'>
                  <div className='card-body'>
                    <h6 class="card_title2">{e.pdtid.pdtname}</h6>
                    Quantity: {e.quantity}<br></br><hr />
                    Delivery Date : {e.deliverydate}<br></br>
                    Total amount: {e.totalamount}<br></br>
                    paymenttype : {e.paymenttype}<br></br><hr />
                    Shipping Address : {e.shippingaddress}<br></br><hr />

                    <Button variant='warning' onClick={Cancel}>Cancel</Button>
                    <hr />
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>

  )
}

export default Orderlist