import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function ViewCust() {

  const [values, setValues] = useState(
    []
  )

  useEffect(() => {
    axios.post('http://localhost:4003/allcust')
      .then((res) => {
        console.log(res, "res");

        if (res.data.data != undefined) {
          setValues(res.data.data)
        }
      })
      .catch((e) => {
        alert("error")
        console.log(e)
      })
  }, [])
  const Submit = (id) => {
    setValues(prevArray => prevArray.filter(item => item._id !== id));
    console.log(values)
    axios.post(`http://localhost:4003/delete/${id}`, values)
      .then((a) => {
        alert("Deleted Sucessfully")
      })
      .catch((e) => {
        alert('error')
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
                  <Nav.Link href="#products"><Link class="btn btn-outline-light" aria-current="page" to='/Pdt_add'>Addpdt</Link></Nav.Link>
                  <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/View_pdt'>Viewpdt</Link></Nav.Link>
                  <Nav.Link href="#customers"><Link class="btn btn-outline-light" aria-current="page" to='/ViewCust'>Customers</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/CustOrder' >Orders</Link></Nav.Link>
                  <Nav.Link href="#logout"><Link class="btn btn-outline-light" aria-current="page" to='/adminlogin'>Logout</Link></Nav.Link>
                </Nav>
              </div>
            </Container>
          </Navbar>
          <br />
        </div>
      </div>
      <h3> View all Customers Details</h3><hr></hr>
      <div class="row">
        {

          values.map((e, key) => {

            return (
              <form key={key} onSubmit={Submit} style={{ float: "left" }}>
                <>
                  <div class="card">
                    <div class="card" style={{ width: "18rem", margin: "25px" }}>
                      <div class="card-body">
                        <h5 class="card-title" style={{ color: "darkblue" }}>{e.firstname}</h5>
                        <p class="card-text">Lastname: {e.lastname}</p>
                        <label>Email :</label>{e.email}<br /><br />
                        <Button variant='info' onClick={() => Submit(e._id)}>Delete</Button>
                      </div>
                    </div>
                  </div>
                </>
              </form>
            )
          })


        }
      </div>
    </div>
  )
}

export default ViewCust